define([
    'jquery',
    'lodash',
    'backbone'
], function($, _, Backbone){

	var AppView = Backbone.View.extend({

        // these must be in scrolling order from top to bottom
        sectionsWithPageDownArrow: [{id: 'products-1', nextSectionId: 'products-2', nextSectionOffset: 2600, nextSectionHeight: 1280, nextSectionContentHeight: 900, label: 'PRODUCTS / 2'},
                                    {id: 'products-2', nextSectionId: 'about', nextSectionOffset: 3842, nextSectionHeight: 1000, nextSectionContentHeight: 400, label: 'ABOUT'},
                                    {id: 'about', nextSectionId: 'buy', nextSectionOffset: 4840, nextSectionHeight: 1280, nextSectionContentHeight: 340, label: 'BUY'}
                                    ],

        // is animating from clicking next arrow
        isScrollingFromClick: false,

        nextSection: {},

        $nextPageArrow: $('#nextPageArrow'),
        $nextPageLabel: $('.nextPageLabel'),
        $productsPager: $('#products-pager'),
        $productSections: $('section.products'),
        $sectionAfterProducts: $('#about'),

        offset: 7000,

		initialize: function(){

            var that = this,
                $window = $(window);

            _.bind(this, 'positionSection');

            // document.addEventListener("scroll", function(){
            //     console.log($(window).scrollTop());
            // });

            // Cache the Y offset and the speed
            $('[data-type]').each(function(){
                $(this).data('offsetY', parseInt($(this).attr('data-offsetY'), 10));
                $(this).data('speed', $(this).attr('data-speed'));
            });

            if($window.scrollTop() > 1320){
                $('#supersized').css('display', 'none');
            }else{
                $('#supersized').css('display', 'block');
            }

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
                    that.updateProductsPager();

                    if($window.scrollTop() > 8336){
                        that.hideSection('lookbook');
                    }else{
                        that.showSection('lookbook');
                    }

                    if(that.isInView($self)){
                        that.positionSection($self);
                        that.showSection(id);

                    }else{ // not in view
                        that.hideSection(id);
                    }
                }); // window scroll

            }); // each data-type


            // click handler for next page arrow
            this.$nextPageArrow.bind('click', function(){
                that.isScrollingFromClick = true;
                var pushDown = that.nextSection.nextSectionOffset;
                var windowHeight = $(window).height();
                var topSpaceHeight = ((that.nextSection.nextSectionHeight / 2) - (that.nextSection.nextSectionContentHeight / 2));
                var diff = topSpaceHeight / 2;
                // console.log('windowHeight = ' + windowHeight);
                // console.log('that.nextSection.nextSectionHeight = ' + that.nextSection.nextSectionHeight);
                // console.log('that.nextSection.nextSectionContentHeight = ' + that.nextSection.nextSectionContentHeight);
                // console.log('topSpaceHeight = ' + topSpaceHeight);
                // console.log('diff = ' + diff);
                pushDown += (diff);
                $('html, body').animate({scrollTop:pushDown}, 'slow', function(){
                    that.isScrollingFromClick = false;
                });
            });
            // init products pager
            this.$productsPager.attr('data-right', this.$productSections.size());
		},

        showSection: function(id){
            switch(id){
                case 'lookbook':
                    $('#supersized').css('display', 'block');
                    $('#young-buffalo-wear-tweeds').css('display', 'block');
                    break;
                case 'products-1':
                    $('#products-1 .content').css('display', 'inherit');
                    break;
                case 'products-2':
                    $('#products-2 .content').css('display', 'inherit');
                    break;
                case 'about':
                    $('#slider').css('display', 'block');
                    break;
                case 'buy':
                    $('#buy .buy-content').css('display', 'block');
                    break;
                case 'instagram':
                    $('#instagram').css('display', 'block');
                    break;
            }
        },

        hideSection: function(id){
            switch(id){
                case 'lookbook':
                    $('#supersized').css('display', 'none');
                    $('#young-buffalo-wear-tweeds').css('display', 'none');
                    break;
                case 'products-1':
                    $('#products-1 .content').css('display', 'none');
                    break;
                case 'products-2':
                    $('#products-2 .content').css('display', 'none');
                    break;
                case 'about':
                    $('#slider').css('display', 'none');
                    break;
                case 'buy':
                    $('#buy .buy-content').css('display', 'none');
                    break;
                case 'instagram':
                    $('#instagram').css('display', 'none');
                    break;
            }
        },

        positionSection: function($obj){
            // animate backgrounds
            var that = this,
                $window = $(window),
                yPos = -(($window.scrollTop() - this.offset) / $obj.data('speed'));

            if($obj.data('offsetY')){
                yPos += $obj.data('offsetY');
            }
            var coords = '50% ' + yPos + 'px';
            $obj.css('backgroundPosition', coords);

            // // animate sprites
            $('[data-type="sprite"]', $obj).each(function(){
                var $sprite = $(this),
                    yPos = -(($window.scrollTop() - that.offset) / $sprite.data('speed')),
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

        updateProductsPager: function(){
            var i = this.$productSections.size() - 1;
            for(i; i >= 0; i--){
                if(this.isInView($(this.$productSections[i])) && !this.isInView(this.$sectionAfterProducts)){
                    this.$productsPager.css('display', 'block');
                    this.$productsPager.attr('data-left', i + 1);
                    this.updatePagerNumbers();
                    return;
                }
            }
            this.$productsPager.css('display', 'none');
        },

        updatePagerNumbers: function(){
            var $this = this.$productsPager,
                leftNo = $this.attr('data-left'),
                rightNo = $this.attr('data-right'),
                white = ($this.hasClass('white')) ? ' white' : '',
                left = '<div class="hide-text num left number-' + leftNo + white + '">' + leftNo + '</div>',
                right = '<div class="hide-text num right number-' + rightNo + white + '">' + rightNo + '</div>',
                slash = '<div class="slash' + white + '"></div>';
            $this.html(left + slash + right);
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