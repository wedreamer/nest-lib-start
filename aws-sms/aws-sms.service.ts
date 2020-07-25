import { Injectable, Inject } from "@nestjs/common";
import { SNS } from 'aws-sdk';
import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";
import { AWSSMS } from "./aws-sms-provider";

const PNF = PhoneNumberFormat;
const phoneUtil = PhoneNumberUtil.getInstance();

export type PublishResponse = SNS.Types.PublishResponse

@Injectable()
export class AwsSmsService {
  constructor(
    @Inject(AWSSMS)  private readonly sns : SNS
  ) { }
  /**
   * 发送短信
   * @param phoneNumber 手机号码
   * @param message 消息内容
   */
  async send(phoneNumber: string, message: string): Promise<PublishResponse> {
    const normalizedPhoneNumber = phoneNumber.startsWith('1') || phoneNumber.startsWith('+861')
      ? phoneUtil.format(phoneUtil.parseAndKeepRawInput(phoneNumber, 'CN'), PNF.E164)
      : phoneUtil.format(phoneUtil.parseAndKeepRawInput(phoneNumber, 'TW'), PNF.E164)
      console.log(normalizedPhoneNumber)

    return new Promise((resolve, reject) =>
      this.sns.publish({ Message: message, PhoneNumber: normalizedPhoneNumber }, (err, data) => err ? reject(err) : resolve(data)))
  }
}