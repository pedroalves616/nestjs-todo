import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './tasks/task.module';
import { TagModule } from './tags/tag.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { sequelizeConfig } from './database/sequelize.config';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    TaskModule,
    TagModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}