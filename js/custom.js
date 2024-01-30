// Aos_animation
AOS.init({});
$(document).ready(function(){
$('.home_slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});
});
// Slick_slider

    $('.slider__outter').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                }
              },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

    // $('.slider-for').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   fade: true,
    //   asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //   slidesToShow: 5,
    //   slidesToScroll: 5,
    //   asNavFor: '.slider-for',
    //   dots: false,
    //   infinite: true,
    //   rows: 2,
    // });

    // $('.flexslider').flexslider({
    //   animation: "slide",
    //   controlNav: "thumbnails",
    //   animationLoop: false,
    //   itemWidth: 216,
    //   itemMargin: 5
    // });

  /** General Declartion */
var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context, u) {
  pos = pos || context.position;
  value = value || context.value;
  unit = u.attr("unit");
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value + " " + unit;
  }
}



/** Calculation for W-Power Loan Start */

/** Declaration of Var */
var wpl_la = 1412205;
var wpl_ec = 30;
var wpl_d = 12;
var wpl_cal = 2202469;
var wpl_pa = 21;

/** Rang Slider Functionality */

/** Range One */
$('#wpl_range').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#wpl_range'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#wpl_range'));
  }
});

$('#wpl_range').on('change', function () {
  wpl_la = parseInt($('#wpl_range').val());
  wpl_ec = parseInt($('#wpl_range1').val());
  wpl_d = parseInt($('#wpl_range2').val());
  wpl_setthevalues(wpl_ec, wpl_la, wpl_d, wpl_pa);
});

/** Range Two */
$('#wpl_range1').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#wpl_range1'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#wpl_range1'));
  }
});

$('#wpl_range1').on('change', function () {
  wpl_la = parseInt($('#wpl_range').val());
  wpl_ec = parseInt($('#wpl_range1').val());
  wpl_d = parseInt($('#wpl_range2').val());
  wpl_setthevalues(wpl_ec, wpl_la, wpl_d, wpl_pa);
});

/** Range Three */
$('#wpl_range2').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#wpl_range2'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#wpl_range2'));
  }
});

$('#wpl_range2').on('change', function () {
  wpl_la = parseInt($('#wpl_range').val());
  wpl_ec = parseInt($('#wpl_range1').val());
  wpl_d = parseInt($('#wpl_range2').val());
  wpl_setthevalues(wpl_ec, wpl_la, wpl_d, wpl_pa);
});

/** Loan Calculation Functionality */
/** General Declartion */
var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context, u) {
  pos = pos || context.position;
  value = value || context.value;
  unit = u.attr("unit");
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var tempPosition = pos + context.grabPos;
  var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value + " " + unit;
  }
}



/** Calculation for Milage Loan Start */

/** Declaration of Var */
var ml_la = 1412205;
var ml_ec = 30;
var ml_d = 12;
var ml_cal = 2202469;
var ml_pa = 18;

/** Rang Slider Functionality */

/** Range One */
$('#ml_range').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#ml_range'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#ml_range'));
  }
});

$('#ml_range').on('change', function () {
  ml_la = parseInt($('#ml_range').val());
  ml_ec = parseInt($('#ml_range1').val());
  ml_d = parseInt($('#ml_range2').val());
  ml_setthevalues(ml_ec, ml_la, ml_d, ml_pa);
});

/** Range Two */
$('#ml_range1').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#ml_range1'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#ml_range1'));
  }
});

$('#ml_range1').on('change', function () {
  ml_la = parseInt($('#ml_range').val());
  ml_ec = parseInt($('#ml_range1').val());
  ml_d = parseInt($('#ml_range2').val());
  ml_setthevalues(ml_ec, ml_la, ml_d, ml_pa);
});

/** Range Three */
$('#ml_range2').rangeslider({
  polyfill: false,
  onInit: function () {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this, $('#ml_range2'));
  },
  onSlide: function (pos, value) {
    updateValueBubble(pos, value, this, $('#ml_range2'));
  }
});

$('#ml_range2').on('change', function () {
  ml_la = parseInt($('#ml_range').val());
  ml_ec = parseInt($('#ml_range1').val());
  ml_d = parseInt($('#ml_range2').val());
  ml_setthevalues(ml_ec, ml_la, ml_d, ml_pa);
});

/** Loan Calculation Functionality */
$(document).ready(function () {
  $('#ml_rcal').click(function (e) {
    e.preventDefault();
    ml_la = parseInt($('#ml_range').val());
    ml_ec = parseInt($('#ml_range1').val());
    ml_d = parseInt($('#ml_range2').val());
    ml_setthevalues(ml_ec, ml_la, ml_d);
  });
});

function ml_setthevalues(ec, la, d, pa) {
  // cal = la + (((la * ec) / 100) * d);
  cal = (la - (((la * ec) / 100)));
  cal = (cal + (((cal * pa) / 100)));
  cal = cal / d;
  $('#ml_vla').html("N" + la.toLocaleString());
  $('#ml_vec').html(ec + "%");
  $('#ml_vd').html(d + " Months");
  $('#ml_vcal').html("N" + parseInt(cal).toLocaleString());
}

/** Calculation for Milage Loan End */
// hamburger js start
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});