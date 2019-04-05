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

  // Carousel

//  var $galleryImg = $("#featured .item img");
//  var $closeBtn = $(".btn");
//  var $carousel = $(".carousel");
//  var $overlay = $(".overlay");
//
//  $carousel.slick({
//    centerMode: true,
//    fade: true,
//    arrows: false,
//    dots: true,
//    draggable: false
//  });
//
//  $galleryImg.on("click", function(slick){
//    var $imgId = $(this).attr("id");
//    $overlay.fadeIn();
//    $carousel.slick("slickGoTo", $imgId, true).slick("setPosition");
//  });
//
//  $closeBtn.on("click", function(event){
//    event.preventDefault();
//    $overlay.fadeOut();
//  });

});
