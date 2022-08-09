import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/vi/todos')
export class TodoController {
  // constructor: 생성자
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }
}
