/* header */
window.onload = function () {
  var btnClose = document.getElementById("navbar-toggler-close");
  var btnToggle = document.getElementById("navbar-toggler-open");
  var overlay = document.getElementById("overlay-screen");
  var btnShowSearch = document.getElementById("show-search");
  var searchMobile = document.getElementById("search-mobile");
  var btnCloseSearch = document.getElementById("m-close-search");
  btnClose.onclick = function () {
    btnToggle.click();
  };
  btnToggle.onclick = function () {
    overlay.classList.toggle("overlay-block");
  };
  overlay.onclick = function () {
    btnToggle.click();
  };

  btnShowSearch.onclick = function () {
    searchMobile.classList.add("search-mobile--b");
    document.getElementById("search-mobile-input").focus();
  };
  btnCloseSearch.onclick = function () {
    searchMobile.classList.remove("search-mobile--b");
  };
};

/* header */
