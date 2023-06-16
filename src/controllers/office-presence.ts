import { Request, Response } from 'express';

const data = require('../data.json');

const getDayPresence = async (req: Request, res: Response) => {
    if (!Object.keys(req.body).includes('date')) {
        return res.status(400).json({ message: "No date in body"})
    }
    const date = new Date(req.body.date);
    return res.status(200).json({
        day: data.entries.filter(entry => {
            return new Date(entry.date).toLocaleDateString() === date.toLocaleDateString();
        })
    });
}

export default { getDayPresence };
