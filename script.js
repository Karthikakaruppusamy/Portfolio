//link to next page ICON
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



//ABOUT ME PAGE 

function showText(container) {
  const text1 = container.querySelector(".text1");

  if (text1.style.display === "block") {
    text1.style.display = "none";
    container.style.backgroundColor = "#cbcbcb"; 
    container.classList.remove("hovered");
  } else {
    text1.style.display = "block";
    container.style.backgroundColor = "#043129"; 
    container.classList.add("hovered");
  }
}
function changeOpacity(image) {

  image.style.opacity = image.style.opacity === "0.5" ? "1" : "0.5";
}





//for SKILLS PAGE

function showContainer(containerId) {
  const allContainers = document.querySelectorAll(".hidden-container");
  allContainers.forEach((container) => (container.style.display = "none"));

  const container = document.getElementById(containerId);
  container.style.display = "block";
}

function hideContainer() {
  const allContainers = document.querySelectorAll(".hidden-container");
  allContainers.forEach((container) => (container.style.display = "none"));
}






// experience

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.elgidetails, .gurudetails, .cert, .awrd');
    
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('animate-right');
        } else {
            el.classList.remove('animate-right'); 
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

