import React from "react";
import "./Sidebar-item.css";

// Material
import Icon from "@material-ui/core/Icon";

const sidebarItem = props => {

  let classes;
  if (props.item.link === location.pathname) {
    classes = "sidebar-item active";
  } else {
    classes = "sidebar-item";
  }

  return (
    <div className={classes}>
      <Icon className="sidebar-item-icon">{props.item.icon}</Icon>
      {!props.resized && (
        <span className="sidebar-item-text">{props.item.text}</span>
      )}
    </div>
  );
};

export default sidebarItem;
