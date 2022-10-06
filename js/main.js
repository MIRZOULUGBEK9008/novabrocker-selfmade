const elLoader = document.querySelector(".js-loader"),
elInput = document.querySelector(".js-input"),
elButton = document.querySelector(".js-img-button"),
elLink = document.querySelector(".js-img-link");

document.addEventListener("DOMContentLoaded", function (){
  setTimeout(function ()  {
    elLoader.classList.add("lds-ellipsis-wrapper--none");
  }, 800);
});
