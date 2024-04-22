import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

export const publicKey = "e4b8543fa60a92b028773214ba40d27a";
export const privateKey = "4210c646e55c9f9b321036aa14ade2756131d4df";
export const ts = 1;

function md5(text: string): string {
  // Implementar função de criptografia
  return text;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const isMath = await bcrypt.compare(pass, user.password);

    if (!isMath) throw new UnauthorizedException();

    const payload = { sub: user._id, userMail: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async generateHashMarvel(ts: number, privateKey: string, publicKey: string): Promise<string> {
    return md5(ts + privateKey + publicKey);
  }
}
