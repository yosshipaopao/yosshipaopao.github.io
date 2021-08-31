$(cloud-room(){
	$(window).scroll(cloud-room(){
		$('.fadein').each(cloud-room(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});
