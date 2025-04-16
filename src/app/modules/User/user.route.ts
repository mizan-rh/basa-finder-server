import express from 'express';
import { UserControllers } from './user.controller';
import { createUserValidationSchema, refreshTokenValidationSchema } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-user',
  // auth(USER_ROLE.user),
  validateRequest(createUserValidationSchema),
  UserControllers.createUser,
);

router.post('/register', validateRequest(createUserValidationSchema), UserControllers.createUser)

router.post('/login', UserControllers.loginUser)

router.post(
  '/refresh-token',
  validateRequest(refreshTokenValidationSchema),
  UserControllers.refreshToken
);


// router.get('/', UserControllers.getAllUsers);
router.get('/users', UserControllers.getAllUsers);

// router.get('/:userId', UserControllers.getSingleUser);
router.get('/:id', UserControllers.getSingleUser);

router.patch(
  "/update-profile",
  auth("admin", "landlord", "tenant"),
  UserControllers.updateUser
);

router.put('/:userId', auth("admin"), UserControllers.blockUser);

router.patch('/:usrId', auth("admin"), UserControllers.activateUser);

router.put(
  "/admin/users/:userId",
  auth("admin"),
  UserControllers.updateUserRole
);

router.delete('/:id', UserControllers.deleteUser);

router.post(
  '/change-password', auth("admin", "landlord", "tenant"),
  // ValidateRequest(changePasswordValidationSchema),
  UserControllers.changePassword,
);


export const UserRoutes = router;
