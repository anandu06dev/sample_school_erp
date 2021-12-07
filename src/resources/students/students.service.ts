import { Injectable } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'

@Injectable()
export class StudentsService {
    create(createStudentDto: CreateStudentDto) {
        return 'This action adds a new student'
    }

    findAll() {
        return `This action returns all students`
    }

    findOnlyRequestedId(id: string) {
        const getIds: string | Array<string> | number = id.split(':')
        const ID: number | Array<number> = getIds.length
            ? getIds.map((i) => Number(i))
            : Number(getIds)

        return `This action returns a #${ID} student`
    }

    findOne(id: number) {
        return `This action returns a #${id} student`
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`
    }

    remove(id: number) {
        return `This action removes a #${id} student`
    }
}
