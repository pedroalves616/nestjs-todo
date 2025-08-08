

import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Task } from '../tasks/task.model';
import { Tag } from '../tags/tag.model';
import { User } from '../users/user.model';
import { TaskTag } from '../tasks/tasktag.model'; 

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'todolist',
  models: [Task, Tag, User, TaskTag], 
  autoLoadModels: true,
  synchronize: true,
};
