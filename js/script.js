$(document).ready(function () {

$('.b-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinity: true,
    autoplay: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: false,
    dots: true
});



$('.b-certificates-content > .row').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    variableWidth: false,
    arrows: true,
    dots: false,
    nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
    prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',  
    appendArrows: '.b-certificates-nav',   
    responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      adaptiveHeight: true,
      variableWidth: false,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$(".b-nav__wrap a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".b-menu ul li a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 830){
        $('.b-header').addClass('active');
     } else if(scrolledpx < 831){
      $('.b-header').removeClass('active');
     }

  });

$('.menu-icon').click(function(){
  $('.b-menu').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-menu ul li a").length) {
    $('.b-menu').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});

$('.menu-close').click(function(){
  $('.menu-icon').removeClass('active');
  $('.b-menu').removeClass('active');
});



$('.validate').each(function() {
    $(this).validate({

    rules: {
        name: {
            required: true
        },
        password: {
            required: true
        },
        rep_password: {
            required: true
        },                
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 10
        },
  check: {
    required: true
  }
    },
    messages: {
        name: {
            required: "Заполните ваше имя"
        },
        email: {
            required: "Электронная почта обязательна к заполнению",
            email: "Введите корректную электронную почту"
        },
        password: {
            required: "Электронная почта обязательна к заполнению",
            password: "Введите пароль"
        },
        rep_password: {
            required: "Электронная почта обязательна к заполнению",
            rep_password: "Введите пароль"
        },                
        phone: {
            required: "Ваш номер телефона обязателен к заполнению",
    minlength: $.validator.format( "В номере телефона должно быть 10 цифр." ),
        },
        check: {
            required: "Пожалуйста, поставьте галочку соглашения с нашей политикой конфиденциальности"
        }
    },
errorPlacement: function(error, input) {
  error.insertBefore(input);
}
});
$.extend( $.validator.messages, {
      required: "Это поле необходимо заполнить.",
      remote: "Пожалуйста, введите правильное значение.",
      email: "Пожалуйста, введите корректный адрес электронной почты.",
      url: "Пожалуйста, введите корректный URL.",
      date: "Пожалуйста, введите корректную дату.",
      dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
      number: "Пожалуйста, введите число.",
      digits: "Пожалуйста, вводите только цифры.",
      creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
      equalTo: "Пожалуйста, введите такое же значение ещё раз.",
      extension: "Пожалуйста, выберите файл с правильным расширением.",
      maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
      minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
      rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
      range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
      max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
      min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    });
});




 
// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(54.958762, 20.471604), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "lightness": "15"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "23"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "43"
            },
            {
                "lightness": "46"
            },
            {
                "gamma": 1
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "16"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#78ff00"
            },
            {
                "saturation": "22"
            },
            {
                "lightness": "50"
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "lightness": "-27"
            },
            {
                "weight": "0.76"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "49"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "-12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#0011ff"
            },
            {
                "saturation": "-84"
            },
            {
                "lightness": "59"
            },
            {
                "gamma": 1
            },
            {
                "weight": "0.50"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ff0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#009dff"
            },
            {
                "saturation": "-2"
            },
            {
                "lightness": "10"
            },
            {
                "gamma": 1
            }
        ]
    }
]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(54.958762, 20.471604),
        map: map,
        title: 'Snazzy!',
                icon: {
                    url: "images/map-ico.svg",
                    scaledSize: new google.maps.Size(40, 45),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                }      

    });

}






function moveMenu(){
  if ($(window).width() < 768) {
         $(function(){ 


          $('.b-phone').appendTo('.b-menu');
          $('.btn-callback').appendTo('.b-menu');

        
           
        })            
  } else{
         $(function(){ 

          $('.b-phone').appendTo('.b-phone-wrap');
          $('.btn-callback').appendTo('.btn-callback__wrap');

           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});
 




});



