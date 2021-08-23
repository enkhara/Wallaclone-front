import React from 'react';
import Logout from './Logout';
import Profile from "./Profile";
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';
import {
  IconButton,
  List,
  ListItem,  
  SwipeableDrawer
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import MenuLoginRegister from "./MenuLoginRegister";
import ButtonNewAdvert from './ButtonNewAdvert';

 

const ResponsiveMenu = () => {

    const [openMenu, setOpenMenu] = React.useState(false);
    const isLogged = useSelector(getIsLogged);
    return (
        <nav>
            <SwipeableDrawer 
                open={openMenu} 
                onClose={() => setOpenMenu(false)}
                onOpen={() => setOpenMenu(true)}
            >
                <List 
                    disablePadding style={{width:'270px', height:'100%',backgroundColor:'lightblue'}}>
                    
                    <div 
                        style={{width:'100%', textAlign:'right', color:'#ffffff'}}
                    >
                        <IconButton
                            color="inherit"
                            onClick={() => setOpenMenu(false)}
                        >
                            <CloseIcon />
                        </IconButton>

                    </div>
                    <ListItem 
                        onClick={() => setOpenMenu(false)}  
                        button style={{display:'flex', alignItem:'center', flexDirection:'column',backgroundColor:'lightblue'}}>

                        {isLogged 
                            ?
                            <div
                                style={{width:'100%', height:'300px',display:'flex', alignItem:'center', flexDirection:'column', justifyContent:'space-between'}}
                            >
                                    <Profile/>
                                    <ButtonNewAdvert/>
                                    <Logout />
                            </div>
                            :
                            <React.Fragment>
                                <MenuLoginRegister/>
                                <div style={{marginTop:'2rem'}}>
                                    <ButtonNewAdvert/>
                                </div>
                            </React.Fragment>

                        }
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <div>
                <IconButton
                    color="inherit"
                    onClick={() => setOpenMenu(true)}
                >
                    <MenuIcon />
                </IconButton>
            
            </div>
      
        </nav>
    );
};

export default ResponsiveMenu;
