import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Tooltip } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import { useAuth } from '~/contexts/auth.context';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const { push } = useHistory();
  const { user, signOut } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar style={{ minHeight: 50 }}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Template
          </Link>
        </Typography>

        {user ? (
          <>
            <Tooltip title="Dashboard">
              <Button color="inherit" onClick={() => push('/app')}>
                Dashboard
              </Button>
            </Tooltip>

            <Tooltip title="Sair">
              <Button color="inherit" onClick={signOut}>
                Sair
              </Button>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Entrar">
              <Button color="inherit" onClick={() => push('/signin')}>
                Entrar
              </Button>
            </Tooltip>

            <Tooltip title="Cadastro">
              <Button color="inherit" onClick={() => push('/signup')}>
                Cadastro
              </Button>
            </Tooltip>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
