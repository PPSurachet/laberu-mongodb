import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskSuccessService } from './task-success.service';
import { CreateTaskSuccessDto } from './dto/create-task-success.dto';
import { UpdateTaskSuccessDto } from './dto/update-task-success.dto';

@Controller('task-success')
export class TaskSuccessController {
  constructor(private readonly taskSuccessService: TaskSuccessService) { }

  @Post('/create')
  async create(@Body() createTaskSuccessDto: CreateTaskSuccessDto) {
    return await this.taskSuccessService.create(createTaskSuccessDto);
  }

  @Get()
  async findAll() {
    return await this.taskSuccessService.findAll();
  }

  @Put('update/:_id')
  async updateCaption(@Param('_id') _id: string, @Body() updateTaskSuccessDto: UpdateTaskSuccessDto) {
    return await this.taskSuccessService.updateCaption(_id, updateTaskSuccessDto);
  }

  @Delete('delete/:_id')
  async remove(@Param('_id') _id: String) {
    return await this.taskSuccessService.remove(_id);
  }
}
