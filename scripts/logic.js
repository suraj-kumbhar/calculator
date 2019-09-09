const display = document.querySelector(".display");
const flexContainer = document.querySelector(".flex-container");
const symbols = ["+", "-", "*", "/", "="];
var stack = "";
flexContainer.addEventListener("click", function(e) {
  if (e.target.id === "b") {
    if (document.querySelector(".display").innerText.length !== 1) {
      document.querySelector(".display").innerText = document
        .querySelector(".display")
        .innerText.substring(
          0,
          document.querySelector(".display").innerText.length - 1
        );
    }
    else{
        document.querySelector(".display").innerText = "0";
    }
  } else if (e.target.id === "c") {
    document.querySelector(".display").innerText = "0";
  } else if (e.target.id === "=") {
    console.log(stack);
    document.querySelector(".display").innerText = eval(stack);
  } else if (symbols.includes(e.target.id) || !isNaN(e.target.id)) {
    if (document.querySelector(".display").innerText === "0") {
      document.querySelector(".display").innerText = e.target.id;
    } else {
      document.querySelector(".display").innerText += e.target.id;
    }
    stack = document.querySelector(".display").innerText;
  }
});