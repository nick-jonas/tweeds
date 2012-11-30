define([
'jquery',
'lodash',
'backbone',
// 'plugins/jqueryanimate',
// 'plugins/slitslider',
'collection/lookbooks'
], function($, _, Backbone, supersized, lookbooks){

    var AboutView = Backbone.View.extend({

        currIndex   : 0,

        $leftArrow  : $(".about-nav-arrows .left"),

        $rightArrow : $(".about-nav-arrows .right"),

        storyPageBreak : 677,
        storyPageBroken: false,
        $storyText1: $('#story-slide .story-text p .p-text-1'),
        $storyText2: $('#story-slide .story-text p .p-text-2'),

        sections    : [$('#about-slide'),
                        $('#kolohe-slide'),
                        $('#story-slide')],

        initialize: function(){

            var that = this;

            _.bindAll(this, "onResize", "onNextComplete");

            $('.about-nav-arrows .left').on('click', function(){
                that.previous();
            });

            $('.about-nav-arrows .right').on('click', function(){
                that.next();
            });

            //this.positionColorSlices();

            this.$leftArrow.hide();
            this.updatePagerNumbers();
            $('section.about').find('.pager').each(this.updatePagerNumbers);


            this.onResize();
            $(window).resize(this.onResize);

        },

        onResize: function(){
            var w = $(window).width();

            this.positionKoloheSlices();

            if(w < this.storyPageBreak){
                if(!this.storyPageBroken){
                    this.storyPageBroken = true;
                    this.showStoryParagraphPager();
                }
            }else{
                if(this.storyPageBroken === true){
                    this.showBothStoryParagraphs();
                }
                this.storyPageBroken = false;
            }
        },

        showStoryParagraphPager: function(){
            var that = this;
            this.$storyText2.css('display', 'none');
            this.$storyText1.append('<a href="#" class="ellipsis next"><br/>[ . . . ]</a>');
            $('.ellipsis.next').click(function(e){
                e.preventDefault();
                $(this).remove();
                that.$storyText1.css('display', 'none');
                that.$storyText2.css('display', 'inherit');
                that.$storyText2.prepend('<a href="#" class="ellipsis prev">[ . . . ]<br/></a>');
                $('.ellipsis.prev').click(function(e){
                    e.preventDefault();
                    $(this).remove();
                    that.$storyText1.css('display', 'inherit');
                    that.showStoryParagraphPager();
                });
            });
        },

        showBothStoryParagraphs: function(){
            this.$storyText2.css('display', 'inherit');
            this.$storyText1.find('.ellipsis').remove();
        },

        positionKoloheSlices: function(){
            var $bottom = $('#kolohe-slide .sl-slide-inner .slice-content'),
                $top = $('#kolohe-slide .sl-slide-inner-2 .slice-content'),
                windowWidth = $(window).width(),
                newX = (0.5 * windowWidth);

            $bottom.css('left', newX + 'px');
            $top.css('left', newX + 'px');
        },

        previous: function(){

            this.currIndex--;

            var $section = this.sections[this.currIndex],
                $innerTop = $section.find('.sl-slide-inner'),
                $innerBottom = $section.find('.sl-slide-inner-2'),
                $content = $section.find('.slice-text');

            // animate
            $section.css('display', 'block');
            $innerTop.animate({top: '50%'}, 500);
            $innerBottom.animate({top: '-245px'}, 500);
            $content.delay(500).fadeIn('250ms');

            // handle arrows
            this.$leftArrow.show();
            this.$rightArrow.show();
            if(this.currIndex === 0){
                this.$leftArrow.hide();
            }

        },

        next: function(){
            var that = this,
                $section = this.sections[this.currIndex],
                $innerTop = $section.find('.sl-slide-inner'),
                $innerBottom = $section.find('.sl-slide-inner-2'),
                $content = $section.find('.slice-text');

            // animate
            $content.fadeOut(250, function(){
                $innerTop.animate({top: '110%'}, 700);
                $innerBottom.animate({top: '-1000px'}, 700, that.onNextComplete);
            });

            // handle arrows
            this.currIndex++;
            this.$leftArrow.show();
            this.$rightArrow.show();
            if(this.currIndex == this.sections.length - 1){
               this.$rightArrow.hide();
            }
        },

        onNextComplete: function(){
            var i = this.currIndex - 1;
            while(i >= 0){
                this.sections[i].css('display', 'none');
                i = i - 1;
            }
        },

        updatePagerNumbers: function(){
            var $this = $(this),
                leftNo = $this.attr('data-left'),
                rightNo = $this.attr('data-right'),
                white = ($this.hasClass('white')) ? ' white' : '',
                left = '<div class="hide-text num left number-' + leftNo + white + '">' + leftNo + '</div>',
                right = '<div class="hide-text num right number-' + rightNo + white + '">' + rightNo + '</div>',
                slash = '<div class="slash' + white + '"></div>';
            $this.html(left + slash + right);
        },

    });

    return AboutView;

});