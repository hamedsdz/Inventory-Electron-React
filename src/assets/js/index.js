// Close App On CLick
$("#Logout").click(() => {
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
});
$("#Sidebar-Body li").click((e) => {
  e.preventDefault();
  $("#Sidebar-Body li").removeClass("active");
  $(e)[0].currentTarget.classList.add("active");
  if ($("#ToggleButton").hasClass("active")) {
    ToggleSideBar();
  }
});

$("#ToggleButton").click(() => {
  ToggleSideBar();
});

const ToggleSideBar = () => {
  $("#ToggleButton").toggleClass("active");
  $("#SideBar").toggleClass("active");
};
$("#HeaderDate").text(
  new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    formatMatcher: "basic",
  })
);
