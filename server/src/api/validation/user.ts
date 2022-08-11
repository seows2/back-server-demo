import ErrorResponse from '@/util/errorResponse';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const userTestValidation = (req: Request, _: Response, next: NextFunction) => {
  const schema = Joi.object({
    uid: Joi.string().required().messages({
      'any.required': '아이디를 입력해주세요',
    }),
  });

  const validationResult = schema.validate(req.query);

  if (validationResult.error) {
    throw new ErrorResponse({ statusCode: 400, message: 'Joi 에러 메세지' });
  }

  next();
};
