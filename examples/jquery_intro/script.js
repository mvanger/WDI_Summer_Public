$(function() {
  $('#favorite-color').hover(changeToGreen)
  $('h1').hover(changeToGreen)
  $('#my-field').last().keydown(function(event){
    if (event.which === 84){
      $('h1:first').hide();
    }
  })
  $('#my-field').last().keyup(function(event){
    if (event.which === 84){
      $('h1:first').show();
    }
  })
});

function changeToGreen(){
  $(this).toggleClass("green");
};

