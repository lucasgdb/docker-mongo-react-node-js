import React from 'react';
import PropTypes from 'prop-types';

import AuthProvider from './auth.context';

const Provider = ({ children }) => <AuthProvider>{children}</AuthProvider>;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
