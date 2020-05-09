import React from 'react';

import AuthProvider from './auth.context';

const Provider = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export default Provider;
