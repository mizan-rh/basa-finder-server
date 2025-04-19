import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { RentalHouseRoutes } from '../modules/rentalHouse/rentalHouse.route';
import { RentalRequestRoutes } from '../modules/rentalRequest/rentalRequest.route';
import { UserRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  // User registration, login
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    // path: '/rental-houses',
    path: '/landlords',
    route: RentalHouseRoutes,
  },
  {
    // path: '/rental-request',
    path: '/',
    route: RentalRequestRoutes, // RentalReques Routes CRUD operations
  },
  {
    // path: '/payment',
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    // path: '/users',
    path: '/',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
