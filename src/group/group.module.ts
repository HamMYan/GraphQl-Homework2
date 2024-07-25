import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { JoiPipeModule } from 'nestjs-joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  imports: [
    JoiPipeModule,
    TypeOrmModule.forFeature([Group])
  ],
  providers: [GroupResolver, GroupService],
})
export class GroupModule { }
