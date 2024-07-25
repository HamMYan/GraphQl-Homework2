import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Group) private groupRepository: Repository<Group>
  ) { }


  async create(createStudentInput: CreateStudentInput) {
    return await this.studentRepository.save(createStudentInput)
  }

  async findAll() {
    return await this.studentRepository.find()
  }

  async findOne(id: number) {
    return await this.studentRepository.findOneBy({ id })
  }

  async update(id: number, updateStudentInput: CreateStudentInput) {
    await this.studentRepository.update(id, updateStudentInput)
    return await this.studentRepository.findOneBy({ id })
  }

  async addGroup(id, groupId) {
    const group = await this.groupRepository.findOneBy({ id: groupId });
    const students = await this.studentRepository.find({
        where: { group: group }
    });

    if (students.length >= group.studentsCount) {
        return { message: "a group that has no place" };
    }

    await this.groupRepository.update(groupId, {
        student: id
    });

    return group
}



  async remove(id: number) {
    const user = await this.studentRepository.findOneBy({ id })
    await this.studentRepository.delete(id)
    return user
  }
}
