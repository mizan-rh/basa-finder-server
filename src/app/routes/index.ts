import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { RentalHouseRoutes } from '../modules/rentalHouse/rentalHouse.route';

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
    route: RentalHouseRoutes, // RentalHouseRoutes CRUD operations
  },
  {
    // path: '/users',
    path: '/',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
