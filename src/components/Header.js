import React from "react";
import $ from "jquery";
// Import SVG
import Head from "../assets/images/head.svg";
const Header = (NavItems) => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>گزینه اول</li>
          <li>گزینه دوم</li>
          <li>گزینه سوم</li>
          <li>گزینه چهارم</li>
          <li>گزینه پنجم</li>
          <li>گزینه ششم</li>
        </ul>
        <img src={Head} alt="" />
      </nav>
      <div className="date">
        <span>امروز : </span>
        <span id="HeaderDate">
          {new Date().toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            formatMatcher: "basic",
          })}
        </span>
      </div>
    </div>
  );
};

export default Header;
