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

    $('.bottom_slide').eq(0).toggle()
    $('.bottom_description').html('.item1').text())

    $('.tabs').on('click', function(event){
      event.preventDefault();
      var $val = event.target.addClass("active")
      console.log($val)
    })

    $
})