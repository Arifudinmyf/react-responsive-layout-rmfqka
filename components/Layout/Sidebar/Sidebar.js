import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import SidebarService from "./services/Sidebar.service";
import SidebarItem from "./Sidebar-item/Sidebar-item";
import SidebarItemAccordion from "./Sidebar-item-accordion/Sidebar-item-accordion";
import "./Sidebar.css";

import useWindowWidth from "./resize";

// Material
import IconButton from "@material-ui/core/IconButton";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const sidebar = props => {
  const size = useWindowWidth();

  const [sidebarItems, setSidebarItems] = useState([]);
  const [asideClasses, setAsideClasses] = useState([]);

  const [resizeSidebar, setResizeSidebar] = useState(false);

  useEffect(() => {
    checkMobile();
  }, [size]);
  
  useEffect(() => {
    const sidebarItemsTemp = SidebarService.getSidebarItems();
    setSidebarItems([...sidebarItemsTemp]);

    const aClasses = props.toggleSidebar
      ? ["sidebar", "sidebar-show"]
      : ["sidebar"];
    setAsideClasses(aClasses);
  }, [props.toggleSidebar]);

  const onResizeSidebar = resizeSidebar => {
    setResizeSidebar(resizeSidebar);
    let aClasses = [...asideClasses];
    if (resizeSidebar) {
      aClasses.push("sidebar-resized");
    } else {
      aClasses = aClasses.filter(c => {
        return c !== "sidebar-resized";
      });
    }
    setAsideClasses(aClasses);
  };

  const checkMobile = () => {
    if (size <= 768) {
      onResizeSidebar(false);
    }
  };

  return (
    <aside className={asideClasses.join(" ")}>
      <section className="sidebar-toogle-container">
        <IconButton
          aria-label="resize-sidebar"
          onClick={() => onResizeSidebar(!resizeSidebar)}
        >
          {resizeSidebar ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
      </section>

      <section className="sidebar-items">
        {sidebarItems.map((it, index) => {
          let item;
          if (!it.subItems) {
            item = (
              <SidebarItem key={index} item={it} resized={resizeSidebar} />
            );
          } else if (it.subItems && it.subItems.length) {
            item = (
              <SidebarItemAccordion
                key={index}
                item={it}
                resized={resizeSidebar}
              />
            );
          }
          return item;
        })}
      </section>

      {!resizeSidebar && <Footer />}
    </aside>
  );
};

export default sidebar;
