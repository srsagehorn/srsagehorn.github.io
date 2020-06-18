var i = 0;
var txt = "problem solver";
var speed = 65;

function typeWriter() {
  if (i < txt.length) {
    $(".prob").append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function () {
  typeWriter();
}, 500);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function () {
//   scrollFunction();
// };
// console.log($(window).scrollTop());
// function scrollFunction() {
//   if ($("body").scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     // $(".logoName").attr("style", "display : none");
//     $("h1").addClass("navHidden");
//     $(".navImg").attr("style", "display : none");
//   }
//   if ($(window).scrollTop() == 0) {
//     $("h1").removeClass("navHidden");
//     $(".navImg").removeAttr("style");
//   }
// }

// when scroll add attr display: none to .logoName
