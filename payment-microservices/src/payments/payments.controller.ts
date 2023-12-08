import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller
export class PaymentsController {
  //   constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @MessagePattern({ cmd: 'getPayments' })
  getPayments(@Payload() data: any) {
    return data;
  }
}
