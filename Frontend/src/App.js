import InputForm from './components/InputForm/InputForm';
import UserList from './components/UserList/UserList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { getUsers } from './store/user/user-actions';

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector(({ notification }) => notification.notification);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (notification.isShown) {
      enqueueSnackbar(notification.text, {
        variant: notification.type,
        autoHideDuration: notification.duration || 3000,
      });
    }
  }, [notification, enqueueSnackbar]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <InputForm></InputForm>
      <UserList></UserList>
    </div>
  );
};

export default App;
