import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,  
  SwipeableDrawer
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import MenuLoginRegister from "./MenuLoginRegister";

 

const ResponsiveMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav>
      <SwipeableDrawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List disablePadding style={{width:'250px', height:'100%',backgroundColor:'lightblue'}}>
            <div style={{width:'100%', textAlign:'right', color:'#ffffff'}}>
                <IconButton
                    color="inherit"
                    onClick={() => setOpenMenu(false)}
                >
                        <CloseIcon />
                </IconButton>

            </div>
            <ListItem button style={{display:'flex', alignItem:'center', flexDirection:'column',backgroundColor:'lightblue'}}>
                <MenuLoginRegister/>
            </ListItem>
           
        </List>
      </SwipeableDrawer>
      <div position="static">
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
