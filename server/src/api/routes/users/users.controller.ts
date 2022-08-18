import UserService from '@/services/user';
import { CreateUserRequestBody } from '@/types';
import { Request, Response, NextFunction } from 'express';
import Container from 'typedi';

export const handleUserTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { uid } = req.query;

    const userServiceInstance = Container.get(UserService);
    const user = await userServiceInstance.getUser(String(uid));

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const handleCreateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userInfoToCreate = req.body as CreateUserRequestBody;

    const userServiceInstance = Container.get(UserService);
    const { uid, createdAt, updatedAt } = await userServiceInstance.createUser(userInfoToCreate);

    res.json({ uid, createdAt, updatedAt });
  } catch (error) {
    next(error);
  }
};
