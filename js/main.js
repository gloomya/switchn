window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js');
  }
}

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
// Dark mode switcher
	$(".switch #lv-btn").on('change',function() {
		if(this.checked) {
			$('body').addClass('dark-version');
		}else{
			$('body').removeClass('dark-version');
		}
    });
//Contact form
$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var email = $("#subject").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "contact.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#contactForm" ).addClass( "hidden" );
    $( "#msg" ).removeClass( "hidden" );
    
}

// Particles 
// var mousePos = {};

//  function getRandomInt(min, max) {
//    return Math.round(Math.random() * (max - min + 1)) + min;
//  }
  
//   $('#hero').mousemove(function(e) {
//     mousePos.x = e.pageX;
//     mousePos.y = e.pageY;
//   });
  
//   $('#hero').mouseleave(function(e) {
//     mousePos.x = -1;
//     mousePos.y = -1;
//   });
  
//   var draw = setInterval(function(){
//     if(mousePos.x > 0 && mousePos.y > 0){
      
//       var range = 15;
      
//       var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
//       var sizeInt = getRandomInt(10, 30);
//       size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
//       var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
//       var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

//       var style = left+top+color+size;
//       $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
//     }
//   }, 60);

});


