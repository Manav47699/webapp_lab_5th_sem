let input = document.querySelector("input");

document.getElementById("show").onclick = function () {
    input.type = "text";
};

document.getElementById("hide").onclick = function () {
    input.type = "password";
};