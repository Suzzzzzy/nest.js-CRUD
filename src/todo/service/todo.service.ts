import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  // 전체 조회
  async fetchAllTodos(): Promise<Todo[]> {
    //비동기적으로 받아주도록
    return this.prismaService.todo.findMany();
  }
}
