window.onload = function () {

    let offBulb = document.getElementById("off light");
    let onBulb = document.getElementById("on light");

    let onBtn = document.getElementById("on_button");
    let offBtn = document.getElementById("off_button");

    // start with OFF bulb only
    onBulb.style.display = "none";

    onBtn.onclick = function () {
        onBulb.style.display = "block";
        offBulb.style.display = "none";
    };

    offBtn.onclick = function () {
        offBulb.style.display = "block";
        onBulb.style.display = "none";
    };
};