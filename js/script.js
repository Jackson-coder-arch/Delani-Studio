$(document).ready(function(){
    $(".design").click(function(){
        $("#design, .design").toggle("slow");
    });
    $("#design").click(function(){
        $(".design, #design").toggle("slow");
    });
    $(".development").click(function(){
        $("#development, .development").toggle("slow");
    });
    $("#development").click(function(){
        $(".development, #development").toggle("slow");
    });
    $(".product").click(function(){
        $("#product, .product").toggle("slow");
    });
    $("#product").click(function(){
        $(".product, #product").toggle("slow");
    });
   
});


$(document).ready(function(){
    $(".work-4").mouseover(function(){
        $("#text4-overlay").show();
    }).mouseout(function(){
        $("#text4-overlay").hide();
    });
    $(".work-3").mouseover(function(){
        $("#text3-overlay").show();
    }).mouseout(function(){
        $("#text3-overlay").hide();
    });
    $(".work-2").mouseover(function(){
        $("#text2-overlay").show();
    }).mouseout(function(){
        $("#text2-overlay").hide();
    });    
    });$(".work-1").mouseover(function(){
        $("#text1-overlay").show();
    }).mouseout(function(){
        $("#text1-overlay").hide();
    });
    $(".work-5").mouseover(function(){
        $("#text5-overlay").show();
    }).mouseout(function(){
        $("#text5-overlay").hide();
    });    
    ;$(".work-6").mouseover(function(){
        $("#text6-overlay").show();
    }).mouseout(function(){
        $("#text6-overlay").hide();
    });    
    ;$(".work-7").mouseover(function(){
        $("#text7-overlay").show();
    }).mouseout(function(){
        $("#text7-overlay").hide();
    });    
    $(".work-8").mouseover(function(){
        $("#text8-overlay").show();
    }).mouseout(function(){
        $("#text8-overlay").hide();
    });
    $("form#mc-embedded-subscribe-form").on('submit',function(event){
        event.preventDefault();
        var name =$("input#mce-FNAME").val();
        var email =$("input#mce-EMAIL").val();
        var message = $("textarea#Message").val();
    
    
       
        if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
            alert ("Thank you for reaching out to us. If you wish to leave a message please type in on the message section..");
        }
    
    });

$('.img').hover(function(){
    $('.text',this).slideToggle('slow');
  }, function(){
    $('.text',this).slideToggle('slow');
  });