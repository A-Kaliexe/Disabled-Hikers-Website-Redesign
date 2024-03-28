/* HOME PAGE - START (I forget what exactly it impacts) */

$(document).ready(function(){
    $('.box').mousemove(function(e){
        var window = $(this);
        var x_axis = e.pageX - window.offset().left;
      $('.mask').css({
        left: x_axis
      });
    });
});

/* HOME PAGE - END (I forget what exactly it impacts) */
