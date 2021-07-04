import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const LoginForm = () => {

   
    return (
       <Grid>
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
                    />
                    <TextField 
                        label='Password'
                        placeholder='Enter password'
                        type='password'
                        fullWidth
                        required
                    />
                     <FormControlLabel
                     style={{marginTop:5}}
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
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
                    >
                        Sign in
                    </Button>
                    <Typography>
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography>
                        Do you have an account? 
                        <Link href="#">  Sign Up 
                        </Link>
                    </Typography>
           </Paper>
       </Grid>
    );
};

export default LoginForm;