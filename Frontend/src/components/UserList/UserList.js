import { useSelector } from 'react-redux';

import { Container, List } from '@material-ui/core';
import User from '../User/User';

const UsersList = () => {
  const users = useSelector(({ user }) => user.users);

  return (
    <Container maxWidth="sm">
      <List>
        {users &&
          users.map(({ _id, name, lastname, email }) => (
            <User key={_id} name={name} lastname={lastname} email={email} id={_id}></User>
          ))}
      </List>
    </Container>
  );
};

export default UsersList;
