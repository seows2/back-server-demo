import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

export class Exception extends HttpException {
  statusCode: number;
  message: string;
  constructor(statusCode: number, message?: string) {
    super(message, statusCode);
    this.statusCode;
    this.message;
  }
}

@Catch(Exception)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    exception.message
      ? response.status(status).send(exception.message)
      : response.sendStatus(status);
  }
}
