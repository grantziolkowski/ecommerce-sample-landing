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

    $('.bottom_slide.active p').html($('#summary1').text())
    $('.bottom_description').html($('.description #item1').text())

    $('.tabs').children().on('click', function(event){
      event.preventDefault();
      $('.tabs').children().removeClass('active')
      $('.item_photos').children().removeClass('active')
      $(event.target).addClass('active')
    })

    $
})