$(document).ready(function(){



  $("#srchInput").keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode== 13){

      var str = $("#srchInput").val();

      $(".row").children('div:contains('+ str + ')').show(300);
      $(".row").children('div:not(:contains('+ str +'))').hide(300);
    }
  });

  $(".row").children().click(function(){
    console.log("sdasdsa");
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  });



});
