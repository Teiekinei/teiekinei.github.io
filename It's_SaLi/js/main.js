
(function(){
	var pageInit=function(){
		$window=$(window);
		$wp=$(".overview-wrapper");
		$rwf=$("#rog-width-full");
		$sso=$("#special-sectionOverview");

		$window.load(pageResize); //works in chrome
		$window.resize(pageResize);
	}
	var pageResize=function(){
		$sso.css({"height":$rwf.height()});
	};
	$(document).ready(function($) {
		pageInit();	
	});

})();




$(function(){
    $('.back-to-top').click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
                scrollTop: 0
        }, 800);
    });
});










//Scroll indicate
$(window).load(function(){
    $(window).scroll(function(){
        var a = $(window).scrollTop();
                            
        if(a > 1000){
            $(".back-to-top").fadeIn();
        }else{
            $(".back-to-top").fadeOut();
        }
    });
});








