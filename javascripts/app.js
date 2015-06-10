$(document).ready(function() {
    (function initialize() {
        setInterval(carousel, 2000);
        $(window).scroll(stickSideBar)
        $('.tabs').children().on('click', function(event) {
            tabbedInterface(event)
        })

        $(".count").text("1");
        var totalSlides = $('#slides').children().length
        $('#total').html(totalSlides)
        $('.bottom_slide.active p').html($('#summary1').text())
        $('.bottom_description').html($('.description #item1').text())
    }());

    function carousel() {
        var $current = $('#slides li.active')
        $current.removeClass('active')
        if ($current.is($('#slides li').last())) {
            $('#slides').css({
                'left': '0%'
            })
            $('#slides li').first().addClass('active')
            $(".count").html("1")
        } else {
            $('#slides').animate({
                'left': '-100%'
            }, 'slow')
            $current.next().addClass('active')
            $current = $current.next();
            $(".count").html($current.index() + 1)
        }
    }

    function stickSideBar() {
        if ($(window).scrollTop() > $('#bottom_container').offset().top) {
            $('#right_bar').addClass('stick')
        } else {
            $('#right_bar').removeClass('stick')
        }
    }

    function tabbedInterface(e) {
        e.preventDefault();
        $('.tabs').children().removeClass('active')
        $('.item_photos').children().removeClass('active')
        $(e.target).addClass('active')
        $(e.target.hash).addClass('active')
        $('.bottom_slide.active p').fadeOut().fadeIn()
        $('.bottom_slide.active p').html($('#summary1').text())
        $('.bottom_description').fadeOut().fadeIn()
        $('.bottom_description').html($('.description #item1').text())
    }

})