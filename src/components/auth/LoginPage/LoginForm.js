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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../authCSS';

const LoginForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [t] = useTranslation('global');
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  const [isChecked, setIsChecked] = React.useState(false);
  const { username, password } = credentials;

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    credentials.remember = isChecked;
    onSubmit(credentials);
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
            <h2>{t('login.Sign in')}</h2>
          </Grid>
          <TextField
            label={t('login.Username')}
            placeholder={t('login.Username')}
            fullWidth
            required
            name="username"
            value={username}
            onChange={handleChange}
           
          />
          <TextField
            label={t('login.Password')}
            placeholder={t('login.Enter password')}
            type="password"
            fullWidth
            required
            name="password"
            style={{marginTop:'1rem'}}
            value={password}
            onChange={handleChange}
          />
          <div style={{marginTop:'0.5rem'}}>
            <FormControlLabel
              
              control={
                <Checkbox
                  name="checked"
                  color="primary"
                  onChange={(ev) => setIsChecked(ev.target.checked)}
                  style={{padding:'0px'}}
                />
              }
              label={t('login.Remember me')}
              />
          </div>
          <Button
            type="submit"
            className={classes.buttonForm}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!username || !password}
          >
            {t('login.Sign in')}
          </Button>
          <Typography>
            <Link href="/forgot-password">
              {t('login.Forgot your password?')}
            </Link>
          </Typography>
          <Typography>
            {t('login.Don t have an account yet?')}
            <Link href="/register"> {t('login.Sign Up')}</Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
};

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
