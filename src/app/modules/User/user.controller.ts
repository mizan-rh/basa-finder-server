import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import config from '../../config';

const createUser = catchAsync(async (req, res) => {
  // const { user } = req.body;
  // const result = await UserServices.createUserInDB(user);

  const result = await UserServices.createUserInDB(req.body);
  // const { refreshToken, accessToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is Registered successfully',
    // data: {
    //   result,
    //   accessToken
    // },
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in succesfully ! ",
    data: {
      accessToken,
    },
  });
});


const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users are retrieved successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await UserServices.getSingleUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

// const updateUser = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   console.log('f-uc, req.params:', req.params);
//   console.log('f-uc, id:', id);
//   console.log('f-uc,req.body:', req.body);

//   const result = await UserServices.updateUserInDB(id, req.body);
//   console.log('f-uc:', result);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is updated successfully',
//     data: result,
//   });
// });
const updateUser = catchAsync(async (req, res) => {
  const updatedUser = await UserServices.updateUserInDB(req.user!, req.body);

  console.log('f-UC, updatedUser', updatedUser);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile updated successfully!",
    data: updatedUser,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await UserServices.deleteUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted successfully',
    data: result,
  });
});

const blockUser = catchAsync(async (req, res) => {

  const { userId } = req.params
  const result = await UserServices.blockUserInDB(userId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is blocked',
    data: result,
  });
});

const activateUser = catchAsync(async (req, res) => {
  const { usrId } = req.params
  const result = await UserServices.activateUserInDB(usrId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is activated',
    data: result,
  });
});

const updateUserRole = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const updatedUser = await UserServices.updateUserRole(userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User role updated successfully",
    data: updatedUser,
  });
});

const changePassword = catchAsync(async (req, res) => {

  const { ...passwordData } = req.body;
console.log(req.body);
  const result = await UserServices.changePassword(req.user!, passwordData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password is updated succesfully!',
    data: result,
  });
});


const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await UserServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrieved succesfully!',
    data: result,
  });
});


export const UserControllers = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createUser,
  loginUser,
  blockUser,
  refreshToken,
  changePassword,
  activateUser,
  updateUserRole
};
