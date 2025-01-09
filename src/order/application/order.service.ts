import { Injectable } from '@nestjs/common';
import { Order } from '../domain/order.entity';
import { OrderRepository } from '../domain/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  createOrder(order: Order): void {
    this.orderRepository.create(order);
  }

  getOrders(): Order[] {
    return this.orderRepository.findAll();
  }

  getOrderById(id: string): Order | undefined {
    return this.orderRepository.findById(id);
  }
}
