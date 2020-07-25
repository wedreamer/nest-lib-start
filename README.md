
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
import { AppController } from './test.controller';
import { EmailModule } from '@shubuzuo/nestjs-email';

const config = {
                apiKey: '-------------------',
                apiSecret: '-----------------------'
              }

@Module({
	imports: [ 
		EmailModule.forRoot(config)
	],
	controllers: [AppController],
})

export class AppModule{}

```
controller.ts
```javascript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from '@shubuzuo/nestjs-email';

@Controller()
export class AppController {
  constructor(
    private readonly emailService: EmailService
  ) {}

  @Get('email')
  async setEmali(): Promise<any> {

    await this.emailService.send(
      // ?? ??? ?????? ?
      {
        Email: '??key ??? ??',
        Name: '?????'
      },
      {
        emailAddress: '????',
        name: '????'
      },
      {
        subject: '?????',
        text: '??',
        html: `????`
      }
    )
  }
}

```
