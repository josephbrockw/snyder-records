$(document).ready(function() {

  var $window = $(window);

  function checkWidth() {
    var windowSize = $window.width()

    if(windowSize < 1060) {
      $(".dropdown").addClass("hidden");
    } else {
    }
  }
  $window.resize(checkWidth())
  // Dropdown Menu for mobile
  $(".menu-icon").click(function(){

    if( $(".dropdown").is(":hidden")) {
      $(".dropdown").slideDown();
      $(".menu-icon").attr("src", "img/close-menu.png")
    } else {
      $(".dropdown").slideUp();
      $(".menu-icon").attr("src", "img/menu-icon.png");
    }


  });



  $num = $('.my-card').length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
  }

  $('.my-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);

    if ($(this).hasClass('next')) {
      $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
  });


  // Keyboard nav
  $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
      $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
      $('.active').next().trigger('click');
    }
  });

  $('.left-arrow').click(function() {
    $('.active').prev().trigger('click');
  });

  $('.right-arrow').click(function() {
    $('.active').next().trigger('click');
  });

    // Select List functionality
  $(".select-input dt").click(function() {
    if( $(".select-input dd ul").is(":hidden")) {
      $(".select-input dd ul").slideDown();
    } else {
      $(".select-input dd ul").slideUp();

    }
  });

  $(".select-input dd ul li a").click(function() {
      var text = $(this).html();
      $(".select-input dt").html(text);
      $(".select-input dd ul").hide();
  });

  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("select-input"))
          $(".select-input dd ul").hide();
  });

});
