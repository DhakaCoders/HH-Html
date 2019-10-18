(function($) {

//fixed header

//responsive menu

var windowWidth = $(window).width();
if (windowWidth <= 991) {
  $('.header .opener-inner').on('click', function(){
    $(this).toggleClass('menu-expend').parent().toggleClass('hme');
    $('.header nav.hdr-nav > ul').slideToggle(300);
    // $(this).parent().siblings('.toggle-menu-wrap').slideToggle(500);
  });
  $('.header nav.hdr-nav li.menu-item-has-children > a ').on('click', function(){
    $(this).toggleClass('sub-menu-expend');
    $('.header nav.hdr-nav li.menu-item-has-children > ul.sub-menu').slideToggle(300);
  });

}


$( "li.menu-item-has-children > a" ).click(function( e) {
e.preventDefault();

});
 


window.onscroll = function(){
  scrollFunction()
};
function scrollFunction(){
  var windowWidth = $(window).width();  
  if(document.body.scrollTop>600||document.documentElement.scrollTop>600){
    $("#fdg-fxd-hdr").css({'top':'0','z-index':'99'});

  }else{
    $("#fdg-fxd-hdr").css('top', '-110px');
    if (windowWidth <= 991) {
      $('#fdg-fxd-hdr .opener-inner').removeClass('menu-expend');
      $('#fdg-fxd-hdr nav.hdr-nav > ul').slideUp(500);
    }
  }
}



var windowWidth = $(window).width();
if (windowWidth <= 991) {
  $('#fdg-fxd-hdr .opener-inner').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('#fdg-fxd-hdr nav.hdr-nav > ul').slideToggle(500);
  });
  $('#fdg-fxd-hdr  nav.hdr-nav li.menu-item-has-children > a ').on('click', function(){
    $(this).toggleClass('sub-menu-expend');
    $('#fdg-fxd-hdr nav.hdr-nav li.menu-item-has-children > ul.sub-menu').slideToggle(300);
  });

}




//banner animation

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.animate-banner').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});



/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
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
}



//google-map

var styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
]

if( $('#mapId').length ){
  var latitude = $('#mapId').data('latitude');
  var longitude = $('#mapId').data('longitude');

  var myCenter= new google.maps.LatLng(latitude,  longitude);
  function initialize(){
      var mapProp = {
        center:myCenter,

        mapTypeControl:false,
        scrollwheel: false,

        zoomControl: false,
        disableDefaultUI: true,
        zoom:17,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles : styles
        };

      var map= new google.maps.Map(document.getElementById('mapId'),mapProp);

      var marker= new google.maps.Marker({
        position:myCenter,
        icon: 'map-marker.png'
        });
      marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}

if( $('#mapId2').length ){
  var latitude = $('#mapId2').data('latitude');
  var longitude = $('#mapId2').data('longitude');

  var myCenter= new google.maps.LatLng(latitude,  longitude);
  function initialize(){
      var mapProp = {
        center:myCenter,

        mapTypeControl:false,
        scrollwheel: false,

        zoomControl: false,
        disableDefaultUI: true,
        zoom:17,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles : styles
        };

      var map= new google.maps.Map(document.getElementById('mapId2'),mapProp);

      var marker= new google.maps.Marker({
        position:myCenter,
        icon: 'map-marker.png'
        });
      marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}



if( $('#g-mapId').length ){
  var latitude = $('#g-mapId').data('latitude');
  var longitude = $('#g-mapId').data('longitude');

  var myCenter= new google.maps.LatLng(latitude,  longitude);
  function initialize(){
      var mapProp = {
        center:myCenter,

        mapTypeControl:false,
        scrollwheel: false,

        zoomControl: false,
        disableDefaultUI: true,
        zoom:17,
        streetViewControl: false,
        rotateControl: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles : styles
        };

      var map= new google.maps.Map(document.getElementById('g-mapId'),mapProp);

      var marker= new google.maps.Marker({
        position:myCenter,
        icon: 'map-marker.png'
        });
      marker.setMap(map);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}


//masonry
if (windowWidth >= 991) {
    if( $('#macy-container').length ){
        var masonry = new Macy({
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 1,
            margin: {
                y: 27,
                x: '2%',
            },
            breakAt: {
                1200: 3,
                940: 3,
                576: 3,
                400: 2
            },
        });
    }
}

if (windowWidth <= 990) {
    if( $('#macy-container').length ){
        var masonry = new Macy({
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 1,
            margin: {
                y: 15,
                x: '3%',
            },
            breakAt: {
                1200: 3,
                940: 3,
                576: 3,
                400: 2
            },
        });
    }
}


//calendar
if($('#calendar').length){
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid', 'list', 'interaction' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      defaultDate: '2019-07-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2019-07-01',
        },
        {
          title: 'Long Event',
          start: '2019-07-07',
          end: '2019-07-10'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2019-07-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2019-07-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2019-07-03',
          end: '2019-07-05'
        },
        {
          title: 'Meeting',
          start: '2019-07-04T10:30:00'
        },
        {
          title: 'Lunch',
          start: '2019-07-04T12:00:00'
        },
        {
          title: 'Happy Hour',
          start: '2019-07-04T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2019-07-04T20:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-07-04T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2019-07-05T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-07-28'
        }
      ]
    });

    calendar.render();
  });
}

$(".academy-dropdowns li a").click(function(e) {
    e.preventDefault();
    var goto = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(goto).offset().top - 72
    }, 800);
});


// Responsive on 767px

if (windowWidth >= 768) {
    if( $('#sidebar').length ){
      $('#sidebar').stickySidebar({
          topSpacing: 80,
          bottomSpacing: 60
      });
    }
}

//wow 

  new WOW().init();



if( $('.initial-value').length ){
  $('.initial-value').on('click', function(e){
    e.preventDefault();

    $("#idofselectpickar, #idofselectpickar2").selectpicker("refresh");

  });

}













var image = document.getElementsByClassName('thumbnail-img');
new simpleParallax(image, {
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});









})(jQuery);









