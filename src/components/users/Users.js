import React from 'react';
import Useritem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) =>
  loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <Useritem user={user} key={user.id} />
      ))}
    </div>
  );

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
