import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/user/user-actions';

import { ListItem, ListItemText, Button } from '@material-ui/core';

const User = ({ id, name, lastname, email }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemText>
        {name} {lastname}: {email}
      </ListItemText>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(deleteUser(id))}
      >
        X
      </Button>
    </ListItem>
  );
};

export default User;
