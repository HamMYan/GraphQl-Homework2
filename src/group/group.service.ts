import { Injectable } from '@nestjs/common';
import { CreateGroupInput } from './dto/create-group.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/student/entities/student.entity';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private groupRepository: Repository<Group>) { }


  async create(createGroupInput: CreateGroupInput) {
    return await this.groupRepository.save(createGroupInput)
  }

  async findAll() {
    return await this.groupRepository.find()
  }

  async findOne(id: number) {
    return await this.groupRepository.findOneBy({ id })
  }

  async update(id: number, updateStudentInput: CreateGroupInput) {
    await this.groupRepository.update(id, updateStudentInput)
    return await this.groupRepository.findOneBy({ id })
  }

  async remove(id: number) {
    const user = await this.groupRepository.findOneBy({ id })
    await this.groupRepository.delete(id)
    return user
  }
}
