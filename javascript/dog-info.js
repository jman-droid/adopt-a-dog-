let total = 0;

$(".dog-card").mouseenter(function(){
  console.log("mouse has entered")
  $(this).css('background-color', '#dddddd')
}).mouseleave(function(){
    console.log("mouse has left")
    $(this).css('background-color', '')


})

$(".card-button").on('click',function(){

  var fee = Number($(this).parents('.dog-card').attr('data-fee'));
  $(this).css('background-color', 'blue');
  $("#cart-total").replaceWith($('<p/>', {
    id:'cart-total',
    text:`$${total +=fee}`,

  }));
});
