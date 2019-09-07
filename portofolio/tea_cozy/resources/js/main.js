$(document).ready(function(){

  // Navbar

  $("#nav-toggle").on("click", function(event){
    event.preventDefault();
    $(".mobile-list").slideToggle();
    $(this).toggleClass("active");
  });

  $("header a").on("click", function(event){
    event.preventDefault();
    var headerHeight = $("header .navbar-fixed-top").height();
    var id = $(this).attr("href");
    var originalScrollCordinate = $(id).offset().top;
    var newScrollCordinate = originalScrollCordinate - headerHeight;
    $("html").animate({
      scrollTop : newScrollCordinate
    });
  });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
