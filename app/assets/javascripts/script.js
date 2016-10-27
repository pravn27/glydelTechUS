$(document).ready(function(){
	$('#calendar').fullCalendar()
	$('[data-toggle="tooltip"]').tooltip();


	
    $('.sidebar-toggle-box').click(function(){
        
        if($('.side-nav').hasClass('hide-menu')) {
            $('.side-nav').removeClass("hide-menu");
            $('.wrapper').css("margin-left", "210px");
        }
        else {
         $('.side-nav').addClass("hide-menu");
         $('.wrapper').css({"margin-left": "60px","transition": "all ease-in 0.3s"});
        }
    })
})