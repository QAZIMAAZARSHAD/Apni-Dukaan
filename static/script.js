var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(() => {
  // Banner Owl Carousel
  $("#owl_carousel .owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    stagePadding: 0,
  });
});
