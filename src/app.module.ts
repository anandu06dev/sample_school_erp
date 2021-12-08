import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from '@resources/students/students.module'
import { DatabaseModule } from '@core/database.module'

const MODULES = [DatabaseModule, StudentsModule]

@Module({
    imports: [...MODULES],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
