// Check if it's mobile device
if (/Mobi|iPhone|Android/i.test(navigator.userAgent)) {
  return;
}

let contentSections = document.querySelectorAll(".content");

function animateElement(element, isIntersecting) {
  if (isIntersecting) {
    element.style.animation = "bounceIn 1s forwards";
    element.style.visibility = "visible";
    return;
  }
  element.style.animation = "none";
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
