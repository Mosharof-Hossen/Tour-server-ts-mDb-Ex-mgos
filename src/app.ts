import express, { Request, Response } from 'express';
import { UserRouter } from './modules/user/user.router';
import cors from 'cors';
import { TourRouter } from './modules/tour/tour.router';
import globalErrorHandler from './middlewares/globalErrorHandaler';
import { BookingRouter } from './modules/booking/booking.route';
import { AuthRoute } from './modules/auth/auth.route';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', AuthRoute);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/tours', TourRouter);
app.use('/api/v1/bookings', BookingRouter);

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hot server' });
});

app.use(globalErrorHandler);

export default app;
