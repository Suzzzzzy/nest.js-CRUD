import {
  Controller,
  Get,
  Delete,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todos')
export class TodoController {
  // constructor: 생성자
  constructor(private readonly todoService: TodoService) {}

  @Get()
  // 전체 조회
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }

  // 한개 조회
  @Get(':id') // parameter
  async fetchTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.fetchTodoItem(id);
  }

  // 삭제
  @Delete(':id')
  async deleteTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteTodoItem(id);
  }

  // 입력
  @Post()
  async addTodoItem(@Body() data: Todo): Promise<Todo> {
    return this.todoService.addTodoItem(data);
  }

  // 수정
  @Put(':id')
  async updateTodoItem(
    @Param('id') id: number,
    @Body() data: Todo,
  ): Promise<Todo | null> {
    return this.todoService.updateTodoItem(
      id,
      data.title,
      data.content,
      data.is_done,
    );
  }
}
