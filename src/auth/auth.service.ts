import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async register(userData: any) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.userModel.create({ ...userData, password: hashedPassword });
    const token = this.jwtService.sign({ userId: user.id });
    return { token };
  }

  async login(userData: any) {
    const user = await this.userModel.findOne({ where: { email: userData.email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(userData.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const token = this.jwtService.sign({ userId: user.id });
    return { token };
  }
}
