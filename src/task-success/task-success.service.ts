import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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

  async updateCaption(_id: String, updateTaskSuccessDto: UpdateTaskSuccessDto) {
    await this.taskSuccessModel.updateOne(
      { _id: _id },
      {
        caption: updateTaskSuccessDto.caption,
      },
      { upsert: false }
    ).exec();
  }

  async remove(_id: String) {
    return await this.taskSuccessModel.remove({ _id: _id }).exec();
  }
}
