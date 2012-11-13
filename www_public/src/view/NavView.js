define([
    'backbone',
    'app',
    'jquery'
], function(Backbone, app, $){

    var NavView = function(){

        var $mainNav = $('.main-nav'),
            $textLogo = $('.main-nav .logo-text img'),
            $lookbookArrows = $('.lookbook-arrows');

        if(app.isRetina){
            $textLogo.attr('src', app.imgSrc + '/logo-typed.png');
        }

        $lookbookArrows.hide();

        $("#nav-arrow").click(function(e){
            e.preventDefault();

            if($mainNav.hasClass('closed')){ // open nav
                $mainNav.removeClass('closed');
                $mainNav.addClass('open');
                $lookbookArrows.hide();
            }else{                          // close nav
                $mainNav.removeClass('open');
                $mainNav.addClass('closed');
                $lookbookArrows.show();
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