window.addEventListener('DOMContentLoaded', (event) => {
  const contentSections = document.querySelectorAll('.content');
  console.log(contentSections)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'bounceIn 1s forwards';
        entry.target.style.visibility = 'visible';
      } else {
        entry.target.style.animation = 'none';
      }
    });
  }, { threshold: 0.1 });

  contentSections.forEach((section) => {
    observer.observe(section);
  });
});