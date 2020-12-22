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
    $("#work-4").mouseover(function(){
        $("#text4").show();
    }).mouseout(function(){
        $("#text4").hide();
    });
    $("#work-3").mouseover(function(){
        $("#text3").show();
    }).mouseout(function(){
        $("#text3").hide();
    });
    $("#work-2").mouseover(function(){
        $("#text2").show();
    }).mouseout(function(){
        $("#text2").hide();
    });    
    });$("#work-1").mouseover(function(){
        $("#text1").show();
    }).mouseout(function(){
        $("#text1").hide();
    });
    $("#work-5").mouseover(function(){
        $("#text5").show();
    }).mouseout(function(){
        $("#text5").hide();
    });    
    ;$("#work-6").mouseover(function(){
        $("#text6").show();
    }).mouseout(function(){
        $("#text6").hide();
    });    
    ;$("#work-7").mouseover(function(){
        $("#text7").show();
    }).mouseout(function(){
        $("#text7").hide();
    });    
    $("#work-8").mouseover(function(){
        $("#text8").show();
    }).mouseout(function(){
        $("#text8").hide();
    });



$("form#form1").on('submit',function(event){
    event.preventDefault();
    var name =$("input#name").val();
    var email =$("input#email").val();
    var message = $("textarea#message").val();


    if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
        alert ("Hello" +name + ", Thank you for reaching out, we'll get back to you shortly..");
    }
    else if($("input#name").val() && $("input#email").val()){
        alert ("Thank you for reaching out to us. If you wish to leave a message please type in on the message section..");
    }
    else{
        alert ("Please provide correct name or email")
    }

});
 
