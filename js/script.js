$(document).ready(function () {

$('.b-card-next').on("click", function() {
    $('.b-card-slider__big').slick("slickNext"); 
})
$('.b-card-prev').on("click", function() {
    $('.b-card-slider__big').slick("slickPrev"); 
})

$('.b-card-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  asNavFor: '.b-card-slider__pager__wrap',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
$('.b-card-slider__pager__wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  asNavFor: '.b-card-slider__big',
  focusOnSelect: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        vertical: false,
        verticalSwiping: false,        
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
        slidesToShow: 2,
        vertical: false,
        verticalSwiping: false,        
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.b-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinity: true,

    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: false,
    dots: true
});


$('.b-course-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    infinity: true,
    dots: false,
    nextArrow: '<button class="b-arrow b-arrow__next">›</button>',
    prevArrow: '<button class="b-arrow b-arrow__prev">‹</button>',    
    responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      centerMode: false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      centerMode: false,
      slidesToScroll: 1
    }
  } 
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-product-slider > .row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    variableWidth: false,
    arrows: true,
    dots: false,
    nextArrow: '<button class="b-arrow b-arrow__next">›</button>',
    prevArrow: '<button class="b-arrow b-arrow__prev">‹</button>',    
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
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 485,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      centerMode: false,
      slidesToScroll: 1
    }
  }   
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

// Price-slider

jQuery("#slider").slider({
  min: 0,
  max: 1000,
  values: [300,800],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minCost").val(value1);
  }
  jQuery("#slider").slider("values",0,value1);  
});

  
jQuery("input#maxCost").change(function(){
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();
  
  if (value2 > 150000) { value2 = 150000; jQuery("input#maxCost").val(150000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxCost").val(value2);
  }
  jQuery("#slider").slider("values",1,value2);
});

// End price-slider



$('.b-filter-top').click(function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle('active');
});


$('.menu-icon').click(function(){
  $('.b-nav').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-nav ul li a").length) {
    $('.b-nav').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});

 

$('.b-aside-xs .b-content-top').click(function(){
  $('.b-aside-wrapper').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".b-aside-xs .b-content-top , .b-aside-wrapper").length) {
    $('.b-aside-wrapper').removeClass('active');
    $('.b-aside-xs .b-content-top').removeClass('active');
  }
  e.stopPropagation();
});






});



