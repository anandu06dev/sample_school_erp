import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoreModule } from '@core/core.module'
// import { CatsModule } from './swagger_example/cats.module';
import { dbConfigSetUp as DBconfig } from '@utils/shareDBcofig.factory'
import { StudentsModule } from '@resources/students/students.module'

const MODULES = [
    CoreModule,
    // UsersModule,
    // ConfigModule,
    // UsersModule,
    StudentsModule,
]
const TYPEORMMODULE = TypeOrmModule.forRootAsync({
    imports: [StudentsModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => DBconfig(configService),
})

@Module({
    imports: [TYPEORMMODULE, ...MODULES],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
