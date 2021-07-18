import React from 'react';
import T from 'prop-types';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const ForgotPassworForm = ({ onSubmit }) => {
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
    //credentials.remember = isChecked;
    onSubmit(credentials);
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
            <h2>You have problems to enter?</h2>
			<h4>Enter your email and we will send you a link to enter your account</h4>
          </Grid>
       
          <TextField
            label="email"
            placeholder="Enter email"
            fullWidth
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        

          <Button
            type="submit"
            style={{ margin: '30px 0' }}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!email}
          >
            Send access link
          </Button>
        
        </Paper>
      </form>
    </Grid>
  );
};

ForgotPassworForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default ForgotPassworForm;
