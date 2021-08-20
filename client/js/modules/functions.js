import { mobileHidde, lineOne, lineTwo, lineThree } from "./domSelectors.js";

const displayMenu = () => {
  lineOne.classList.toggle("line-one");
  lineTwo.classList.toggle("line-two");
  lineThree.classList.toggle("line-three");
  mobileHidde.classList.toggle("displayMenu");
};

export { displayMenu };
