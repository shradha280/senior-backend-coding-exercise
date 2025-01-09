import { Injectable } from '@nestjs/common';
import { Order } from '../domain/order.entity';
import { OrderRepository } from '../domain/order.repository';

@Injectable()
export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  create(order: Order): void {
    this.orders.push(order);
  }

  findAll(): Order[] {
    return this.orders;
  }

  findById(id: string): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }
}
