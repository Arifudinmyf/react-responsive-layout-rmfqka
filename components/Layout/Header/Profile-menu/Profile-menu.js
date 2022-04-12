import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Auth from "../../../../services/Auth.service";
import "./Profile-menu.css";

const profileMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    Auth.logout();
  };

  return (
    <div className="profile-menu">
      <img
        className="avatar"
        onClick={handleClick}
        src="https://material.angular.io/assets/img/examples/shiba2.jpg"
        alt="Avatar photo"
      />

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={logout}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default profileMenu;
