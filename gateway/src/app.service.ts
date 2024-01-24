import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientTestMessage } from './client-test-message.event';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {}

  async publishTest(message: string) {
    this.client.emit<string>('test-patern', new ClientTestMessage(message));
    return 'sended message!';
  }
}
