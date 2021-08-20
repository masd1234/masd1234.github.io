//scroll onClick Button
document.querySelectorAll(".linkProjects").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//scroll animations
const apperarOptions = {
  threshold: 0,
  rootMargin: "0px 0px -190px 0px",
};

const appearsOnScroll = new IntersectionObserver(function (
  entries,
  appearsOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("fade-out");
      entry.target.classList.add("fade-in-appear");
      entry.target.classList.remove("fade-out-left");
      entry.target.classList.add("fade-in-appear-left");
      entry.target.classList.remove("fade-out-up");
      entry.target.classList.add("fade-in-appear-up");
      appearsOnScroll.unobserve(entry.target);
    }
  });
},
apperarOptions);

export { appearsOnScroll };
