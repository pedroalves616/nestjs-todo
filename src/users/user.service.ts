import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  create(user: Partial<User>) {
    return this.userModel.create(user);

  }

  update(id: number, data: Partial<User>) {
    return this.userModel.update(data, { where: { id } });
  }

  delete(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
