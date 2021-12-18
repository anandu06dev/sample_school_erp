import { Injectable } from '@nestjs/common'
import { CreateSiblingDetailDto } from './dto/create-sibling-detail.dto'
import { UpdateSiblingDetailDto } from './dto/update-sibling-detail.dto'

@Injectable()
export class SiblingDetailsService {
    create(createSiblingDetailDto: CreateSiblingDetailDto) {
        return 'This action adds a new siblingDetail'
    }

    findAll() {
        return `This action returns all siblingDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} siblingDetail`
    }

    update(id: number, updateSiblingDetailDto: UpdateSiblingDetailDto) {
        return `This action updates a #${id} siblingDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} siblingDetail`
    }
}
