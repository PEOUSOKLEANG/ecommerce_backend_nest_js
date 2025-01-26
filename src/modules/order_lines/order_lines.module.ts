import { Module } from '@nestjs/common';
import { OrderLinesService } from './order_lines.service';
import { OrderLinesController } from './order_lines.controller';

@Module({
  controllers: [OrderLinesController],
  providers: [OrderLinesService],
})
export class OrderLinesModule {}
