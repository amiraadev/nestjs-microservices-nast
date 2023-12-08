import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UserModule,
    PaymentsModule,
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
