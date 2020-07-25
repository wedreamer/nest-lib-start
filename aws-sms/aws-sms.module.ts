import { AwsSmsService } from './aws-sms.service';
import { Module, DynamicModule, Global } from '@nestjs/common';
import { SNSOption, awsSmsProvider, OPTIONS } from './aws-sms-provider';

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [
        AwsSmsService,
    ],
})
export class AwsSmsModule { 
    public static forRoot(options: SNSOption): DynamicModule {
        return {
            module: AwsSmsModule,
            providers: [
                awsSmsProvider(),
                { provide: OPTIONS, useValue: options }
            ],
            exports: [AwsSmsService]
        };
    }
 }
