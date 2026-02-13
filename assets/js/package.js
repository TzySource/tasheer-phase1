// Class definition
var KTPackage = function () {

    // Private functions


    // scroll menu-tab
    function initTabScroll() {
        var header = $(".menu-item-custom");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('menu-item-before').addClass("menu-item-after");
            } else {
                header.removeClass("menu-item-after").addClass('menu-item-before');
            }
        });
    }

    //continue button
    function initContinueBtn() {
        $('.add-room-btn').click(function () {
            $('.add-room-outer').removeClass('d-none');
            $('.cabin-outer').addClass('d-none');
            $('.add-room-next').removeClass('d-none');
            $('.add-room-next').addClass('d-block');
            $(this).addClass("d-none");
        });
        //confirm-btn show
        $('.add-room-next').click(function () {
            $(this).addClass("d-none");
            $('.confirm-btn').removeClass('d-none');
            $('.room-btn').addClass('d-none');
            $('.calender-outer').removeClass('d-none');
            $('.add-room-outer').addClass('d-none');
        });

        // Rohit code
        $('.add-book-btn').click(function () {
            $('.skip-btn').addClass('disabled');
            $(this).addClass('d-none');
            $('.confirm-btn').removeClass('d-none');
            $('.traveller-link').addClass('complete');
            // $('.departure-link').addClass('complete');
            // $('#tabBookingPage a[href="#add-ons"]').tab('show');
            $('#tabCabinPage a[href="#date"]').tab('show');
        });

        // $('.add-book-next').click(function () {
        //     $('.skip-btn').addClass('disabled');
        //     $(this).addClass('d-none');
        //     $('.confirm-btn').removeClass('d-none');
        //     $('.traveler-link').addClass('complete');
        //     $('.add-ons-link').addClass('complete');
        //     $('#tabBookingPage a[href="#baggage"]').tab('show');
        //     $('#tabCabinPage a[href="#date"]').tab('show');

        // });


    }

    function initDatePicker() {
        var calendarEl = document.getElementById('calendar');
        if (calendarEl === null) return;

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: moment().format("yyyy-MM-DD"),
            themeSystem: "bootstrap",
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next',
                
            },

            height: "auto",
            contentHeight: "auto",
            aspectRatio: 1.4,

            events: [
                {
                    format: 'yyyy-MM-DD',
                    title: '14,499',
                    start: moment().add(-5, 'd').format("yyyy-MM-DD")
                },
                {
                    format: 'yyyy-MM-DD',
                    title: '10,499',
                    start: moment().format("yyyy-MM-DD")
                },
                {
                    format: 'yyyy-MM-DD',
                    title: '12,12,499',
                    start: moment().add(5, 'd').format("yyyy-MM-DD")
                },
            ]
        });

        calendar.render();
    }

    function initDatePicker1() {
        var calendarEl = document.getElementById('calendar1');
        if (calendarEl === null) return;

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: moment().format("yyyy-MM-DD"),
            themeSystem: "bootstrap",
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next',
            },

            height: 338,
            contentHeight: 328,
            aspectRatio: 3,

            events: [
                {
                    format: 'yyyy-MM-DD',
                    title: '14,499',
                    start: moment().add(-5, 'd').format("yyyy-MM-DD")
                },
                {
                    format: 'yyyy-MM-DD',
                    title: '10,499',
                    start: moment().format("yyyy-MM-DD")
                },
                {
                    format: 'yyyy-MM-DD',
                    title: '12,12,499',
                    start: moment().add(5, 'd').format("yyyy-MM-DD")
                },
            ]
        });

        calendar.render();
    }

    
    function initMyDatePicker() {
        try {
            $("#kt_daterangepicker_3").attr("readonly", true);  // Set input as readonly to prevent keyboard
            $("#kt_daterangepicker_3").daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                drops: 'up',
                maxYear: parseInt(moment().format("YYYY"), 10)  // Correct base for parseInt
            }, function(start, end, label) {
                var years = moment().diff(start, "years");
                // Optional: Display age or other logic
            });
        } catch (error) {
            console.error("Date Picker Initialization Error:", error);
        }
    }
    
    

    function initAutoComplete() {



        // Defining the local dataset
        var airports = ['LHR - London Heathrow', 'STN - London Stansted', 'LGW - London Gatwick', 'DXB - Dubai All Aiports'];



        // Constructing the suggestion engine
        var airports = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: airports
        });



        // Initializing the typeahead
        $('.typeahead').typeahead({
            hint: true,
            highlight: true, /* Enable substring highlighting */
            minLength: 1 /* Specify minimum characters required for showing result */
        },
            {
                name: 'airports',
                source: airports
                //templates: {
                //    suggestion: `<div class="{{active}} border-bottom"><strong class="d-block">{{cname}}</strong> <span class="text-muted font-size-sm"> {{value}} ({{name}})</span><span class="label label-lg label-primary label-inline mr-2 position-absolute right-0 mt-9 top-0 {{dafaultclass}}">{{default}}</span></div>`



                //}
            });
    }

    function initGuestRatingSlider() {
        var roundslider = document.getElementById('SliderRound');
        if (roundslider === null) return;
        noUiSlider.create(roundslider, {
            start: [0, 25],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    function initPriceRangeSlider() {
        var slider = document.getElementById('PriceRange');
        if (slider === null) return;
        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });

        var nodes = [
            document.getElementById('lower-value'), // 0
            document.getElementById('upper-value')  // 1
        ];

        // Display the slider value and how far the handle moved
        // from the left edge of the slider.
        slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
            nodes[handle].innerHTML = '$' + values[handle];
        });
    }

    function initTopAttractionCarousel() {
        let prevIcon = '<img src="../assets/media/icons/blue-left-arrow.png">';
        let nextIcon = '<img src="../assets/media/icons/blue-right-arrow.png">';
        $('.static-carousel').owlCarousel({
            merge: true,
            margin: 16,
            dots: false,
            nav: true,
            navText: [
               prevIcon,
               nextIcon
            ],
            responsive: {
                0: {
                    items: 1.1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2.1
                },
                1024: {
                    items: 3.1
                },
                1200: {
                    items: 4
                }
            }
        });
    }

   
    function initSuperHotelCarousel() {
        $('.super-hotel-carousel').owlCarousel({
            merge: true,
            margin: 16,
            dots: false,
            nav: false,
            loop:true,
            autoplay: true,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1.1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2.1
                },
                1024: {
                    items: 3.1
                },
                1200: {
                    items: 3.2
                }
            }
        });
    }




    return {
        init: function () {
            //var drawerElement = document.querySelector("#kt_drawer_flight_view");
            //var drawer = KTDrawer.getInstance(drawerElement);
            //if (drawer) {
            //    drawer.show();
            //}

            initTabScroll();
            initContinueBtn();
            initDatePicker();
            initDatePicker1();
            initMyDatePicker();
            initAutoComplete();
            initGuestRatingSlider();
            initPriceRangeSlider();
            initTopAttractionCarousel();
            initSuperHotelCarousel();
            

        }
    };
}();

jQuery(document).ready(function () {
    $(document).off("click", ".btn-nightdropdown-mobile-popup-close").on("click", ".btn-nightdropdown-mobile-popup-close", function () {
        $($(this).attr("data-target")).dropdown("hide")
    });

    $("#toggle-btn").click(function(){
        $(".traveler").toggleClass('d-none');
        $('.review').toggleClass('d-block')
    });


    $(document).on("click", ".hotel-super-tab", function () {
        if ($(".hotel-super").hasClass('d-none')) {
            $(".hotel-super").removeClass('d-none');
            $(".hotel-super").addClass('d-block');
        } else {
            $(".hotel-super").addClass('d-block');
        }
    });

    KTPackage.init();   
});
document.addEventListener("DOMContentLoaded", function () {
    var elementsWithPath = document.querySelectorAll('[path]');
    elementsWithPath.forEach(function (element) {
        var path = element.getAttribute('path');
        fetch(path)
            .then(response => response.text())
            .then(content => {
                element.innerHTML = content;
                // hamburger drawer
                var hamburger = document.querySelector("#kt_drawer_hamburger_view");
                var scroll = new KTDrawer(hamburger);

            })
            .catch(error => console.error(error));
    });
});

// window.addEventListener('load', function() {
//     document.body.style.zoom = "85%";
// });