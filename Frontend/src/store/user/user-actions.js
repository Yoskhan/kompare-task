import { userActions } from './user-slice';
import { notificationActions } from '../notification/notification-slice';
import axios from 'axios';

export const getUsers = () => {
  return async (dispatch) =>
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/users`)
      .then(({ data }) => dispatch(userActions.replaceUsers(data.data)))
      .catch((err) => console.error(err));
};

export const createUser = (user) => {
  return async (dispatch) =>
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/users`, user)
      .then(() => dispatch(getUsers()))
      .catch((err) => {
        dispatch(
          notificationActions.showNotification({
            text: err?.response?.data?.message,
            type: 'error',
          })
        );
        return err;
      });
};

export const deleteUser = (id) => {
  return async (dispatch) =>
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/v1/users/${id}`)
      .then(() => {
        dispatch(getUsers());
        dispatch(
          notificationActions.showNotification({
            text: 'User is deleted.',
            type: 'success',
          })
        );
      })
      .catch((err) => console.error(err));
};
