 'use strict';

angular.module('core').directive('parallax', function () {
    return {
      restrict: 'A',
      link: function parallax(scope, element, attrs) {

        parallax();

        $(window).scroll(function(e) {
            parallax();
        });

        function parallax(){
          var plxBackground = $("#js-parallax-background");
          var plxWindow = $("#js-parallax-window");

          var plxWindowTopToPageTop = $(plxWindow).offset().top;
          var windowTopToPageTop = $(window).scrollTop();
          var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

          var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
          var windowInnerHeight = window.innerHeight;
          var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
          var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
          var plxSpeed = 0.35;

          plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
        }

      }
    };
}).directive('header', function() {
    return {
      restrict: 'E',
      link: function headroom(scope, element, attrs){
        var myElement = document.querySelector("header");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init();

        var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
        $('#js-centered-navigation-menu').removeClass("show");
        
        menuToggle.on('click', function(e) {
          e.preventDefault();
          $('#js-centered-navigation-menu').slideToggle(function(){
            if($('#js-centered-navigation-menu').is(':hidden')) {
              $('#js-centered-navigation-menu').removeAttr('style');
            }
          });
        });
      }
    }
});
