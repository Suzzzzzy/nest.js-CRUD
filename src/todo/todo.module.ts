import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { PrismaService } from '../prisma.service';

// 의존성 주입
@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
