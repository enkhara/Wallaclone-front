import React from 'react';
import T from 'prop-types';
import { Grid, Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LoginForm = ({ onSubmit }) => {

    const [credentials,setCredentials] = React.useState({        
        username: '',
        password: '',
        
    });

    const [isChecked, setIsChecked] = React.useState(false);
    const { username,password } = credentials;

    const handleChange = ev =>{
        setCredentials(oldCredentials => ({
            ...oldCredentials,
            [ev.target.name]: ev.target.value,
          }));

    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        // credentials.remember = isChecked;
        onSubmit(credentials);
    }

    return (
       <Grid>
           <form
                onSubmit={handleSubmit}
           >
                <Paper 
                    elevation={10}
                    style={{padding:30,height:'500px', margin:'100px auto', width:350}}
                    >
                        <Grid align='center'>
                            <Avatar style={{backgroundColor:'#1dba849e'}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <h2>Sign in</h2>
                        </Grid>
                        <TextField 
                            label='Username'
                            placeholder='Enter username'
                            fullWidth
                            required
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                        <TextField 
                            label='Password'
                            placeholder='Enter password'
                            type='password'
                            fullWidth
                            required
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                        style={{marginTop:5}}
                            control={
                                <Checkbox
                                    name="checked"
                                    color="primary"
                                    onChange={(ev)=>setIsChecked(ev.target.checked)}
                                />
                            }
                            label="Remember me"
                        />
                        <Button 
                            type='submit'
                            style={{margin:'30px 0'}}
                            color='primary'
                            fullWidth
                            variant='contained'
                            disabled={!username || !password}
                        >
                            Sign in
                        </Button>
                        <Typography>
                            <Link href="#" >
                                Forgot your password?
                            </Link>
                        </Typography>
                        <Typography>
                            Don't have an account yet? 
                            <Link href="#">  Sign Up 
                            </Link>
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