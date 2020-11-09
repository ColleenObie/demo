$(function(){
  $("#up").on("click",function(){
    $("#box").slideUp();
  });  

  $("#down").on("click",function(){
    $("#box").slideDown();
  });

  $("#left").on("click",function(){
    $("#box").animate({right: '350px'});
    $("#box").css("position","absolute");
  });

  $("#right").on("click",function(){
    $("#box").animate({left: '350px'});
    $("#box").css("position","absolute");
  }); 

  $("#fadeout").on("click",function(){
    $("#box").fadeOut(1000);
  });

  $("#fadein").on("click",function(){
    $("#box").fadeIn(1000);
  });

  $("#reset").on("click",function(){
    $("#box").reset();
  });

});