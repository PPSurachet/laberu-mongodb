import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Doublepor:PP0939342490@cluster0.ivm7n.mongodb.net/Laberu")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
