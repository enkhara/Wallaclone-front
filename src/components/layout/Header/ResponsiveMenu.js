import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,  
  SwipeableDrawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

 

const ResponsiveMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav>
    
      <SwipeableDrawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List disablePadding style={{width:'300px'}}>
          <ListItem button>
            <ListItemText primary="First Item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Second Item" />
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
