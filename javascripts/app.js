$(document).ready(function(){
  function carousel() {
   var photo = $('.top_slide.active');
   var next = photo.next();
       $('.top_slide').animate({'left' : '-100%'},'slow', function(){
          photo.removeClass('active');
          next.addClass('active');
        })
      })
    }

    setInterval(carousel,1000);
})