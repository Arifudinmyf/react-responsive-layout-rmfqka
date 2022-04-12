import React, { useState } from "react";
import SidebarItem from "../Sidebar-item/Sidebar-item";
import "./Sidebar-item-accordion.css";

// Material
import Icon from "@material-ui/core/Icon";

const sidebarItemAccordion = props => {
  const [expandIcon, setExpandIcon] = useState("expand_more");
  const [subItems, setSubItems] = useState([]);

  const toggleSubItems = () => {
    const icon = expandIcon === "expand_less" ? "expand_more" : "expand_less";
    setExpandIcon(icon);
  };

  const createSubItems = () => {
    const items = props.item.subItems.map((it, index) => {
      return <SidebarItem key={index} item={it} resized={props.resized} />;
    });
    setSubItems(items);
  };

  return (
    <div className="sidebar-accordion">
      <section className="sidebar-accordion-header" onClick={toggleSubItems}>
        <Icon className="sidebar-item-icon">{props.item.icon}</Icon>
        {!props.resized && (
          <span className="accordion-label">{props.item.text}</span>
        )}
        <div className="sidebar-accordion-arrows">
          <Icon className="sidebar-item-icon">{expandIcon}</Icon>
        </div>
      </section>

      <section className="sidebar-accordion-body">
        <div className="sidebar-accordion-items">
        {
         (expandIcon === "expand_less") &&  props.item.subItems.map((it, index) => {
            return <SidebarItem key={index} item={it} resized={props.resized} />;
         })
        }</div>
      </section>
    </div>
  );
};

export default sidebarItemAccordion;
