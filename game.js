$(function(){
    $("#newGame").on("click", function(){
        $("#messages").text("Let's begin!!! Remember the cards...")
        $("#container img").animate({opacity: 5.0},4000);
        $("#container img").animate({opacity: 0.0});
        
        setTimeout(function(){ 
        $("#messages").text("Click on any 2 cards to find a match"); }, 4000);
    });
    
    var flipCard = $flipCard(elem);  
    $flipCard(elem) = function(){
        $("#flipCard").on("click",function(elem){
            $(this).css({opacity: 1.00});
        });
    };
});