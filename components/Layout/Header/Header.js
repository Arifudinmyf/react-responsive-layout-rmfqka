import React from 'react';
import ProfileMenu from './Profile-menu/Profile-menu';
import './Header.css';

// Material
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const header = (props) => {

  return (
    <header className="header">
      <section className="sidebar-toggle">
        <IconButton edge="start"
          color="inherit"
          aria-label="sidebar-toggle"
          onClick={props.toggleSidebar}>

          <MenuIcon />
        
        </IconButton>
      </section>

      <ProfileMenu />
    </header>
  );
};

export default header;