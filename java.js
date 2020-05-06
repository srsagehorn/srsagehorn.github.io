var pp = document.getElementById("pp");
var gd = document.getElementById("gd");
var resume = document.getElementById("resume");

pp.addEventListener("mouseover", function () {
  document.getElementById("ppDropDown").classList.toggle("show");
});

gd.addEventListener("mouseover", function () {
  document.getElementById("gdDropDown").classList.toggle("show");
});

resume.addEventListener("mouseover", function () {
  document.getElementById("resumeDropDown").classList.toggle("show");
});
