
// Preloader Javascript

var audio = new Audio("sound.mp2");
audio.play();

$("#title").hide();
$("#aboutMe").hide();
$("#skills").hide();
$("#projects").hide();
$("#press").hide();
$("#cta").hide();
$("#footer").hide();
$(".w").hide();
$(".e").hide();
$(".l").hide();
$(".c").hide();
$(".o").hide();
$(".m").hide();
$(".e2").hide();
$(".x").hide();
$(".w").delay(250).fadeIn();
$(".e").delay(500).fadeIn();
$(".l").delay(750).fadeIn();
$(".c").delay(1000).fadeIn();
$(".o").delay(1250).fadeIn();
$(".m").delay(1500).fadeIn();
$(".e2").delay(2000).fadeIn();
$(".x").delay(2250).fadeIn();



setTimeout(toAnimate, 2500);

function toAnimate(){
  $("#preloader").hide();
  $("#title").slideDown("slow");
  $(".head").hide();
  $(".head2").hide();
  $("#aboutMe").slideDown("slow");
  $("#skills").slideDown("slow");
  $("#projects").slideDown("slow");
  $("#press").slideDown("slow");
  $("#cta").slideDown("slow");
  $("#footer").slideDown("slow");
}

setTimeout(tohead, 3000);

function tohead(){
   $(".head").slideDown("slow");
}

setTimeout(tohead2, 3250);

function tohead2(){
   $(".head2").slideDown("slow");
}
