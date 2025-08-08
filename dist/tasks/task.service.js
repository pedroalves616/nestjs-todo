"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const task_model_1 = require("./task.model");
const tag_model_1 = require("../tags/tag.model");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async create(taskData) {
        const { tags } = taskData, data = __rest(taskData, ["tags"]);
        const task = await this.taskModel.create(data);
        if (tags)
            await task.$set('tags', tags);
        return task;
    }
    async findAll() {
        return this.taskModel.findAll({ include: [tag_model_1.Tag] });
    }
    async findByTags(tagNames) {
        return this.taskModel.findAll({
            include: [{
                    model: tag_model_1.Tag,
                    where: { name: tagNames }
                }]
        });
    }
    async findOne(id) {
        return this.taskModel.findByPk(id, { include: [tag_model_1.Tag] });
    }
    async update(id, updateData) {
        const { tags } = updateData, data = __rest(updateData, ["tags"]);
        const task = await this.taskModel.findByPk(id);
        if (tags && task)
            await task.$set('tags', tags);
        return this.taskModel.update(data, { where: { id } });
    }
    async remove(id) {
        const task = await this.taskModel.findByPk(id);
        if (task)
            await task.destroy();
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(task_model_1.Task)),
    __metadata("design:paramtypes", [Object])
], TaskService);
//# sourceMappingURL=task.service.js.map