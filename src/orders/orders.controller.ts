import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/config';
import { CreateOrderDto } from './dto/create-order.dto';
import { PaginationDto } from 'src/common';

@Controller('orders')
export class OrdersController {
  @Inject(ORDER_SERVICE)
  private readonly ordersClient: ClientProxy;
  constructor() {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send({ cmd: 'create_order' }, createOrderDto);
  }

  @Get()
  findAllOrders(@Query() paginationDto: PaginationDto) {
    return this.ordersClient.send({ cmd: 'find_all_orders' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersClient.send({ cmd: 'find_one_order' }, { id });
  }
}
