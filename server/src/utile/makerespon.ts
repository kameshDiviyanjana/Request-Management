import { Response } from 'express';

interface MakeResponParams {
    res: Response;
    data: any;
    message: string;
}

export const makerespon = ({ res, data, message }: MakeResponParams) => {
    res.status(200).json({
        message,
        data
    });
};
