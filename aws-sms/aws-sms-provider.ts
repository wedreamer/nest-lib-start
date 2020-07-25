import { SNS } from "aws-sdk";

export type SNSOption = SNS.ClientConfiguration

export const AWSSMS = Symbol('AWSSMS');
export const OPTIONS = Symbol('AWSSMS_OPTIONS');

export const awsSmsProvider = () => ({
  provide: AWSSMS,
  useFactory: (option: SNSOption) => {
    return new SNS(option);
  },
  inject: [OPTIONS]
});