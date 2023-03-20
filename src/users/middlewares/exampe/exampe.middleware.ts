import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as process from "process";

@Injectable()
export class ExampeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
      return res.status(401).json({ message: 'No token provided' });
    } else if (
      authorization === process.env.TOKEN
      // 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxODUyLCJlbWFpbCI6ImZyYW5zaXNrdXMuaGVucnlAc2VsbGVyaS5pZCIsIm5hbWUiOiJGcmFucyJ9LCJzdXBwbGllciI6eyJpZCI6MTc0NSwibmFtZSI6IlFBIFRlc3RpbmcifSwiaXNzIjoiU2VsbGVyaSIsImlhdCI6MTY2NDc4MjEyOSwiZXhwIjoxNjY1Mzg2OTI5LCJhdWQiOiJodHRwczovL3NlbGxlcmkuaWQifQ.eXvoPpCxCXNSYWmSOWuj-fiS59eQS9VtYzZZtaNIZvGux1AdlI9nm_x69a_PNAuHTT7S4lALt0jq2D__UM6YiA'
    )
      next();
  }
}
