const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  //SEND REQUEST
  res.status(200).json({
    stats: 'success',
    results: users.length,
    data: users,
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  console.log(req.body);

  const newUser = await User.create(req.body);

  res.status(200).json({
    stats: 'success',
    data: {
      user: newUser,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;

  const user = await User.findByIdAndDelete({ _id: id });

  if (!user) {
    return next(new AppError('No tour find with that ID.', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
