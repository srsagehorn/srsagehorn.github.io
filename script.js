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

$(".submit").on("click", function () {
  $(".alert").text(
    "Thanks for getting in touch! I will get back with you as soon as possible!"
  );
});
