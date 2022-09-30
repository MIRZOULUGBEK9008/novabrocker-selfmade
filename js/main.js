const elLoader = document.querySelector(".js-loader");

document.addEventListener("DOMContentLoaded", function (){
  setTimeout(function ()  {
    elLoader.classList.add("lds-ellipsis-wrapper--none");
  }, 800);
});