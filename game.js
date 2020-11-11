$(function(){
  $("#up").on("click",function(){
    $("#box").stop();
    $("#box").slideToggle("slow");
  });  

  $("#down").on("click",function(){
    $("#box").stop();
    $("#box").slideDown("slow");
  });

  $("#left").on("click",function(){
    $("#box").stop();
    $("#box").animate({right: '350px'},3000); 
    $("#box").css("position","absolute");
  });

  $("#right").on("click",function(){
    $("#box").stop();
    $("#box").animate({left: '350px'},3000);
    $("#box").css("position","absolute");
  }); 

  $("#fadeout").on("click",function(){
    $("#box").stop();
    $("#box").fadeOut();
  });

  $("#fadein").on("click",function(){
    $("#box").stop();
    $("#box").fadeToggle();
  });

});
