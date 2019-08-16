function msg(){
  alert("Are you sure!");
}
$(document).ready(function(){
  $(".button1").click(function(){
    $(".FORM").slideDown(1000);
  });
});
$(document).ready(function(){
  $(".button2").click(function(){
    $(".FORM").slideUp(1000);
  });
});