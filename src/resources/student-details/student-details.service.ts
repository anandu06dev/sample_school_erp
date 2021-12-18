import { Body, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { StudentDetailDto } from './dto/student-detail.dto'
import { StudentDetails } from './entities/student-detail.entity'

@Injectable()
export class StudentDetailsService {
    constructor(
        @InjectRepository(StudentDetails)
        private studentRepository: Repository<StudentDetails>
    ) {}

    create(createStudentDetailDto: StudentDetailDto) {
        console.log(createStudentDetailDto)
        return this.studentRepository.save(createStudentDetailDto)
    }

    async findAll(): Promise<StudentDetails[]> {
        //return `This action returns all studentDetails`
        return this.studentRepository.find()
    }

    findOne(id: number): Promise<StudentDetails> {
        return this.studentRepository.findOne(id)
    }

    async update(id: number, updateStudentDetailDto: StudentDetailDto) {
        const toUpdate = await this.studentRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Student is not found')
        }
        const updated = Object.assign(toUpdate, updateStudentDetailDto)
        return this.studentRepository.update(id, updateStudentDetailDto)
    }

    async remove(id: number) {
        await this.studentRepository.delete(id)
    }
}
