$(document).ready(function () {
   
	$.ajax({
		method:'GET',
		url: 'https://www.algaecal.com/wp-json/acf/v2/options?callback=?',
		success: restSuccess,
		error: restFailure
	});
	
	function restFailure(){
		tapToTalk();
		buildModal();
	}
	
	function restSuccess( data ) {
		
		tapToTalk(data.acf.default_phone_number);
    	
		speakToSpecialist(data.acf.office_hours);
		
		buildModal( { title : data.acf['7yr_title'], copy : data.acf['7yr_full_copy'] } );
	}
	
	function tapToTalk(phone){
		/* === Tap to talk 1-800-820-0184 should trigger a phone call. === */
		if(phone) 
			$('#tapToTalk').attr('href','tel:' + phone).html('Tap to Talk <span>' + phone + '</span>');
		else 
			$('#tapToTalk').remove();
	}
	
	function speakToSpecialist(hoursArray) {
		/* === Show the message ‘Speak to Our Bone Specialist’ if and 
			   only if the current time is within working hours === */
		
		if( typeof hoursArray == 'object' && showMessage(hoursArray) )
			$('#speakToMessage').css('visibility','visible');
		
	}
	
	function showMessage(hoursArray){

		if(typeof moment != 'function' || hoursArray.length === 0)
			return false; 
			
		var pstTime = moment().tz("America/Los_Angeles");
		var compare = {
				day : pstTime.isoWeekday(),
				time : pstTime.hours() * 100 + pstTime.minutes()
			};
		
		var operatingHours = _getOperatingHours(hoursArray, compare.day);
		
		return (compare.time >= Number(operatingHours.starting_time) && compare.time < Number(operatingHours.closing_time)) ? true : false; 
		
		function _getOperatingHours(searchArray, searchKey){
		    
		    for (var i = 0; i < searchArray.length; i++) {
			   if (searchArray[i].hasOwnProperty('day') && searchArray[i].day == searchKey ) 
				   return searchArray[i];
		    }
		      
		    return {starting_time : '0', closing_time : '0'};
		}
	}
	
	(function videoEvent(){
		/* === Make the three package pricing bundle boxes hidden until the video hits the 2:13 second === */
	
		window._wq = window._wq || [];
		_wq.push({ id: 'cecdwaq3dz', onReady: function(video) {
	
			video.bind('timechange', function(t) {
				if (t >= 133) 
  					$('#bundles').addClass('timed-display');
				});
		}});
	
		//handle case where bundles may be hidden due to video playback state
		$('#buyNow').on('click', function(e) {
			if( !$('#bundles').hasClass('timed-display') );
				$('#bundles').addClass('timed-display');
		})
	})();
	
	
	function buildModal(modalContentObj) {
		/* === The link in the guarantee should trigger a bootstrap modal... === */
		if(typeof modalContentObj === 'object') {
			var html;
		
			html = '<div class="modal-header">';
			html += '<button type="button" data-dismiss="modal" aria-label="close"><span class="glyphicon glyphicon-remove" area-hidden="true"></span></button>';
			html += '<h1 class="modal-title">' + modalContentObj.title + '</h1></div>';
			html += '<div class="modal-body">' + modalContentObj.copy + '</div>';
			
			$('.modal-content').html(html);
			$('#modalLink').attr('data-toggle','modal');
		} else {
			$('#modalLink').on('click', function(e){
				e.preventDefault();
				alert('Error: This information is temporarily unavailable');
			});
		}
		
	}
});