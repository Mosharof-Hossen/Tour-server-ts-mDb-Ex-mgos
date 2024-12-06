import { Router } from 'express';
import { bookingsControllers } from './booking.controller';

const router = Router();

router.post('/create-booking', bookingsControllers.createBooking);

export const BookingRouter = router;
