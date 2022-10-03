const elLoader = document.querySelector(".js-loader"),
elInput = document.querySelector(".js-input"),
elButton = document.querySelector(".js-img-button"),
elLink = document.querySelector(".js-img-link");

document.addEventListener("DOMContentLoaded", function (){
  setTimeout(function ()  {
    elLoader.classList.add("lds-ellipsis-wrapper--none");
  }, 800);
});

// if (elInput) {
//   elInput.addEventListener("input", function () {
//     elLink.classList.add("form__link-img--none");
//     elButton.classList.add("form__button--one");
//   });
// } else {
//   elLink.classList.remove("form__link-img--none");
//   elButton.classList.remove("form__button--one");
// }