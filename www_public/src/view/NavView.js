define([
    'backbone',
    'app',
    'jquery'
], function(Backbone, app, $){

    var NavView = function(){

        var $textLogo = $('.main-nav .logo-text img');

        if(app.isRetina){
            $textLogo.attr('src', app.imgSrc + '/logo-typed.png');
        }

        $("#nav-arrow").click(function(e){
            e.preventDefault();
            var $mainNav = $('.main-nav');
            if($mainNav.hasClass('closed')){
                $mainNav.removeClass('closed');
                $mainNav.addClass('open');
            }else{
                $mainNav.removeClass('open');
                $mainNav.addClass('closed');
            }
        });

        $(".link-to-section").bind('click', function(e){
            var id = $(this).data('link'),
                currentPos = $(window).scrollTop(),
                newPos = app.positions[id],
                dist = Math.abs(newPos - currentPos);
            e.preventDefault();
            //console.log('navigating to ' + id + ', position: ' + newPos + ' dist: ' + dist);
            //app.router.navigate(id, {trigger:true, replace:true});
            window.location.hash = id;
            $('html, body').animate({scrollTop:newPos}, dist / 2);
        });



    };

    return NavView;

});