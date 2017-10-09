$(document).ready(function() {

var div1=$("#div_1");
var div2=$("#div_2");
var div3=$("#div_3");

div1.text("H")
div2.text("P")
div3.text("L")
    

  var x = 1;
  function start() {
    if (x == 1) {
    $('#btnPlayCircle').css("margin-top", "-70px");
    $('#btnPlayShadow').css("height", "25px");
    $('#btnPlayShadow').css("width", "25px");
    $('#btnPlayShadow').css("border-radius", "25px");
    $('#btnPlayShadow').css("left", "51.1%");
    $('#btnPlayShadow').css("opacity", "0.3");
  setTimeout(start, 1000);
      x = 2
    } else if(x == 2){
    $('#btnPlayCircle').css("margin-top", "-37.5px");
    $('#btnPlayShadow').css("height", "50px");
    $('#btnPlayShadow').css("width", "50px");
    $('#btnPlayShadow').css("border-radius", "50px");
    $('#btnPlayShadow').css("left", "50%");
    $('#btnPlayShadow').css("opacity", "0.5");
      setTimeout(start, 1000);
      x = 1
  }
}
start();



});