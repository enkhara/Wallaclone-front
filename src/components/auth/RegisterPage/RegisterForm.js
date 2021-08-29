import React from 'react';
import T from 'prop-types';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../authCSS';

const RegisterForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [t] = useTranslation('global');
  const [credentials, setCredentials] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = credentials;
  console.log(credentials);

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(credentials);
    console.log(credentials);
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={10}
          className={classes.containerPaper}
        >
          <Grid align="center">
          <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>{t('register.Register')}</h2>
          </Grid>
          <TextField
            label={t('register.Username')}
            placeholder={t('register.Enter username')}
            fullWidth
            required
            name="username"
            value={username}
            onChange={handleChange}
            autoFocus={true}
          />
          <TextField
            type="email"
            label={t('register.Email')}
            placeholder={t('register.Enter email')}
            fullWidth
            required
            name="email"
            style={{marginBottom:'1rem', marginTop:'1rem'}}
            value={email}
            onChange={handleChange}
          />
          <TextField
            label={t('register.Password')}
            placeholder={t('register.Enter password')}
            type="password"
            fullWidth
            required
            name="password"
            value={password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            className={classes.buttonForm}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!username || !password}
          >
            {t('register.Register')}
          </Button>
          <Typography>
            {t('register.Do you have an account?')}
            <Link href="/login"> {t('register.Sign In')}</Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
};

RegisterForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default RegisterForm;
