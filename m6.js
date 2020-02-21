function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown(){
    var currentval=document.getElementById("countDownButton").innerHTML;
     var newval=0;
     if(currentval > 0){
         newval = currentval - 1;
     }
     else {
         count2();
     }
    document.getElementById("countDownButton").innerHTML = newval;
    
}
function count2(){
    var currentval=document.getElementById("countDownButton").innerHTML;
    var newval=0;
    if(currentval <= 10){
        newval = currentval + 1;
    }
    else {
        countDown();
    }
   document.getElementById("countDownButton").innerHTML = newval;
}

$(document).ready(function(){
    $("#hidden").hover(function(){
          $(this).css("color","black");
    },
    function(){
       $(this).hide();
    });

  /*  $("button").click(function(){
        alert("i'm alert you");
    })*/
});

$(document).ready(function(){
    $("button").click(function(){
       
    },
    function(){
       $("p").hide();
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
    $("#panel").stop();
    });
});


$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });







/*app.controller('m6',['$scope',function($scope){
    $scope.list = ["clean","go to hell","study"];

}])*/

