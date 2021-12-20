import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getCustomRepository, Repository } from 'typeorm'
import { StudentDetailRepository } from './customRepository/student-cstm-repository'
import { StudentDetailDto } from './dto/student-detail.dto'
import { StudentDetails } from './entities/student-detail.entity'

@Injectable()
export class StudentDetailsService {
    constructor(
        @InjectRepository(StudentDetails)
        private studentRepository: Repository<StudentDetails>
    ) {}

    create(createStudentDetailDto: StudentDetailDto) {
        return this.studentRepository.save(createStudentDetailDto)
    }

    async findAll(): Promise<StudentDetails[]> {
        return this.studentRepository.find()
    }

    async findByAll(): Promise<StudentDetails[]> {
        const studentCtsmRepository = getCustomRepository(
            StudentDetailRepository
        )
        return studentCtsmRepository.findByAll()
    }

    findOne(id: number): Promise<StudentDetails> {
        return this.studentRepository.findOne(id)
    }

    findByIdAndIsActive(id: number): Promise<StudentDetails> {
        const studentCtsmRepository = getCustomRepository(
            StudentDetailRepository
        )
        return studentCtsmRepository.findByIdAndIsActive(id)
    }

    async update(id: number, updateStudentDetailDto: StudentDetailDto) {
        const toUpdate = await this.studentRepository.findOne(id)
        if (!toUpdate) {
            throw new NotFoundException('Student is not found')
        }
        return this.studentRepository.update(id, updateStudentDetailDto)
    }

    async remove(id: number) {
        await this.studentRepository.delete(id)
    }
}
