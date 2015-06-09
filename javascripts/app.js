$(document).ready(function(){
  console.log("doc")
  function carousel() {
    var $current = $('#slides li.active')
    $current.removeClass('active')
    if ($current.is($('#slides li').last())) {

      console.log("last")
        $(".count").text("1");
        $('#slides li').first().fadeIn();
        $('#slides li').first().addClass('active')
    }
    // else, hide current slide and show the next one
    else {
      console.log("not last")
        $(".count").text($current.index()+1);
        $('#slides').animate({'left': '-100%'},'slow')
        $current.next().addClass('active')
        $current = $current.next();
      }
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
      $(event.target.hash).addClass('active')
      $('.bottom_slide.active p').fadeOut().fadeIn()
      $('.bottom_slide.active p').html($('#summary1').text())
      $('.bottom_description').fadeOut().fadeIn()
      $('.bottom_description').html($('.description #item1').text())
    })

    $
})