"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConfig = void 0;
const task_model_1 = require("../tasks/task.model");
const tag_model_1 = require("../tags/tag.model");
const user_model_1 = require("../users/user.model");
const tasktag_model_1 = require("../tasks/tasktag.model");
exports.sequelizeConfig = {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'todolist',
    models: [task_model_1.Task, tag_model_1.Tag, user_model_1.User, tasktag_model_1.TaskTag],
    autoLoadModels: true,
    synchronize: true,
};
//# sourceMappingURL=sequelize.config.js.map