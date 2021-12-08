import { ConfigService, ConfigModule } from '@nestjs/config'

import { TypeOrmModule } from '@nestjs/typeorm'
import { DBconfig } from './index'
import { Module } from '@nestjs/common'
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                DBconfig(configService),
        }),
    ],
})
export class DatabaseModule {}
