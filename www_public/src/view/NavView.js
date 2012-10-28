define([
    'app',
    'jquery'
], function(app, $){

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


    };

    return NavView;

});