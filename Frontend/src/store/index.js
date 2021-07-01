import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user-slice';
import notificationReducer from './notification/notification-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  },
});

export default store;
