import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [PaymentsController],
  controllers: [],
  providers: [],
})
export class PaymentsModule {}
