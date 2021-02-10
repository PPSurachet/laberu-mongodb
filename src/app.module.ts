import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskImageModule } from './task-image/task-image.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Surachet:0939342490@cluster0.ivm7n.mongodb.net/laberu"), 
    TaskImageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
