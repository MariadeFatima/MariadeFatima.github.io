$(document).ready(function(){
    $("#banner").css({"height":$(window).height() + "px"});
    
    var flag = false;
    var scroll;
    
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        
        if(scroll > 200){
            if(!flag){
            $("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});
            
            $("header").css({"background-color": "#F9F3D0","z-index": "100"});
            $("#content-menu").css({"display":"none"});
            $("btn1").css({"display":"none"}); 
            $("#social").css({"display": "inline"});
                
            flag = true;
            }      
        }else{
            if(flag){
            $("#logo").css({"margin-top": "80px", "width": "350px","height":"350px"});
            
            $("header").css({"background-color":"transparent"}); 
            $("#content-menu").css({"display": "inline"});
            $("btn1").css({"display": "inline"});
            $("#social").css({"display":"none"}); 
                
            flag = false;
            }
        }
    });
});

