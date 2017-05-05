$(document).ready(function () {
   
	$.get('https://www.algaecal.com/wp-json/acf/v2/options?callback=?', success)
	
	function success( data ) {
		/* === Task: Tap to talk 1-800-820-0184 should trigger a phone call. === */
    	var phoneNumber = data.acf.default_phone_number;
    	$('#tapToTalk').attr('href','tel:' + phoneNumber).find('span').text(phoneNumber);
		
		/* === Task: show the message ‘Speak to Our Bone Specialist’ if and only if the current time is within working hours === */
		if( showMessage(data.acf.office_hours) === true)
			$('#speakToMessage').css('visibility','visible');
		
		/* === Task: The link in the guarantee should trigger a bootstrap modal... === */
		buildModal( data.acf['7yr_title'], data.acf['7yr_full_copy'] );
	}
	
	function showMessage(hoursArray){

		if(typeof moment != 'function' || hoursArray.length == 0)
			return false; 
			
		var pstTime = moment().tz("America/Los_Angeles");
		var compare = {
				day : pstTime.day(),
				time : pstTime.hours() * 100 + pstTime.minutes()
			};
		
		var operatingHours = getOperatingHours(hoursArray, compare.day);
		
		return (compare.time >= Number(operatingHours.starting_time) && compare.time < Number(operatingHours.closing_time)) ? true : false; 
		
		function getOperatingHours(searchArray, searchKey){
		    
		    for (var i = 0; i < searchArray.length; i++) {
			   if (searchArray[i].hasOwnProperty('day') && searchArray[i].day == searchKey ) 
				   return searchArray[i];
		    }
		      
		    return null; 
		}
	}
	
	/* === Task: Make the three package pricing bundle boxes hidden until the video hits the 2:13 second === */
	
	window._wq = window._wq || [];
	_wq.push({ id: 'cecdwaq3dz', onReady: function(video) {
	
			video.bind('timechange', function(t) {
				if (t >= 133) 
  					$('.products').addClass('timed-display');
			});
	}});
	//handle case where bundles may be hidden due to video playback state
	$('#buyNow').on('click', function(e) {
		if( !$('.products').hasClass('timed-display') );
			$('.products').addClass('timed-display');
	})
	
	
	function buildModal(header, copy) {
		var html;
		
		html = '<div class="modal-header">';
		html += '<button type="button" data-dismiss="modal" aria-label="close"><span area-hidden="true">x</span></button>';
		html += '<h1 class="modal-title">' + header + '</h1></div>';
		html += '<div class="modal-body">' + copy + '</div>';
		
		$('.modal-content').html(html);
	}
	  
});