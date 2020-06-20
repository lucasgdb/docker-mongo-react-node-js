import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import Header from '~/components/Header';
import UserList from '~/components/UserList';
import serverAPI from '~/services/serverAPI';

export default function SignIn() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await serverAPI('/user');
    const { data } = response;
    const comingUsers = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const currentUser of data) {
      comingUsers.push({
        _id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
      });
    }

    setUsers(comingUsers);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />

      <Container style={{ marginTop: 10 }}>
        <UserList rows={users} />
      </Container>
    </>
  );
}
