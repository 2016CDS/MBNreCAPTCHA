// Essential Keys for the reCaptcha integration

// 6LcJJy4dAAAAAIN2Kp3gmNYBlFyKjvIbI094mbeQ
// 6LcJJy4dAAAAAKVb6lBVyeyXyNEtyX1PfAS7ET3u
// 

jQuery(document).ready(function($){

	var api_site_key = '6LcJJy4dAAAAAIN2Kp3gmNYBlFyKjvIbI094mbeQ';
	var api_secrete_key = '6LcJJy4dAAAAAKVb6lBVyeyXyNEtyX1PfAS7ET3u';
	
	console.log(api_site_key);
	console.log(api_secrete_key);
	grecaptcha.ready(function (){
		
	});// render the captcha code 
	
});




// Resize reCAPTCHA to fit width of container
// Since it has a fixed width, we're scaling
// using CSS3 transforms
// ------------------------------------------
// captchaScale = containerWidth / elementWidth

function scaleCaptcha(elementWidth) {
  // Width of the reCAPTCHA element, in pixels
  var reCaptchaWidth = 304;
  // Get the containing element's width
	var containerWidth = $('.justwork').width();
  
  // Only scale the reCAPTCHA if it won't fit
  // inside the container
  if(reCaptchaWidth > containerWidth) {
    // Calculate the scale
    var captchaScale = containerWidth / reCaptchaWidth;
    // Apply the transformation
    $('.g-recaptcha').css({
      'transform':'scale('+captchaScale+')'
    });
  }
}

$(function() { 
 
  // Initialize scaling
  scaleCaptcha();
  
  // Update scaling on window resize
  // Uses jQuery throttle plugin to limit strain on the browser
  $(window).resize( $.throttle( 100, scaleCaptcha ) );
  
});