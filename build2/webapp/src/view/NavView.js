define([
    'backbone',
    'jquery'
], function(Backbone, $){

    var NavView = function(){

        var that = this,
            $mainNav = $('.main-nav'),
            $textLogo = $('.main-nav .logo-text img'),
            $lookbookArrows = $('.lookbook-arrows');

        $lookbookArrows.hide();

        $("#nav-arrow").click(function(e){
            e.preventDefault();

            if($mainNav.hasClass('closed')){ // open nav
               that.openNav();
            }else{                          // close nav
                that.closeNav();
            }
        });

        $(".link-to-section").bind('click', function(e){
            var id = $(this).data('link'),
                currentPos = $(window).scrollTop(),
                newPos = parseInt($(this).data('position'), 10),
                dist;

            // if($(window).height() < 1000){
            //     newPos += 1000 - $(window).height();
            // }

            dist = Math.abs(newPos - currentPos);

            e.preventDefault();

            that.closeNav();

            $('html, body').animate({scrollTop:newPos}, dist / 2);
        });

        this.openNav = function(){
             $mainNav.removeClass('closed');
            $mainNav.addClass('open');
            $lookbookArrows.hide();
        };

        this.closeNav = function(){
            $mainNav.removeClass('open');
            $mainNav.addClass('closed');
            $lookbookArrows.show();
        };

    };

    return NavView;

});