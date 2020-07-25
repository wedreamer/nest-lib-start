
# nest-oss OSS ??
???<font color="#dd0000">??????????????</font><br /> 
[Nest](https://github.com/nestjs/nest)?? ???? ??

## ????
??????????????????????????????????

## ??

```bash
$ npm i @shubuzuo/nestjs-sms
```
or 
```bash
$ yarn add @shubuzuo/nestjs-sms 
```

## ??
config.js ??
```javascript

export const config = {
	"ApiKeyPublic": "-------",
  "ApiKeyPrivate": "-------"
};

```

module.ts
```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AwsSmsModule } from '@shubuzuo/nestjs-sms'

@Module({
  imports: [
    AwsSmsModule.forRoot({
      accessKeyId: '------',
      secretAccessKey: '------',
      apiVersion: '------',
      region: '-----',
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

```
controller.ts
```javascript
import { Controller, Get } from '@nestjs/common';
import { AwsSmsService, PublishResponse } from '@shubuzuo/nestjs-sms';

@Controller()
export class AppController {
  constructor(
    private readonly awsSmsService: AwsSmsService
  ) {}

  @Get('sms')
  async setSms(): Promise<PublishResponse> {
    return  await this.awsSmsService.send('17630802711', '????')
  }
}

```
