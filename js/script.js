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
      slidesToShow: 1,
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



