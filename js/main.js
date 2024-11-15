(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 85,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:6
            }
        }
    });
    
})(jQuery);




$(document).ready(function(){
    $(".vendor-carousel").owlCarousel({
        items: 6,  // Show 6 items at once
        loop: true,  // Loop the carousel
        margin: 0,  // Remove space between items
        autoplay: true,  // Enable autoplay
        autoplayTimeout: 2000,  // Set autoplay delay (3 seconds)
        autoplayHoverPause: true,  // Pause autoplay on hover
        responsive: {
            0: {
                items: 1  // 1 item per slide on small screens
            },
            600: {
                items: 2  // 2 items per slide on medium screens
            },
            1000: {
                items: 6  // 6 items per slide on larger screens
            }
        }
    });
});

//who we are


document.querySelectorAll('.icon-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const hoverContent = document.querySelector('.hover-content .hover-paragraph');
        hoverContent.innerText = item.getAttribute('data-hover-text');
        document.querySelector('.hover-content').style.display = 'block';
    });

    item.addEventListener('mouseleave', function() {
        document.querySelector('.hover-content').style.display = 'none';
    });
});


//counting animation

document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(id, start, end, duration) {
        let element = document.getElementById(id);
        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - remaining * range);
            element.innerHTML = value;
            if (value === end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }

    // Initialize counters with specific end values
    animateCounter("experience-counter", 0, 25, 2000); // Count to 25
    animateCounter("products-counter", 0, 150, 2000);  // Count to 150
    animateCounter("students-counter", 0, 50, 2000);   // Count to 50K (50)
    animateCounter("customers-counter", 0, 15, 2000);  // Count to 15K (15)
});
