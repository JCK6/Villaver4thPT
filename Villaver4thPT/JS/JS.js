$(document).ready(function(){
  $(".JQUERYSLIDEEFFECT1").click(function(){
    $(".LOGIN").slideDown("slow");
  });
});
$(document).ready(function(){
  $(".JQUERYSLIDEEFFECT2").click(function(){
    $(".FORM").slideDown("slow");
  });
});
function msg(){
  alert("Are you sure!");
}
function login(){
  $(".LOGIN").slideToggle(1000);
}
function signup(){
  $(".FORM").slideToggle(1000);
}