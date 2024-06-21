import { Request, Response, NextFunction } from 'express';

export const asyerrohander = (func: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch((err: Error) => {
            
            next(err);

        });
    };
};
