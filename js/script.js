var button = document.querySelector(".show-cat");
console.log(button);
//console.log(button);

var cat = document.querySelector(".cat");
console.log(cat);
//console.log(button);

// When user clicks on the button, function is triggered to show cat image
button.addEventListener("click", function () {
  cat.classList.add("show");
});
