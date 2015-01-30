$(function() {
  var topoffset = 44;

  var isTouch = 'ontouchstart' in document.documentElement;

$(function() {

//window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize

});


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset + 1;
    $('nav li a').removeClass('active');

    if (windowpos > $('#theproblem').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#theproblem"]').addClass('active');
    } //windowpos

    if (windowpos > $('#thesolution').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#thesolution"]').addClass('active');
    } //windowpos

    if (windowpos > $('#theplan').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#theplan"]').addClass('active');
    } //windowpos

    if (windowpos > $('#leadership').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#leadership"]').addClass('active');
    } //windowpos

    if (windowpos > $('#references').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#references"]').addClass('active');
    } //windowpos

  }); //window scroll

  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);


//fade in Elevate intro
    var titleOrigin = {
      opacity: 0,
      scale: 0,
    }

    var titleDest = {
      repeat: 0,
      yoyo: false,
      bottom: 0,
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }
    
    var titleTween = TweenMax.staggerFrom(
      $("#welcome").children(),
      0.5, titleOrigin,0.25);

    var pin = new ScrollScene({
      triggerElement: '#welcome',
      offset: -topoffset-100,
      duration: 100
    }).setTween(titleTween)
      .addTo(controller);

//fade student photo
/*var photoTween = TweenMax.staggerFrom($('#students'),1,{autoAlpha:0},0);

var photoScene = ScrollScene({
    triggerElement: '#students'
    }).setTween(photoTween)
      .addTo(controller);

*/

//animate strong text
$('strong').each(function(){
var currentStrong = $(this);


var tweenStrong = new TimelineMax()
.to(currentStrong, 0.25, {css: {fontWeight: 400, textShadow:"0px 0px 20px rgba(18, 112, 200, 1)"}});

var scene = new ScrollScene({triggerElement: currentStrong, offset: -$(window).height()*0.7})
.setTween(tweenStrong)
.addTo(controller);

});//animate strong text


}); //on load

//display solution lists

$(document).ready(function(){
  $("#toggleafford").click(function(){
    $("#affordlist").toggle("slow");
    if (document.getElementById("toggleafford").innerHTML == "Less") {
        document.getElementById("toggleafford").innerHTML = "More...";
    } else {
      document.getElementById("toggleafford").innerHTML = "Less";
    }
  });
});

$(document).ready(function(){
  $("#togglestructure").click(function(){
    $("#structurelist").toggle("slow");
    if (document.getElementById("togglestructure").innerHTML == "Less") {
        document.getElementById("togglestructure").innerHTML = "More...";
    } else {
      document.getElementById("togglestructure").innerHTML = "Less";
    }
  });
});

$(document).ready(function(){
  $("#togglecurriculum").click(function(){
    $("#curriculumlist").toggle("slow");
    if (document.getElementById("togglecurriculum").innerHTML == "Less") {
        document.getElementById("togglecurriculum").innerHTML = "More...";
    } else {
      document.getElementById("togglecurriculum").innerHTML = "Less";
    }
  });
});

$(document).ready(function(){
  $("#toggleinstruction").click(function(){
    $("#instructionlist").toggle("slow");
    if (document.getElementById("toggleinstruction").innerHTML == "Less") {
        document.getElementById("toggleinstruction").innerHTML = "More...";
    } else {
      document.getElementById("toggleinstruction").innerHTML = "Less";
    }
  });
});

$(document).ready(function(){
  $("#toggleservices").click(function(){
    $("#serviceslist").toggle("slow");
    if (document.getElementById("toggleservices").innerHTML == "Less") {
        document.getElementById("toggleservices").innerHTML = "More...";
    } else {
      document.getElementById("toggleservices").innerHTML = "Less";
    }
  });
});

//play audio
$(document).ready(function(){
  var obama = $('#obama');
  $("#player").click(function(){
    if (!obama[0].paused){
      obama[0].pause();           
      $("#player").attr("src","images/misc/play.png");
    }
    else {
      obama[0].play();           
      $("#player").attr("src","images/misc/pause.png");
    }
  });
});


//s page loader while page loads
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

