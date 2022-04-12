import React from "react";
import Icon from "@material-ui/core/Icon";
import "./Dashboard.css";

const dashboard = props => {
  return (
    <div className="dashboard">
      <p className="description">
        The layout was made with CSS-Grid and Flexbox. I only use Material for
        basic components. You can use your own components.
      </p>

      <p>If you found this useful, please consider do a donation.</p>

      <a href="https://www.paypal.me/davidrnr" target="_blank" rel="noopener">
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
          border="0"
          alt="PayPal Logo"
        />
      </a>

      <h2>Other shared works</h2>

      <a
        href="https://stackblitz.com/edit/smart-interceptor"
        target="_blank"
        rel="noopener"
      >
        ANGULAR SMART INTERCEPTOR
      </a>

      <a
        href="https://stackblitz.com/edit/ngx-checkbox"
        target="_blank"
        rel="noopener"
      >
        NGX-CHECKBOX
      </a>

      <a
        href="https://stackblitz.com/edit/angular-responsive-layout"
        target="_blank"
        rel="noopener"
      >
        ANGULAR RESPONSIVE LAYOUT
      </a>

      <a
        className="email"
        href="mail:carlosdavidmartin@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <Icon color="secondary">mail</Icon> carlosdavidmartin@gmail.com
      </a>
    </div>
  );
};

export default dashboard;
