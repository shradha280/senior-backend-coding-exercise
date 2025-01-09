import { Module } from '@nestjs/common';
import { OrderController } from './infrastructure/order.controller';
import { OrderService } from './application/order.service';
import { InMemoryOrderRepository } from './infrastructure/order.repository.memory';
import { OrderRepository } from './domain/order.repository';

@Module({
  controllers: [OrderController], // Register the controller here
  providers: [
    OrderService,
    {
      provide: OrderRepository, // Register the repository
      useClass: InMemoryOrderRepository,
    },
  ],
})
export class OrderModule {}
