define(
[
    'jquery',
    'underscore'
], function($, _){

    var YoungBuffalo = function(){

        var $el = $('#young-buffalo-wear-tweeds'),
            $imgSlices  = $('#young-buffalo-wear-tweeds .img-slices'),
            $leftSlice = $('#young-buffalo-wear-tweeds .img-slices .left-slice'),
            $rightSlice = $('#young-buffalo-wear-tweeds .img-slices .right-slice'),
            $triangle = $('#young-buffalo-wear-tweeds .triangle-container'),

            text_young = {
                $el : $('#young-buffalo-wear-tweeds .text-block #young'),
                start: 1156,
                end: ($(window).height() / 2) - 165,
                scrollStart: 2700,
                scrollEnd: 2800
            },

            text_buffalos = {
                $el: $('#young-buffalo-wear-tweeds .text-block #buffalos'),
                start: 200,
                end: 0,
                scrollStart: text_young.scrollStart + 200,
                scrollEnd: text_young.scrollStart + 400
            },

            text_wear = {
                $el: $('#young-buffalo-wear-tweeds .text-block #wear'),
                start: 200,
                end: 0,
                scrollStart: text_buffalos.scrollStart + 200,
                scrollEnd: text_buffalos.scrollStart + 400
            },

            text_tweeds = {
                $el: $('#young-buffalo-wear-tweeds .text-block #tweeds'),
                start: 200,
                end: 0,
                scrollStart: text_wear.scrollStart + 200,
                scrollEnd: text_wear.scrollStart + 400
            },

            textElems = [text_young, text_buffalos, text_wear, text_tweeds],

            imgWidth = 1200,
            imgHeight = 799,
            sliceOffset = 500,
            minSliceScrollpoint = 0,
            maxSliceScrollpoint = 4000,
            minTriangleScrollpoint = 2661,
            maxSectionScrollpoint = 7000,
            triMinY = 0,
            triMaxY = 2560,
            leftMin,
            rightMin,
            leftMax,
            rightMax;

        return {

            initialize : function(){
                _.bindAll(this, 'onWindowResize', 'onWindowScroll', 'positionElements');
                $(window).resize(this.onWindowResize);
                document.addEventListener("scroll", this.onWindowScroll);

                // position text
                for(var i = 0; i < textElems.length; i++){
                    textElems[i].$el.css('margin-top', textElems[i].start + 'px');
                }

                this.onWindowResize();
                setTimeout(this.onWindowResize, 500);
            },

            onWindowResize : function() {
                var w = $(window).width(),
                    h = $(window).height(),
                    m = w / 2,
                    newImgWidth = newImgWidth || imgWidth,
                    newImgHeight = newImgHeight || imgHeight,
                    leftMidpoint,
                    rightMidpoint,
                    ratio;

                // size proportionally based on height of screen
                if(h >= parseInt($imgSlices.css('height'), 10)){
                    newImgHeight = h;
                    $imgSlices.css('height', newImgHeight + 'px');
                    ratio = h / imgHeight;
                    newImgWidth = ratio * imgWidth;
                    $imgSlices.css('width', newImgWidth + 'px');
                }else{
                    $imgSlices.css('width', w + 'px');
                    ratio = w / imgWidth;
                    newImgWidth = w;
                    newImgHeight = (ratio * imgHeight);
                    $imgSlices.css('height', newImgHeight + 'px');
                }


                leftMidpoint = m - newImgWidth;
                rightMidpoint = m;

                leftMin = leftMidpoint - 1000;
                rightMin = rightMidpoint + 1000;

                leftMax = leftMidpoint + sliceOffset;// + (w / 2);
                rightMax = rightMidpoint - sliceOffset;// - (w / 2);

                this.positionElements();

                text_young.end = ($(window).height() / 2) - 165;
            },

            onWindowScroll: function(){
                this.positionElements();
            },

            positionElements: function(){
                var scrollPoint = $(window).scrollTop(),
                    ratio = Math.min(1, scrollPoint / maxSliceScrollpoint),
                    leftPos = leftMin + (ratio * (leftMax - leftMin)),
                    rightPos = rightMin + (ratio * (rightMax - rightMin)),
                    triRatio = Math.max(0, ((scrollPoint - minTriangleScrollpoint) / maxSliceScrollpoint)),
                    topPos = (triMinY + (triRatio * (triMaxY - triMinY))) * 1.01;

                // position image slices
                $leftSlice.css('left', leftPos + 'px');
                $rightSlice.css('left', rightPos + 'px');

                var arrowPoint = $(window).width() * 0.769,
                    newArrowZIndex = (rightPos < arrowPoint) ? 1 : 2,
                    playButtonZIndex = (rightPos < $(window).width() / 2) ? 1 : 2;
                $('#lookbook #prevslide').css('z-index', newArrowZIndex);
                $('#lookbook #nextslide').css('z-index', newArrowZIndex);
                $('#playbutton').css('z-index', playButtonZIndex);

                // position triangle
                $triangle.css('top', topPos + 'px');

                // position text
                for(var i = 0; i < textElems.length; i++){
                    var elem = textElems[i],
                        textRatio = Math.min(1, Math.max(0, ((scrollPoint - elem.scrollStart) / elem.scrollEnd))),
                        textPos = (elem.start + (textRatio * (elem.end - elem.start)));
                    elem.$el.css('margin-top', textPos + 'px');
                }
            }
        };
    };

    return YoungBuffalo;

});