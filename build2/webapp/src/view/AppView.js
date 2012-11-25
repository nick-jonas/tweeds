define([
    'jquery',
    'lodash',
    'backbone'
], function($, _, Backbone){

	var AppView = Backbone.View.extend({

        // these must be in scrolling order from top to bottom
        sectionsWithPageDownArrow: [{id: 'products-1', nextSectionOffset: 2650, label: 'PRODUCTS / 2'},
                                    {id: 'products-2', nextSectionOffset: 3842, label: 'ABOUT'},
                                    {id: 'about', nextSectionOffset: 4840, label: 'BUY'}
                                    ],

        // is animating from clicking next arrow
        isScrollingFromClick: false,

        nextSection: {},

        $nextPageArrow: $('#nextPageArrow'),
        $nextPageLabel: $('.nextPageLabel'),

		initialize: function(){

            var that = this,
                $window = $(window);


            // document.addEventListener("scroll", function(){
            //     console.log($(window).scrollTop());
            // });

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

                that.positionSection($self);

                $window.scroll(function(){
                    var id = $self.attr('id');

                    that.updateNextPageArrow();

                    if(that.isInView($self)){
                        that.positionSection($self);
                        if(id == 'lookbook'){ // show slideshow when in view
                            $('#supersized').css('display', 'block');
                        }

                    }else{ // not in view
                        if(id == 'lookbook'){ // hide slide show when out of view
                            $('#supersized').css('display', 'none');
                        }
                    }
                }); // window scroll

            }); // each data-type


            // click handler for next page arrow
            this.$nextPageArrow.bind('click', function(){
                that.isScrollingFromClick = true;
                var pushDown = that.nextSection.nextSectionOffset; //$(this).attr('data-nextsection');
                $('html, body').animate({scrollTop:pushDown}, 'slow', function(){
                    that.isScrollingFromClick = false;
                });
            });


            $('.pager').each(function(){
                var $this = $(this),
                    leftNo = $(this).data('left'),
                    rightNo = $(this).data('right'),
                    white = ($this.hasClass('white')) ? ' white' : '',
                    left = '<div class="hide-text num left number-' + leftNo + white + '">' + leftNo + '</div>',
                    right = '<div class="hide-text num right number-' + rightNo + white + '">' + rightNo + '</div>',
                    slash = '<div class="slash' + white + '"></div>';
                $(this).html(left + slash + right);

            });

		},

        positionSection: function($obj){
            // animate backgrounds
            var $window = $(window),
                yPos = -($window.scrollTop() / $obj.data('speed'));
            if($obj.data('offsetY')){
                yPos += $obj.data('offsetY');
            }
            var coords = '50% ' + yPos + 'px';
            $obj.css('backgroundPosition', coords);

            // animate sprites
            $('[data-type="sprite"]', $obj).each(function(){
                var $sprite = $(this),
                    yPos = -($window.scrollTop() / $sprite.data('speed')),
                    top = (yPos + $sprite.data('offsetY')) + 'px';
                $sprite.css('top', top);
            });
        },

        updateNextPageArrow: function(){
            if(!this.isScrollingFromClick){
                 var i = this.sectionsWithPageDownArrow.length - 1;
                for(i; i >= 0; i--){
                    var section = $('#' + this.sectionsWithPageDownArrow[i].id);
                    if(this.isInView(section)){
                        this.nextSection = this.sectionsWithPageDownArrow[i];
                        this.$nextPageArrow.css('display', 'block');
                        this.$nextPageArrow.attr('data-nextsection', this.nextSection.nextSectionOffset);
                        this.$nextPageLabel.html(this.nextSection.label);
                        return;
                    }
                }
                this.$nextPageArrow.css('display', 'none');
            }
        },

        isInView: function($obj){
            var offsetCoords = $obj.offset(),
                $window = $(window);
            if( ($window.scrollTop() + $window.height()) > (offsetCoords.top) && // checks whether the very top of the element has scrolled into view at the very bottom of the browser window
                ( (offsetCoords.top + $obj.height()) > $window.scrollTop() )){ // checks whether the very bottom of the element has scrolled past the very top of the browser window
                    return true;
            }
            return false;
        }

	});

	return AppView;
});