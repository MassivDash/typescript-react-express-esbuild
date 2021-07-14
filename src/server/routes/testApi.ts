import { Request, Response, NextFunction } from 'express';

export const handleTestApi = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  try {
    // eslint-disable-next-line no-console
    return res.json({ testApi: { data1: 'hello', data2: 'hello' } });
  } catch (e) {
    next(e);
  }
};
