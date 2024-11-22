import express, { Request, Response } from 'express';
import { UserRouter } from './modules/user/user.router';
import cors from 'cors';
import { TourRouter } from './modules/tour/tour.router';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/tours', TourRouter);

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hot server' });
});

export default app;
