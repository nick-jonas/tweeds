require(["jquery"], function($) {

    var $window = $(window);

    // Cache the Y offset and the speed
    $('[data-type]').each(function(){
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY'), 10));
        $(this).data('speed', $(this).attr('data-speed'));
    });

    // For each element that has a data-type attribute
    $('section[data-type="background"]').each(function(){

        var $self = $(this),
            offsetCoords = $self.offset(),
            topOffset = offsetCoords.top;

        // store some variables based on where we are
        $(this).data('speed', parseInt($(this).attr('data-speed'), 10));

        $window.scroll(function(){

            if(isInView($self)){

                // animate backgrounds
                var yPos = -($window.scrollTop() / $self.data('speed'));
                if($self.data('offsetY')){
                    yPos += $self.data('offsetY');
                }
                var coords = '50% ' + yPos + 'px';
                $self.css('backgroundPosition', coords);

                // animate sprites
                $('[data-type="sprite"]', $self).each(function(){
                    var $sprite = $(this),
                        yPos = -($window.scrollTop() / $sprite.data('speed')),
                        top = (yPos + $sprite.data('offsetY')) + 'px';
                    $sprite.css('top', top);
                });
            }
        }); // window scroll

    }); // each data-type

    // helper: returns true if object is still in view
    function isInView( $obj ){
        var offsetCoords = $obj.offset(),
            $window = $(window);
        if( ($window.scrollTop() + $window.height()) > (offsetCoords.top) && // checks whether the very top of the element has scrolled into view at the very bottom of the browser window
             ( (offsetCoords.top + $obj.height()) > $window.scrollTop() )){ // checks whether the very bottom of the element has scrolled past the very top of the browser window
            return true;
        }
        return false;
    }

});

