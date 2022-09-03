
function openNav() {
    document.getElementById("myNav").style.width = "50%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(".page-scroll").click(function(){
    $(".menu").hide();
});

// paralax scroll
$(function() {
    var $item = $('nav ul li');
    
    $item.on('click', 'a', function(event) {
        var $section = $($(this).attr('href'));
        var sectionTop = $section.offset().top;   
    
        $('html, body').stop().animate({scrollTop: sectionTop}, 800);
        
        event.preventDefault();
    });
    
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        $item.each(function() {
            var $section = $($(this).find('a').attr('href'));
            var sectionTop = $section.offset().top - 60;
            var sectionHeight = $section.height();
            
            if (sectionTop <= scrollTop && (sectionTop + sectionHeight) > scrollTop) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            }
        });
    });
});
