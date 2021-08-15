import React from 'react';
import T from 'prop-types';
import Swal from 'sweetalert2';
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

const NewPasswordForm = ({ onSubmit }) => {
  const [t] = useTranslation('global');
  const [credentials, setCredentials] = React.useState({});
  const [comparisonPass, setComparisonPass] = React.useState(false);

  const { newpassword, repeatPassword } = credentials;

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (newpassword === repeatPassword) {
      setComparisonPass(true);
      onSubmit(credentials.newpassword);
    } else {
      Swal.fire(t('newpassword.Passwords should match'));
    }
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={10}
          style={{
            padding: 30,
            height: '500px',
            margin: '100px auto',
            width: 350,
          }}
        >
          <Grid align="center">
            <Avatar style={{ backgroundColor: '#1dba849e' }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>{t('newpassword.Register your new password')}</h2>
          </Grid>
          <TextField
            label={t('newpassword.New password')}
            type="password"
            placeholder={t('newpassword.Enter new password')}
            fullWidth
            required
            name="newpassword"
            value={newpassword}
            onChange={handleChange}
          />
          <TextField
            label={t('newpassword.Repeat Password')}
            type="password"
            placeholder={t('newpassword.Enter repeat Password')}
            fullWidth
            required
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleChange}
          />

          <Button
            type="submit"
            style={{ margin: '30px 0' }}
            color="primary"
            fullWidth
            variant="contained"
            disabled={comparisonPass}
          >
            {t('newpassword.New password')}
          </Button>
          <Typography>
            {t('newpassword.Do you have an account?')}
            <Link href="/login">{t('newpassword.Sign In')}</Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
};

NewPasswordForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewPasswordForm;
