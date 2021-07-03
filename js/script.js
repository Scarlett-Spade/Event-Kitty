var button = document.querySelector(".show-cat");
console.log(button);
//console.log(button);

var cat = document.querySelector(".cat");
console.log(cat);
//console.log(button);

// When user clicks on the button, function is triggered to show cat image
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    console.log(button);
    //console.log(button);
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});
