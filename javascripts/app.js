$(document).ready(function(){
  console.log("doc")
  function carousel() {
     $('#slides').animate({'left' : '-100%'},'slow', function(){
        }
      )
    }
    var totalSlides = $('#slides').children().length
    setInterval(carousel,2000);
    $('#total').html(totalSlides)
    $('#counter').appendTo($('#slides'))
})