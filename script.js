// Once the page is loaded
$(document).ready(function() {
// Random Colors
  var fonts = ["orangered", "dodgerblue", "limegreen"];
  var rand = fonts[Math.floor(Math.random() * fonts.length)];
  $(".caveat").css("color", rand);
  $("a").hover(function(){
    $(this).css("color",rand);
  }, function() {
    $(this).css("color","inherit");
  });

// Date & Time
  (() => {
    var current = new Date().getFullYear();
    var start = new Date("2004").getFullYear();
    var experience = current - start;
    $("#experience").html(experience);
  })();
// The Modal
  $("#message").on("click", function(){
    $("#myModal").css("display", "block");
  });
  $(".close").on("click", function(){
    $("#myModal").css("display", "none");
  });
  $(window).on("click", function(event){
    if ($(event.target).is($("#myModal"))) {
      $("#myModal").css("display", "none");
    }
  });

});
