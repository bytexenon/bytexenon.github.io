let contentSections = document.querySelectorAll(".content");

const animateElement = (element, isIntersecting) => {
  if (isIntersecting) {
    element.style.animation = "bounceIn 1s forwards";
    element.style.visibility = "visible";
  } else {
    element.style.animation = "none";
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      animateElement(entry.target, entry.isIntersecting);
    });
  },
  { threshold: 0.1 }
);

contentSections.forEach((section) => {
  observer.observe(section);
});