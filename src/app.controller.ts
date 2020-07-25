import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(

  ) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
