import { Injectable } from '@nestjs/common'
import { CreateParentDetailDto } from './dto/create-parent-detail.dto'
import { UpdateParentDetailDto } from './dto/update-parent-detail.dto'

@Injectable()
export class ParentDetailsService {
    create(createParentDetailDto: CreateParentDetailDto) {
        return 'This action adds a new parentDetail'
    }

    findAll() {
        return `This action returns all parentDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} parentDetail`
    }

    update(id: number, updateParentDetailDto: UpdateParentDetailDto) {
        return `This action updates a #${id} parentDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} parentDetail`
    }
}
