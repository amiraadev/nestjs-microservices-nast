import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  createPayment() {}

  @Get()
  getPaymentroo() {
    return this.natsClient.send({ cmd: 'getPayments' }, null);
  }
}
