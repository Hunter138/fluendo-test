/* Fluendo test - Ricard Verges Martinez */

$(document).ready(function()
{
  //Render all sections
  renderFluendoHeader();
  renderLongomatchHeader();
  renderProductVideo();
  renderProductInfo();
  renderProductFeatures();
  renderProductMobile();
  renderProductPlans();
  renderNewsletter();
  renderTestimonials();
  renderCertificate();
  renderFooter();
  renderSingInForm();
  
  //set mouse events and animations
  registerEvents();
});

renderFluendoHeader = function()
{
  var html =  "<div class='lt-row lt-100'>"
  + "<article class='lt-cell left lt-50'>"
	+ "<img src='img/fluendo.png' alt='Fluendo' width='75' />"
	+ "<nav>"
		+ "<a href='#'>Log IN</a>"
		+ "<a href='#'>Register</a>"
	+ "</nav>"
  + "</article>"
  + "<article class='lt-cell right lt-50'>"
	+ "<nav>"
    + "<a href='#'>Company</a>"
    + "<a href='#'>Carrers</a>"
    + "<a href='#'>Contact</a>"
    + "<a href='#'>Blog</a>"
	+ "<a href='#'><i class='fa-twitter fa-fw'></i></a>"
	+ "<a href='#'><i class='fa-linkedin-square fa-fw'></i></a>"
  + "</nav>"
  + "</article>";
  $('#fluendo-bar').append(html);	
}

renderLongomatchHeader = function()
{
  var html = "<div class='lt-row lt-100'>"
  + "<article class='lt-cell left lt-25'>"
  + "<img src='img/longomatch-logo-header.png' alt='LongoMatch' width='200' />"
  + "</article>"
  + "<article id='longomatch-bar-regular' class='lt-cell right lt-75'>"
  + "<nav>"
    + "<a href='#'>Products</a>"
    + "<a href='#'>Support</a>"
    + "<a href='#'>Blog</a>"
    + "<a href='#'>Downloads</a>"
	+ "<button id='signIn' class='lt-bg-green lt-txt-white'>SIGN UP</button>"
  + "</nav>"
  + "</article>"
  + "<article id='longomatch-bar-mobile' class='lt-cell right lt-75'>"
  + "<nav>"
    + "<i class='fa fa-bars fa-2x fa-fw'></i>"
  + "</nav>"
  + "</article>"  
  + "</div>";
  $('#longomatch-bar').append(html);
}

renderProductVideo = function()
{
	var html = "<div class='lt-row center lt-txt-white lt-100'>"
	  + "<article class='lt-cell lt-75'>"
		+ "<h2 class='lt-txt-shadow'>Start analysing your games today</h2>"
		+ "<h3 class='lt-txt-shadow'>The video analysis software that helps coaches, analysts and players.</h3>"
		+ "<h4 class='zoom class='lt-txt-shadow'><i class='fa fa-play-circle-o fa-fw' aria-hidden='true'></i> Watch our video</h4>"
	  + "</article>"
	$('#product-video').append(html);
}

renderProductInfo = function()
{
  var html = "<div class='lt-row center lt-100'>"
  + "<div class='lt-cell middle lt-75'><img class='mainProductImg' src='img/longomatch-home-video.png' alt='LongoMatch' /></div>"
  + "</div>"
  + "<div class='lt-row lt-100'>" 
	  + "<article class='lt-cell lt-33'>"
		  + "<img class='productImg' src='img/import.png' alt='Share'/>"
		  + "<h3>IMPORT GAME FOOTAGE</h3>"
		  + "<p>Capture video footage using a webcam, IP, HDMI or SDI camera or import it directly from your hard drive. LongoMatch is optimized to work with resolutions up to 4K. Review your live tagged events and share them with your team over WiFi.</p>"
	  + "</article>"
	  + "<article class='lt-cell lt-33'>"
		  + "<img class='productImg' src='img/analyze.png' alt='Share'/>"
		  + "<h3>ANALYZE, DRAW OVER EVENTS AND USE UP TO 8 CAMERAS</h3>"
		  + "<p>Adapt the analysis dashboard to your sport. Add comments and drawings to your events and zoom into them for a detailed view. Our multi-camera approach enables you to watch a play from up to 8 different angles.</p>"
	  + "</article>"
	  + "<article class='lt-cell lt-33'>"
		  + "<img class='productImg' src='img/share.png' alt='Share'/>"
		  + "<h3>SHARE YOUR ANALYSIS WITH YOUR TEAM</h3>"
		  + "<p>Create playlists and presentations from one or multiple matches, export them and share them with your team or online community. You can also create advanced statistical reports and export them to an Excel file for a more personalized analysis.</p>"
	  + "</article>" 
  + "</div>";  
  $('#product-info').append(html);
}

renderProductFeatures = function()
{
  var html = "<div class='lt-row lt-100'>" 
	  + "<article class='lt-cell lt-50'>"
		  + "<img class='featuresImg' src='img/longomatch-multideporte.png' alt='Share'/>"
		  + "<h2>Multi-Sport</h2>"
		  + "<p>Use LongoMatch to analyze a multitude of team sports.</p>"
	  + "</article>"
	  + "<article class='lt-cell lt-50'>"
		  + "<img class='featuresImg' src='img/longomatch-multiplataforma.png' alt='Share'/>"
		  + "<h2>Multi-Platform</h2>"
		  + "<p>LongoMatch can be installed on multiple operating systems and its files are cross-platform compatible.</p>"
	  + "</article>"
  + "</div>";  
  $('#product-features').append(html);
}

renderProductMobile = function()
{
var html = "<div class='lt-row lt-100'>" 
	+ "<article class='lt-cell left lt-50'>"
		+ "<h2>We've just released LongoMatch Mobile!</h2>"
		+ "<p>Totally independent from LongoMatch Desktop</p>"
		+ "<p>AVAILABLE FOR <i class='fa fa-apple fa-fw'></i><i class='fa fa-android fa-fw'></i></p>"
		+ "<button class='lt-bg-white lt-txt-green' type='button'>READ MODE</button>"
	+ "</article>"
	+ "<article class='lt-cell left lt-50'>"
		+ "<img src='img/mobile.png' width='400' />"
	+ "</article>"			  
  + "</div>";
  $('#product-mobile').append(html);
}

renderProductPlans = function()
{
  var html = "<div class='lt-row stretch center lt-100'>" 
	  + "<div class='lt-cell middle lt-100'><h2>Compare our plans</h2></div>"
	  + "</div>"
	  + "<div class='lt-row stretch center lt-100'>"
	  + "<article class='lt-cell start stretch lt-33'>"
		  + "<img class='planImg' src='img/basic.png' alt='Share'/>"
		  + "<h4>The essentials of video analysis totally free of cost</h4>"
		  + "<p>Limited projects, teams, dashboards and events. Live analysis with a USB camera.</p>"
		  + "<p class='price'>FREE</p>"
		  + "<p class='license-desc'>FREE 15-DAY TRIAL OF LONGOMATCH PRO</p>"
		  + "<button class='lt-bg-white lt-txt-green' type='button'>Download</button>"
	  + "</article>"
	  + "<article class='lt-cell start stretch lt-33'>"
		  + "<img class='planImg' src='img/starter.png' alt='Share'/>"
		  + "<h4>Powerful video analysis tools at an affordable price</h4>"
		  + "<p>Unlimited projects, teams, dashboards and events. Live analysis with a multiple types of cameras, database manager and more.</p>"
		  + "<p class='price'>$150 MONTH</p>"
		  + "<p class='license-desc'>FREE 15-DAY TRIAL OF LONGOMATCH PRO</p>"
		  + "<button class='lt-bg-green lt-txt-white' type='button'>BUY</button>"
	  + "</article>"	  
  + "</div>";  
  $('#product-plans').append(html);
}

renderNewsletter = function()
{
	var html = "<div class='lt-row center lt-100'>"
	+ "<article class='lt-cell lt-75'>"
	+ "<h2 class='lt-txt-white lt-txt-shadow'>Suscribe to our newsletter</h2>"
	+ "<input id='name' name='name' type='text' placeholder='Name' />"
	+ "<input id='surname' name='surname' type='text' placeholder='Surname' />"
	+ "<input id='email' name='email' type='email' placeholder='Email' />"
	+ "<button class='lt-bg-green lt-txt-white' type='button'>SUSCRIBE</button>"
	+ "</article>"
	+ "</div>";
	$('#newsletter').append(html);
}

renderTestimonials = function()
{
	var html = "<div class='lt-row lt-100'>" 
		+ "<div class='lt-cell left lt-100'><h2>Testimonials</h2><p>LongoMatch has helped professionals athletes and teams from around the world</p></div>"
	  + "</div>"
	  + "<div class='lt-row stretch center lt-100'>"
	  + "<article class='lt-cell left lt-75'>"
		+ '<blockquote>"LongoMatch can help not only in improving performance for our teams and players, but it can also to help our coaches become more efficient in their roles. It is a win-win for the long-term development of not only our players, but our coaches, as well"</blockquote>'
		+ "<h3 class='lt-txt-green'>Emmanuel Amunike 'THE ROCK'</h3>"
		+ "<p>FCB Legend</p>"
	  + "</article>"
	  + "<article class='lt-cell start lt-25'>"
		+ "<img class='amunike-testimonal' src='img/amunike-2.jpg' />"
	  + "</article>"	  
	  + "</div>";
  $('#testimonials').append(html);
}

renderCertificate = function()
{
  var html = "<div class='lt-row lt-100'>" 
	  + "<article class='lt-cell lt-txt-white lt-75'>"
		  + "<h2>Become a LongoMatch Certified Professional Online!</h2>"
		  + "<p>Complete our online certification courses and learn how to boost your team's performance with the help of video analysis.</p>"
		  + "<button class='lt-bg-white lt-txt-green' type='button'>SIGN UP HERE</button>"
	  + "</article>"
  + "</div>";
  $('#certificate').append(html);
}

renderFooter = function()
{
	var html = "<div class='lt-row lt-100'>" 
	  + "<article class='lt-cell middle lt-txt-white lt-25'>"
	  + "<img class='darkLongo' src='img/longomatch-logo-footer.png' width='200' alt='LongoMatch'/>"
	  + "</article>"
	  + "<article class='lt-cell right lt-txt-white lt-75'>"
		+ "<nav>"
			+ "<a href='#'>Products</a>"
			+ "<a href='#'>Support</a>"
			+ "<a href='#'>Blog</a>"
			+ "<a href='#'>Downloads</a>"
		+ "</nav>"
	  + "</article>"	  	  
	+ "</div>";
	$('#nav-footer').append(html);
	
	var html2 = "<nav id='about' class='lt-txt-gray'>"
	+ "<span>Copyright © 2017 · All Rights Reserved</span>"
	+ "<span> · </span>"
    + "<a href='#'>Privacy policy</a>"
	+ "<span> · </span>"
    + "<a href='#'>Terms & conditions</a>"
    + "<span> · </span>"
	+ "<a href='#'>Cookies policy</a>"
	+ "<span> · </span>"    
	+ "<a href='#'>End User License Agreement</a>"
  + "</nav>";
  $('#info-footer').append(html2);
}

renderSingInForm = function()
{
	var html = "<div id='dialog-message' class='lt-row lt-100'>"
	+ '<form id="rendered-form">'
	+ '<div class="rendered-form">'
	  + '<div class="fb-text form-group">'
	  + '</div>'	
	  + '<div class="fb-text form-group field-email">'
	    + '<label for="email" class="fb-text-label">Email<span class="fb-required">*</span></label>'
	    + '<input type="email" placeholder="Email" name="email" id="email" required="required" aria-required="true">'
	  + '</div>'
	+ '<div class="fb-date form-group field-date-birth">'
	  + '<label for="date-birth" class="fb-date-label">Date of Birth<span class="fb-required">*</span></label>'
	  + '<input type="date" name="date-birth" value="17/04/1982" id="date-birth" required="required" aria-required="true">'
	+ '</div>'
	+ '<div class="fb-select form-group field-country">'
	  + '<label for="country" class="fb-select-label">Country<span class="fb-required">*</span></label>'
	  + '<select name="country" id="country" required="required" aria-required="true">'
	    + '<option disabled="null" selected="null">Country</option>'
	    + '<option value="Spain" id="country-0">Spain</option>'
	    + '<option value="England" id="country-1">England</option>'
 	    + '<option value="France" id="country-2">France</option>'
	    + '<option value="Germany" id="country-3">Germany</option>'
	  + '</select>'
	+ '</div>'
	+ '<div class="fb-select form-group field-sports">'
	+ '<label for="sports" class="fb-select-label">Sports<span class="fb-required">*</span></label>'
	+ '<select name="sports" id="sports" required="required" aria-required="true">'
	  + '<option disabled="null" selected="null">Sports</option>'
	  + '<option value="Soccer" id="sports-0">Soccer</option>'
	  + '<option value="Basketball" id="sports-1">Basketball</option>'
	  + '<option value="Football" id="sports-2">Football</option>'
	  + '<option value="Handball" id="sports-3">Handball</option>'
	  + '<option value="Tennis" id="sports-4">Tennis</option>'
	  + '<option value="Hockey" id="sports-5">Hockey</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="fb-select form-group field-role">'
	+ '<label for="role" class="fb-select-label">Role<span class="fb-required">*</span></label>'
	+ '<select name="role" id="role" required="required" aria-required="true">'
	  + '<option disabled="null" selected="null">Role</option>'
	  + '<option value="Player" id="role-0">Player</option>'
	  + '<option value="Coaching" id="role-1">Coaching</option>'
	  + '<option value="The Observer" id="role-2">The Observer</option>'
	+ '</select>'
	+ '</div>'
	  + '<div class="fb-text form-group">'
	  + '</div>'	
	+ '<div class="fb-button form-group field-btn-submit" style="text-align: center">'
	  + '<button type="submit" class="lt-bg-green lt-txt-white btn btn-default" name="btn-submit" style="default" id="btn-submit">Send</button>'
	+ '</div>'		
	+ '</div>'
	+ '</form>'
	+ '</div>';
	
	return html;
}


registerEvents = function()
{
  // fix the header if the scroll is equal or higher than 50px
  $(document).off('scroll').on('scroll',function()
  {
    if($(document).scrollTop() >= 50)
      $('#longomatch-bar').css({'position':'fixed', 'top': '0px'});
    else if ($(document).scrollTop() == 0)
      $('#longomatch-bar').removeAttr('style');
      
  });
  
  $(document).find('#signIn').off('click').on('click',function()
  {
	var form = renderSingInForm();
	$(form).dialog(
	{
      height: 450,
      width: 500,
      modal: true
    });  
  });
}
