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
// import { ChangeLanguage } from '../../../utils/changeLanguage';

const RegisterForm = ({ onSubmit }) => {
  const [t, i18n] = useTranslation('global');
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
          style={{
            padding: 30,
            height: '500px',
            margin: '50px auto',
            width: 350,
          }}
        >
          <Grid align="center">
            <Avatar style={{ backgroundColor: '#1dba849e' }}>
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
          />
          <TextField
            type="email"
            label={t('register.Email')}
            placeholder={t('register.Enter email')}
            fullWidth
            required
            name="email"
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
            style={{ margin: '30px 0' }}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!username || !password}
          >
            {t('register.Register')}
          </Button>
          <Typography>
            {t('register.Do you have an account?')}
            <Link href="/login">{t('register.Sign In')}</Link>
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
