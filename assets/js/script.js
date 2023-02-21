


$(document).ready(function() {
    
  AOS.init();

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            500:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            802: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1240: {
                slidesPerView: 3.5,
                spaceBetween: 40,
            },
            1399: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1530: {
                slidesPerView: 5,
                // spaceBetween: 0,
            },
        },
    });

    $(".icon-dropdown").on("click",function(){
        $(".header__navigation").addClass("slide");
        $(this).hide();
        $(".icon-close").show();
    })
  
    $(".icon-close").on("click", function () {
        $(".header__navigation").removeClass("slide")
        $(this).hide();
        $(".icon-dropdown").show();
    })
  


    $('.link')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        if (target.length) {
          
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
            }, 700, function() {
            
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {     
                return false;
            } else {
                $target.attr('tabindex','-1');
                $target.focus(); 
            };
                });
            }
        }
    });


    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
        if (nowScrollTop == 0) {
            $("header").addClass("navbar");
            $("header").removeClass("navbar-down");
        }
        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
            if (nowScrollTop > lastScrollTop) {
                // SCROLLING DOWN
                $("header").addClass("navbar-down");
            } else {
                // SCROLLING UP 
                $("header").addClass("top-0");
            }
            lastScrollTop = nowScrollTop;
        }
    });
         
          
    $("a.link").on("click", function () {         
        $(".header__navigation").removeClass("slide");
        $(".icon-close").hide();
        $(".icon-dropdown").show();
        // $("html, body").animate({
        //     scrollTop: $($(this).attr("href")).offset().top - 100
        // }, 700);  
    })

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.scroll-top-button').fadeIn();
        } else {
            $('.scroll-top-button').fadeOut();
        }
    });

    $(".scroll-top-button").on("click",function(){
        $("html, body").animate({
            scrollTop: 0,
        }, 700);  
    })

    $(".visit-btn").on("click",function(){
        $(".popup").fadeIn();
    })

    $(".pop").on("click",function(){
        $(".popup").fadeOut();
        // $('html, body').css({
        //     overflow: 'scroll',
        // });
    })

})