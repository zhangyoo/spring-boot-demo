(function($){
	

	var setSize=function(){
		var height=$(window).height()-$('.sectionHeader-A1').outerHeight();
		$('.sectionWrap-A3').height(height);
		$('.sectionWrap-A2').height(height);
	};
	$(function(){
		setSize();
		$(window).resize(function() {
		  setSize();
		});
	});


	
})($);