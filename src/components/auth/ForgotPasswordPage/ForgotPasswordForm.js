import React from 'react';
import T from 'prop-types';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useTranslation } from 'react-i18next';
import { useStyles } from '../authCSS';

const ForgotPasswordForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [t] = useTranslation('global');
  const [credentials, setCredentials] = React.useState({
    email: '',
  });

  const { email } = credentials;

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
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
            <h2>{t('forgot.You have problems to enter?')}</h2>
            <h4>
              {t(
                'forgot.Enter your email and we will send you a link to enter your account'
              )}
            </h4>
          </Grid>

          <TextField
            label={t('forgot.Email')}
            placeholder={t('forgot.Enter email')}
            fullWidth
            required
            name="email"
            value={email}
            onChange={handleChange}
            autoFocus={true}
          />

          <Button
            type="submit"
            className={classes.buttonForm}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!email}
          >
            {t('forgot.Send access link')}
          </Button>
        </Paper>
      </form>
    </Grid>
  );
};

ForgotPasswordForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default ForgotPasswordForm;
