$(document).ready(function() {

// One-Page navigation

    $('#navbarSupportedContent').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

// Enable WOW animation
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();
});