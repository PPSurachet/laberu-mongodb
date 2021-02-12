import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskImageDto } from './dto/create-task-image.dto';
import { UpdateTaskImageDto } from './dto/update-task-image.dto';
import { TaskImage, TaskImageDocument } from './entities/task-image.entity';
import { TaskImageModule } from './task-image.module';

@Injectable()
export class TaskImageService {

  constructor(@InjectModel(TaskImage.name) private taskImageModel: Model<TaskImageDocument>) { }

  async create(createTaskImageDto: CreateTaskImageDto) {
    const createdTaskImage = new this.taskImageModel(createTaskImageDto)
    return await createdTaskImage.save();
  }

  async findAll() {
    return await this.taskImageModel.find().exec();
  }

  async getCountTaskSuccess() {
    return await this.taskImageModel.count({ process: true }).exec();
  }

  async findNextImage(user_id: String) {
    return await this.taskImageModel.aggregate([
      { $match: { status: false, process: false } },
      {
        $lookup: {
          from: "task_success",
          localField: "shortcode",
          foreignField: "shortcode",
          as: "TaskSuccess"
        }
      },
      { $match: { "TaskSuccess.user_id": { $ne: user_id } } },
      { $limit: 1 }
    ]).exec();
  }

  async updateStatus(_id: String, updateTaskImageDto: UpdateTaskImageDto) {
    await this.taskImageModel.updateOne(
      { _id: _id },
      { status: updateTaskImageDto.status },
      { upsert: false }
    ).exec()
  }

  async updateStatusAll(updateTaskImageDto: UpdateTaskImageDto) {
    await this.taskImageModel.updateMany({ status: updateTaskImageDto.status }).exec()
  }

  async remove(_id: String) {
    return await this.taskImageModel.remove({ _id: _id }).exec();
  }
}
