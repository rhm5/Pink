"use strict";



var nav = document.querySelector(".nav"),
    navToggle = nav.querySelector(".nav__toggle"),
    header = document.querySelector(".page-header");

nav.classList.remove("nav--nojs");
nav.classList.add("nav--closed");
header.classList.add("page-header--closed");

navToggle.addEventListener("click", function() {
  if(nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    header.classList.remove("page-header--closed");
  } else {
    nav.classList.add("nav--closed");
    header.classList.add("page-header--closed");
  }
});



function initMap(){
  var map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 59.939334, lng: 30.323094},
    scrollwheel: false,
    zoom: 16,
    mapTypeControl: false
  });

  var image = "img/icon-map-marker-mob.png";
  var myLatLng = new google.maps.LatLng(59.938800, 30.323083);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}




