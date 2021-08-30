import React, {useState} from 'react';
import T from 'prop-types';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Swal from 'sweetalert2';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { useStyles } from './editAccountFormCSS';


const EditAccountForm = ({ username, email, password, _id, onSubmit, onDelete }) => {
  const [t] = useTranslation('global');
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    usernameNew: username,
    emailNew: email,
    passwordOld: password,  // no modificable
    passwordNew: '',
  });

  const [currentPassword, setCurrentPassword] = useState({
    currentPassword: '',
    showCurrPassword: false,
  });

  const [newPassword, setNewPassword] = useState({
    newPassword: '',
    showNewPassword: false,
  });
  
  const [repeatPassword, setRepeatPassword] = useState({
    repeatPassword: '',
    showRepPassword: false,
  });

  const { usernameNew, emailNew, passwordOLd, passwordNew } = credentials;
  
  const [errorUsernameNew, setErrorUsernameNew] = useState(null);
  const [errorEmailNew, setErrorEmailNew] = useState(null);
  const [errorCurPass, setErrorCurPass] = useState(null);
  const [errorNewPass, setErrorNewPass] = useState(null);
  const [errorConfPass, setErrorConfPass] = useState(null);

  const handleClickShowCurrentPassword = () => {
    setCurrentPassword({ ...currentPassword, showCurrPassword: !currentPassword.showCurrPassword });
  };

  const handleClickShowPassword = () => {
    setNewPassword({ ...newPassword, showNewPassword: !newPassword.showNewPassword });
  };

  const handleClickShowRepPassword = () => {
    setRepeatPassword({ ...repeatPassword, showRepPassword: !repeatPassword.showRepPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    
  const [comparisonPass, setComparisonPass] = React.useState(false);

  const handleChange = (ev) => {
    setCredentials((oldCredentials) => ({
      ...oldCredentials,
      [ev.target.name]: ev.target.value,
    }));
     
  };
  
  const handleChangePass = (ev) => {
      switch (ev.target.name) {
          case 'currentPassword':
             setCurrentPassword((oldPassword) => ({
                ...oldPassword,
                [ev.target.name]: ev.target.value,
               }));
              break;
            case 'newPassword':
                setNewPassword((oldPassword) => ({
                    ...oldPassword,
                    [ev.target.name]: ev.target.value,
                }));
                break;
            case 'repeatPassword':
                setRepeatPassword((oldPassword) => ({
                    ...oldPassword,
                    [ev.target.name]: ev.target.value,
                }));
                break;
            default:
                break;
        };
        
  };

  const validateForm = () => {
    setErrorUsernameNew(null);
    setErrorEmailNew(null);
    setErrorCurPass(null);
    setErrorNewPass(null);
    setErrorConfPass(null);
    let isValid = true;
    // console.log('Password', currentPassword.currentPassword);
    // console.log('newPassword', newPassword.newPassword);
    // console.log('ConfPassword', repeatPassword.repeatPassword);

    if (credentials.usernameNew === undefined || credentials.usernameNew === '') {
      setErrorUsernameNew('Debera introducir un nombre de usuario');
      Swal.fire(`${errorUsernameNew}`, t('message.Try again!'), "warning");
      //console.log('1')
      isValid = false;
    }
    
    if (credentials.emailNew === undefined || credentials.emailNew === '') {
      setErrorEmailNew('Debera introducir un email');
      Swal.fire(`${errorEmailNew}`, t('message.Try again!'),"warning");
      //console.log('2')
      isValid = false;
    }

    if (((newPassword.newPassword !== undefined && newPassword.newPassword !== '') ||
         (repeatPassword.repeatPassword !== undefined && repeatPassword.repeatPassword  !== ''))
      && (currentPassword.currentPassword === undefined && currentPassword.currentPassword === '')) {
      setErrorCurPass('Deberá introducir la contraseña actual');
      Swal.fire(`${errorCurPass}`, t('message.Try again!'),"warning");
      //console.log('3')
      isValid = false
    }

    if (repeatPassword.repeatPassword === newPassword.newPassword) {
      if (currentPassword.currentPassword === newPassword.newPassword) {
        // (currentPassword.currentPassword === newPassword.newPassword)) {
        setErrorNewPass('La nueva contraseña debe ser diferente a la actual');
        setErrorCurPass('La nueva contraseña debe ser diferente a la actual');
        setErrorConfPass('La nueva contraseña debe ser diferente a la actual');
        //console.log('6')
        Swal.fire(`${errorConfPass}`, t('message.Try again!'), "warning");
        isValid = false
      }
    }
    if ((newPassword.newPassword !== undefined && newPassword.newPassword !== '')
      && (repeatPassword.repeatPassword !== undefined && repeatPassword.repeatPassword !== '' )) {
      if (currentPassword.currentPassword === '' || currentPassword.currentPassword === undefined) {
        setErrorCurPass('Deberá introducir la contraseña actual');
        Swal.fire(`${errorCurPass}`, t('message.Try again!'), "warning");
        isValid = false;
      }
      else {
        if (repeatPassword.repeatPassword !== newPassword.newPassword) {
          setErrorNewPass('La contraseña nueva y la contraseña de confirmación no coinciden');
          setErrorConfPass('La contraseña nueva y la contraseña de confirmación no coinciden');
          Swal.fire(`${errorConfPass}`, t('message.Try again!'), "warning");
          //console.log('5')
          isValid = false;
        }
      }
    }
  
    return isValid;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
     if (!validateForm()) {
          //console.log('no está valido el formulario')
          return
    }
   // console.log('datos del usuario modificados', credentials, newPassword.newPassword);
   // console.log('newPassword.newPassword', newPassword.newPassword);

    if (newPassword.newPassword !== undefined && newPassword.newPassword !== '') {
    
      if (newPassword.newPassword === repeatPassword.repeatPassword) {
        setComparisonPass(true);
        
        const passwordNew = newPassword.newPassword;
        onSubmit(_id, { ...credentials, passwordNew });
    
      } else {
        Swal.fire(t('account.Passwords should match'));
      };
    }
    else { // no se ha modificado el password
    
      onSubmit(_id, credentials ) ;
    
    }
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
            <h2>{t('account.Account Information')}</h2>
          </Grid>
          <TextField
            label={t('account.Username')}
            placeholder={t('account.Username')}
            fullWidth
            required
            name="usernameNew"
            defaultValue={username}
            onChange={handleChange}
            autoFocus={true}
          />
          <TextField
            type="email"
            label={t('account.Email')}
            placeholder={t('account.Email')}
            fullWidth
            required
            name="emailNew"
            style={{marginBottom:'1rem',marginTop:'1rem'}}
            defaultValue={email}
            onChange={handleChange}
          />
          <TextField
            disabled
            label={t('account.Password')}
            placeholder={t('account.Password')}
            type="password"
            fullWidth
            name="password"
            defaultValue={password?.substr(10, 10)}
          />
         <Typography variant="overline" display="block" gutterBottom>
            { t('account.Current password modification')}
        </Typography>
           <FormControl >
          <InputLabel htmlFor="standard-adornment-currpassword">{t('account.Current password')}</InputLabel>
          <Input
            id="standard-adornment-currpassword"
              type={currentPassword.showCurrPassword ? 'text' : 'password'}
              name="currentPassword"
              value={currentPassword.currentPassword}
              onChange={handleChangePass}
              style={{width:'260px'}}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCurrentPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {currentPassword.showCurrPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
            <FormControl >
          <InputLabel htmlFor="standard-adornment-password">{t('account.New password')}</InputLabel>
          <Input
            id="standard-adornment-password"
              type={newPassword.showNewPassword ? 'text' : 'password'}
              name="newPassword"
              value={newPassword.newPassword}
              onChange={handleChangePass}
              style={{width:'260px'}}
              
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {newPassword.showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl >
          <InputLabel htmlFor="standard-adornment-reppassword">{t('account.Repeat Password')}</InputLabel>
          <Input
            id="standard-adornment-reppassword"
              type={repeatPassword.showRepPassword ? 'text' : 'password'}
              name="repeatPassword"
              value={repeatPassword.repeatPassword}
              onChange={handleChangePass}
              style={{width:'260px'}}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {repeatPassword.showRepPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
        
          <Button
            type="submit"
            className={classes.buttonForm}
            color="primary"
            fullWidth
            variant="contained"
            startIcon={<CreateIcon />}
            disabled={!username || !email || !newPassword}
          >
            {t('account.Change Information')}
          </Button>
         
          <Link
						variant="contained"
						color="secondary"
            style={{cursor:'pointer'}}
						onClick={onDelete}
						startIcon={<DeleteIcon />}
					>
						{t('account.Delete User')}
		     </Link>
                  
        </Paper>
      </form>
    </Grid>
  );
};

EditAccountForm.propTypes = {
  onSubmit: T.func.isRequired,
  onDelete: T.func.isRequired,
};

export default EditAccountForm;