/*
- open a modal on button click
- while the modal is open the backgroun should be blur
- while click on close or outside the modal the modal should get closed.
- on clicking inside the modal the modal should not get closed.

*/

const parentDiv = document.querySelector(".parent");
const modalDiv = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const modalBtn = document.querySelector(".open-modal");

function toggle(open) {
  parentDiv.style.display = open ? "flex" : "none";
}

modalBtn.addEventListener("click", () => {
  toggle(true);
});

parentDiv.addEventListener("click", (event) => {
  if (event.target.className === "parent") toggle(false);
});

closeModal.addEventListener("click", () => toggle(false));

//1st approach to close modal on clicking outside the modal
// modalDiv.addEventListener("click", (event) => {
//   console.log(event);
//   event.stopPropagation();
// });
