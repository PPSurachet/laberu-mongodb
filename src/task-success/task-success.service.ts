import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { count } from 'console';
import { Model } from 'mongoose';
import { CreateTaskSuccessDto } from './dto/create-task-success.dto';
import { UpdateTaskSuccessDto } from './dto/update-task-success.dto';
import { TaskSuccess, TaskSuccessDocument } from './entities/task-success.entity';

@Injectable()
export class TaskSuccessService {

  constructor(@InjectModel(TaskSuccess.name) private taskSuccessModel: Model<TaskSuccessDocument>) { }

  async create(createTaskSuccessDto: CreateTaskSuccessDto) {
    const createdTaskSuccess = new this.taskSuccessModel(createTaskSuccessDto)
    return await createdTaskSuccess.save();
  }

  async findAll() {
    return await this.taskSuccessModel.find().exec();
  }

  async findByShortcode(shortcode: String) {
    return await this.taskSuccessModel.find({ shortcode: shortcode }).exec();
  }

  async findCountByShortcode(shortcode: String) {
    return await this.taskSuccessModel.count({ shortcode: shortcode }).exec();
  }

  async findByUser(user_id: String) {
    return await this.taskSuccessModel.find({ user_id: user_id }).exec();
  }

  async remove(_id: String) {
    return await this.taskSuccessModel.remove({ _id: _id }).exec();
  }
}
