import React from "react";
import $ from "jquery";
import Swal from "sweetalert2";
// Import SVG
import MenuSVG from "../assets/images/icons/menu.svg";
import CloseSVG from "../assets/images/icons/right_arrow.svg";
import HomeSVG from "../assets/images/icons/home.svg";
import PlusSVG from "../assets/images/icons/plus.svg";
import UploadSVG from "../assets/images/icons/upload.svg";
import EditSVG from "../assets/images/icons/edit.svg";
import TableSVG from "../assets/images/icons/table.svg";
import ExitSVG from "../assets/images/icons/exit.svg";

const Sidebar = () => {
  // Close App On CLick
  const Logout = () => {
    Swal.fire({
      title: "آیا مایل به خروج از برنامه هستید ؟",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: `بله`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.close();
      }
    });
  };

  const ActiveMenu = (e) => {
    e.preventDefault();
    $("#Sidebar-Body li").removeClass("active");
    $(e)[0].currentTarget.classList.add("active");
    if ($("#ToggleButton").hasClass("active")) {
      ToggleSideBar();
    }
  };

  const ToggleSideBar = () => {
    $("#ToggleButton").toggleClass("active");
    $("#SideBar").toggleClass("active");
    if ($("#ToggleButton").hasClass("active")) {
      $("#ToggleButton").attr("src", CloseSVG);
    } else {
      $("#ToggleButton").attr("src", MenuSVG);
    }
  };

  return (
    <div id="SideBar" className="sidebar">
      <div className="Sidebar-Head">
        <img
          id="ToggleButton"
          className="toggleButton"
          onClick={ToggleSideBar}
          src={MenuSVG}
        />
        <span>انبارداری</span>
      </div>
      <ul className="Sidebar-Body" id="Sidebar-Body">
        <li className="active" onClick={ActiveMenu}>
          <img src={HomeSVG} alt="" />
          <span>خانه</span>
        </li>
        <li onClick={ActiveMenu}>
          <img src={PlusSVG} alt="" />
          <span>جدید</span>
        </li>
        <li onClick={ActiveMenu}>
          <img src={UploadSVG} alt="" />
          <span>خروجی</span>
        </li>
        <li onClick={ActiveMenu}>
          <img src={EditSVG} alt="" />
          <span>ویرایش</span>
        </li>
        <li onClick={ActiveMenu}>
          <img src={TableSVG} alt="" />
          <span>نمایش</span>
        </li>
      </ul>
      <div id="Logout" onClick={Logout}>
        <img src={ExitSVG} alt="" />
        <span>خروج</span>
      </div>
    </div>
  );
};

export default Sidebar;
