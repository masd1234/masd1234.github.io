const mobileButtom = document.querySelector(".mobileMenu");
const mobileHidde = document.querySelector(".mobileMenuDisplayedItems");
const buttomX = document.querySelector(".buttomUndisplay");

const displayMenu = () => {
  mobileHidde.style.display = "flex";
};

const undisplayMenu = () => {
  mobileHidde.style.display = "none";
};

document.querySelectorAll(".linkProjects").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
