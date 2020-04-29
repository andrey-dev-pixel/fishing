$(function(){
	var transTime = 5000;
	var numBgColors = $('.bg-grad').length;
	var bgtrans = setInterval(function(){
	if($('.bg-grad.active').index() == ($('.bg-grad').length-1)){
	$('.bg-grad.active').removeClass('active');
	$('.bg-grad').eq(0).addClass('active');
	}else{
	var curIndex = $('.bg-grad.active').index();
	$('.bg-grad.active').removeClass('active');
	$('.bg-grad').eq(curIndex+1).addClass('active');
	}
	},transTime);

	$(window).scroll(function() {
        if ($(this).scrollTop() > 700){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
            
        }
    });
    // плавное перемещение страницы к нужному блоку
    $(".menu-link a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    // Menu opener hamburger
	$('.menu-open, .menu-link a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.nav-menu').toggleClass('menu-opened');
        $('.menu-open .icon-bar:nth-child(1)').toggleClass('first');
        $('.menu-open .icon-bar:nth-child(2)').toggleClass('middle');
        $('.menu-open .icon-bar:nth-child(3)').toggleClass('last');
    });
    $('section, header').click(function () {
        $('.menu-collapse').addClass('d-none').css('order', '1');
        $('.nav-menu').removeClass('menu-opened');
        $('span:nth-child(1)').removeClass('first');
        $('span:nth-child(2)').removeClass('middle');
        $('span:nth-child(3)').removeClass('last');
    });
    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
    });
    $(".scroll-to-top a").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    //big slider
    $('.big-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    //hit slider
    $('.hit-slider, .news-slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button1" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 992,
                settings: {
                slidesToShow: 2,
              }
            },
            {
               breakpoint: 576,
                settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
});