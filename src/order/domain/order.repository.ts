import { Order } from './order.entity';
export abstract class OrderRepository {
  abstract create(order: Order): void;
  abstract findAll(): Order[];
  abstract findById(id: string): Order | undefined;
}
