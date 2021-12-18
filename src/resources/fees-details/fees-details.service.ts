import { Injectable } from '@nestjs/common'
import { CreateFeesDetailDto } from './dto/create-fees-detail.dto'
import { UpdateFeesDetailDto } from './dto/update-fees-detail.dto'

@Injectable()
export class FeesDetailsService {
    create(createFeesDetailDto: CreateFeesDetailDto) {
        return 'This action adds a new feesDetail'
    }

    findAll() {
        return `This action returns all feesDetails`
    }

    findOne(id: number) {
        return `This action returns a #${id} feesDetail`
    }

    update(id: number, updateFeesDetailDto: UpdateFeesDetailDto) {
        return `This action updates a #${id} feesDetail`
    }

    remove(id: number) {
        return `This action removes a #${id} feesDetail`
    }
}
