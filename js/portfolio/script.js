// script.js

document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll(".scroll-to");

  scrollLinks.forEach(function (scrollLink) {
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("data-target");
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
