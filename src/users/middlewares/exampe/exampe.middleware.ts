import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../../../app.module';

@Injectable()
export class ExampeMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const config = app.get<ConfigService>(ConfigService);

    const token = config.get('APP_TOKEN');
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({ message: 'No token provided' });

    if (authorization === token) next();
    else throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  }
}
