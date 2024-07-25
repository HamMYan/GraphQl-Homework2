import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { JoiPipeModule } from 'nestjs-joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Group } from 'src/group/entities/group.entity';


@Module({
  imports: [
    JoiPipeModule,
    TypeOrmModule.forFeature([Student,Group])
  ],
  providers: [StudentResolver, StudentService],
})
export class StudentModule { }
