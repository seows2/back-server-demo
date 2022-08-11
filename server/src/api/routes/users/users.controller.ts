import UserService from '@/services/user';
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
