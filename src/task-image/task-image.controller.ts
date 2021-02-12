import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskImageService } from './task-image.service';
import { CreateTaskImageDto } from './dto/create-task-image.dto';
import { UpdateTaskImageDto } from './dto/update-task-image.dto';

@Controller('task-image')
export class TaskImageController {
  constructor(private readonly taskImageService: TaskImageService) { }

  @Post('/create')
  async create(@Body() createTaskImageDto: CreateTaskImageDto) {
    return await this.taskImageService.create(createTaskImageDto);
  }

  @Get()
  async findAll() {
    return await this.taskImageService.findAll();
  }

  @Get('getCountTaskSuccess')
  async getCountTaskSuccess() {
    return await this.taskImageService.getCountTaskSuccess();
  }

  @Get('findImage/:user_id')
  async findNextImage(@Param('user_id') user_id: string) {
    return await this.taskImageService.findNextImage(user_id);
  }

  @Put('update_status/:_id')
  async updateStatus(@Param('_id') _id: string, @Body() updateTaskImageDto: UpdateTaskImageDto) {
    return await this.taskImageService.updateStatus(_id, updateTaskImageDto);
  }

  @Put('update_status_all')
  async updateStatusAll(@Body() updateTaskImageDto: UpdateTaskImageDto) {
    return await this.taskImageService.updateStatusAll(updateTaskImageDto);
  }

  @Delete('delete/:_id')
  async remove(@Param('_id') _id: string) {
    return await this.taskImageService.remove(_id);
  }
}
