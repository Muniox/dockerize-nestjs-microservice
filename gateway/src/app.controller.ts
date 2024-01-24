import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello() {
    return 'helloWorld!';
  }

  @Get('/:message')
  async sendTestMessage(@Param() message: string): Promise<string> {
    return await this.appService.publishTest(message);
  }
}
