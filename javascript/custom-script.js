(function ($) {
    "use strict";


    /* =============== Page pre-loader =============== */
    $(window).load(function(){
        $('#page-loader').fadeOut(400);

        $('#intro').addClass('animated fadeInDown');
        $('#intro-div').addClass('animated fadeInUp');
        $('#profile').addClass('animated zoomIn');
		
		
		/* =============== Portfolio Filterizr Initialize =============== */
		$(function() {
			//Initialize filterizr with default options
			$('.filtr-container').filterizr();

			$('.simple-filter li').on('click', function() {
				$('.simple-filter li').removeClass('active-cat');
				$(this).addClass('active-cat');
			});
		});
		
    });



    $(document).ready(function() {

        /* =============== AOS Initialize =============== */
        AOS.init({
            offset: 50,
            duration: 500,
            delay: 300,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();



        /* =============== Side Nav =============== */
        var $menuBtn = $('#nav-btn');
        var $sideNav = $('#side-nav');
        var $sideNavMask = $('#side-nav-mask');
        var $link = $('.nav-link');

        $menuBtn.on('click', function() {
            $sideNav.animate({left: 0}, 'fast');
            $sideNavMask.addClass('visible');
        });

        $link.on('click', function() {
            $sideNav.animate({left: -240}, 'fast');
            $sideNavMask.removeClass('visible');
        });

        $sideNavMask.on('click', function() {
            $sideNav.animate({left: -240}, 'fast');
            $sideNavMask.removeClass('visible');
        });



        /* =============== Page Scrolling Smoothly to Link Target =============== */
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 32
                    }, 1000);
                    return false;
                }
            }
        });




        /* =============== Skill Bar value =============== */
        $('.skill-progress').each(function() {
            $(this).find('.skill-determinate').css({
                width: jQuery(this).attr('data-percent')
            }, 7000);
        });




        /* =============== Achievement toggle button =============== */

        $( "#btn-1" ).on('click', function() {
            $("#content-1").slideToggle();
        });

        $( "#btn-2" ).on('click', function() {
            $("#content-2").slideToggle();
        });

        $( "#btn-3" ).on('click', function() {
            $("#content-3").slideToggle();
        });

        $( "#btn-4" ).on('click', function() {
            $("#content-4").slideToggle();
        });

        $( "#btn-5" ).on('click', function() {
            $("#content-5").slideToggle();
        });

        $( "#btn-6" ).on('click', function() {
            $("#content-6").slideToggle();
        });
        $( "#btn-7" ).on('click', function() {
            $("#content-7").slideToggle();
        });

        $( "#btn-8" ).on('click', function() {
            $("#content-8").slideToggle();
        });

        $( "#btn-9" ).on('click', function() {
            $("#content-9").slideToggle();
        });
        $( "#btn-10" ).on('click', function() {
            $("#content-10").slideToggle();
        });

        $( "#btn-11" ).on('click', function() {
            $("#content-11").slideToggle();
        });

        $( "#btn-12" ).on('click', function() {
            $("#content-12").slideToggle();
        });



        /* =============== Client Swiper Initialize =============== */
        var clientSwiper = new Swiper ('#client-slider', {
            slidesPerView: 1,

            loop: true,
            direction: 'horizontal',
            effect: "slide",
            speed: 1500,
            autoplay: 5000,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
        });



        /* =============== Pricing table =============== */
        var $monthBtn = $('#month-btn');
        var $yearBtn = $('#year-btn');
        var $month = $('#month');
        var $year = $('#year');

        $month.show();
        $year.hide();

        $monthBtn.on('click', function() {
            $month.show();
            $year.hide();
            $month.addClass('animated fadeIn');
            $monthBtn.addClass('active-cat');
            $yearBtn.removeClass('active-cat');

        });

        $yearBtn.on('click', function() {
            $month.hide();
            $year.show();
            $year.addClass('animated fadeIn');
            $yearBtn.addClass('active-cat animated');
            $monthBtn.removeClass('active-cat');
        });



        /* =============== Back To Top =============== */
        var offset = 300,
            scroll_top_duration = 700,
            $back_to_top = $('.back-to-top');
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible');
        });

        //smooth scroll to top --->>> Optional
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0 ,
                }, scroll_top_duration
            );
        });



        /* =============== Email Handling =============== */
        $('form#contact-form').on('submit', function (e) {
            e.preventDefault(); //Prevents default submit
            var form = $(this);
            $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click
            var post_data = form.serialize(); //Serialized the form data

            $.ajax({
                    type: 'POST',
                    url: 'email-php/mail_handler.php', // Form script
                    data: post_data
                })
                .done(function () {

                    // Get the snackbar DIV
                    var x = document.getElementById("snackbar");
                    // Add the "show" class to DIV
                    x.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

                })
                .fail(function () {

                    // Get the fail-snackbar DIV
                    var y = document.getElementById("fail-snackbar");
                    // Add the "show" class to DIV
                    y.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
                });
        });
        
    });


    
    


})(jQuery);