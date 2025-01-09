import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from '../application/order.service';
import { Order } from '../domain/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): void {
    const order = new Order(
      createOrderDto.id,
      createOrderDto.product,
      createOrderDto.quantity,
    );
    this.orderService.createOrder(order);
  }

  @Get()
  getOrders(): Order[] {
    return this.orderService.getOrders();
  }

  @Get(':id')
  getOrderById(@Param('id') id: string): Order | undefined {
    return this.orderService.getOrderById(id);
  }
}
