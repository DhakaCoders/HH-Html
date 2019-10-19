(function($) {

// fixed-header

window.onscroll = function(){
  scrollFunction()
};
function scrollFunction(){
  var windowWidth = $(window).width();  
  if(document.body.scrollTop>600||document.documentElement.scrollTop>600){
    $(".hh-fxd-hdr").css({'top':'0','z-index':'99'});

  }else{
    $(".hh-fxd-hdr").css('top', '-110px');
  }
}


})(jQuery);





