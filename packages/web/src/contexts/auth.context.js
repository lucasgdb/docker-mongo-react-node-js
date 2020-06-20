import React, {
  useContext,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import * as auth from '~/services/authentication';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem('R:auth');

    if (storedAuth) {
      const parseAuth = JSON.parse(storedAuth);

      if (parseAuth.authenticated) {
        setUser(parseAuth.user);
      }
    }

    setLoading(false);
  }, []);

  const signIn = useCallback(async (email, password) => {
    const response = await auth.signIn(email, password);

    if (response.authenticated) {
      localStorage.setItem('R:auth', JSON.stringify(response));

      setUser(response.user);
    }
  }, []);

  const signUp = useCallback(async (name, email, password) => {
    const response = await auth.signUp(name, email, password);

    if (response.authenticated) {
      localStorage.setItem('R:auth', JSON.stringify(response));

      setUser(response.user);
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
