<?php
    include('user_agent.php');
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>

		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Tweeds</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
		<link rel="stylesheet" href="assets/css/main.css">

        <script src="assets/js/libs/modernizr.custom.79639.js"></script>
        <script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>

        <link href="http://vjs.zencdn.net/c/video-js.css" rel="stylesheet">
        <script src="http://vjs.zencdn.net/c/video.js"></script>

	</head>

	<body>
        <div class="preloader">
            <div class="preloader-img">
                <img src="/assets/img/src/preloader.png"/>
            </div>
            <div class="preloader-black"></div>
            <div id="preloader-white" class="preloader-white"></div>
        </div>

        <div class="site-container">
        <div class="main-nav open">
            <div class="nav-content">
                <div class="logo-text hide-text"><img src="/assets/img/src/logo-typed.png"/></div>
                <div class="nav-buttons">
                    <ul>
                        <li><a href="#" data-link="lookbook" data-position="0" class="link-to-section lookbook hide-text">LOOKBOOK</a></li>
                        <li><a href="#" data-link="collection" data-position="8400" class="link-to-section collection hide-text">COLLECTION</a></li>
                        <li><a href="#" data-link="about" data-position="10842" class="link-to-section about hide-text">ABOUT</a></li>
                        <li><a href="#" data-link="buy" data-position="12050" class="link-to-section buy hide-text">BUY</a></li>
                        <li><a href="#" data-link="instagram" data-position="13135" class="link-to-section instagram hide-text">INSTAGRAM</a></li>
                    </ul>
                    <div class="social-buttons">
                        <a href="https://www.facebook.com/pages/Tweeds/301609289940747?fref=ts" target="_blank" class="social facebook hide-text">Facebook</a>
                        <a href="https://twitter.com/intent/tweet/?url=http%3A%2F%2Fwww.twds.co&via=tweeds_&hashtags=youngbuffalo&text=young%20buffalos%20wear%20tweeds" target="_blank" class="social twitter hide-text">Twitter</a>
                    </div>
                </div>

                <div class="boxes">
                    <a id="logo-icon" class="box hide-text" href="/">Tweeds
                        <span class="icon"></span>
                    </a>
                    <a id="nav-arrow" class="box hide-text" href="#">Navigation
                        <span class="arrow"></span>
                    </a>
                </div>
            </div>
        </div>

        <!-- next page arrow -->
        <div id="nextPageArrow" class="page-down white" data-nextsection="2650">
            <span class="arrow"></span>
            <h1 class="nextPageLabel"></h1>
        </div>

        <!--  product section page notification (i.e. 1/2 )-->
        <div id="products-pager" class="pager white" data-left="1" data-right="2" data-type="sprite" data-offsetY="2100" data-speed="2"></div>

        <div id="young-buffalo-wear-tweeds">
            <div class="img-slices">
                <img class="left-slice" src="/assets/img/src/youngbufftrans/blue.png"/>
                <img class="right-slice" src="/assets/img/src/youngbufftrans/yellow.png"/>
            </div>
            <div class="text-block">
                <h1 id="young">YOUNG</h1>
                <h1 id="buffalos">BUFFALOS</h1>
                <h1 id="wear">WEAR</h1>
                <h1 id="tweeds">TWEEDS</h1>
            </div>
            <div class="triangle-container"><div class="triangle"><span class="left-tri"></span><span class="right-tri"></span></div></div>
        </div>


        <!-- LOOKBOOK -->
        <section id="lookbook" class="section lookbook">
            <div id="video-player"></div>
            <div id="playbutton" data-src=""><img src="/assets/img/src/lookbook/playbutton.png"/></div>
            <div id="prevslide" class="lookbook-arrow left left-arrow-white"></div>
            <div id="nextslide" class="lookbook-arrow right right-arrow-white"></div>
        </section>


        <div class="spacer" style="display:block; height:7000px; background:#FF0000; position:relative; top:100%; left:0px; width:100%; z-index:2; opacity:0;"></div>

        <!-- PRODUCTS -->
        <section id ="products-1" class="section products products-1 start-left" data-type="background" data-offsetY="260" data-speed="5">
            <div class="content">
                <div id="hotel-santorini" class="circle-0 product-circle" >
                    <div class="product-shot">
                        <img src="assets/img/src/products/small/Tweeds07.png"/>
                    </div>
                    <div class="product-name">
                        <h1 class="product-no">01</h1>
                        <div class="product-name-container"><h1>HOTEL SANTORINI</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
                <div id="collection-label" class="circle-1 product-circle">
                    <div class="product-shot"></div>
                    <div class="product-name">
                        <h1 class="product-no">THE</h1>
                        <div class="product-name-container"><h1>COLLECTION</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
                <div id="pleasant-ville" class="circle-2 product-circle">
                    <div class="product-shot">
                        <img src="assets/img/src/products/small/Tweeds05.png"/>
                    </div>
                    <div class="product-name">
                        <h1 class="product-no">02</h1>
                        <div class="product-name-container"><h1>PLEASANT-VILLE</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
            </div>
        </section>

        <section id ="products-2" class="section products products-2 start-right" data-type="background" data-offsetY="650" data-speed="4.5">
            <div class="content">
                <div id="hello-heather" class="circle-2 product-circle">
                    <div class="product-shot">
                        <img src="assets/img/src/products/small/Tweeds01.png"/>
                    </div>
                    <div class="product-name">
                        <h1 class="product-no">03</h1>
                        <div class="product-name-container"><h1>HELLO HEATHER</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
                <div id="iceberg-slim" class="circle-1 product-circle">
                    <div class="product-shot">
                        <img src="assets/img/src/products/small/Tweeds10.png"/>
                    </div>
                    <div class="product-name">
                        <h1 class="product-no">04</h1>
                        <div class="product-name-container"><h1>ICEBERG SLIM</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
                <div id="smile-after-dark" class="circle-0 product-circle">
                    <div class="product-shot">
                        <img src="assets/img/src/products/small/Tweeds03.png"/>
                    </div>
                    <div class="product-name">
                        <h1 class="product-no">05</h1>
                        <div class="product-name-container"><h1>SMILE AFTER DARK</h1></div>
                        <div class="see-details hide-text"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ABOUT -->
        <section id="about" class="section about" data-type="background" data-offsetY="700" data-speed="6">
            <div class="about-nav-arrows">
                <div class="left left-arrow-white"></div>
                <div class="right right-arrow-white"></div>
            </div>
            <div id="slider" class="sl-slider-wrapper">
                <div class="sl-slider">
                        <div id="about-slide" class="sl-slide bg-1" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
                            <div class="sl-content-wrapper">
                                <div class="sl-content">
                                    <div class="sl-slide-inner">
                                        <div class="slice-content"><img src="assets/img/src/about/boy_bottom.png"/></div>
                                    </div>
                                    <div class="sl-slide-inner-2">
                                        <div class="slice-content"><img src="assets/img/src/about/boy_top.png"/></div>
                                    </div>
                                    <div class="about-text story-text-block slice-text">
                                        <p><span class="title">ABOUT TWEEDS</span><br/><br/>TWEEDS IS SIMPLE. IT'S ABOUT TRYING HARD, TRYING TO IMPROVE YOURSELF, TRYING TO LEAVE A GOOD IMPRESSION ON EVERYONE YOU MEET. IT'S ABOUT TRAVEL. IT'S ABOUT A LIFE IN THE WATER. SO, WHY UNDERWEAR? WELL, THAT'S THE THING, AIN'T IT. TWEEDS BELIEVES IN A GOOD FOUNDATION. IN ATTENTION TO DETAIL. AND WHEN YOU REALLY THINK ABOUT IT, ALL THINGS IN MODERN LIFE START WITH UNDERWEAR. YOU MIGHT CALL TWEEDS A LIFESTYLE BRAND, BUT WE'D PREFER YOU JUST SAID IT'S A LIFESTYLE. KOLOHE ANDINO, A SURFER WHO IS EXCEPTIONAL, IS THE FACE OF TWEEDS AND DO YOU KNOW WHY? BECAUSE TWEEDS CELEBRATES EFFORT, AND KOLOHE DOESN'T DO HALVES. TWEEDS IS ABOUT THE ONE-PERCENTERS, AND KOLOHE IS A ONE-PERCENTER. ABOVE ALL, TWEEDS IS ABOUT THE FINER THINGS IN LIFE. TWEEDS MIGHT'VE CRASHED YOUR PARTY, BUT IT AT LEAST BROUGHT ROS&Eacute; AND DUTCH CHOCOLATE.</p>
                                        <div class="pager" data-left="1" data-right="3"></div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="kolohe-slide" class="sl-slide bg-2" data-orientation="horizontal" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
                            <div class="sl-slide-inner">
                                <div class="slice-content"><img src="assets/img/src/about/kolohe_bottom.png"/></div>
                            </div>
                            <div class="sl-slide-inner-2">
                                <div class="slice-content"><img src="assets/img/src/about/kolohe_top.png"/></div>
                            </div>
                            <div class="kolohe-text story-text-block slice-text">
                                <p><span class="title">KOLOHE ANDINO</span><br/><br/>OH, BROTHER, HOW DOES IT FEEL TO LEAD THE SLOB N' STALE GEN? TO SPRINKLE TECHNICAL PERFECTION WITH RAW PUNK? TO SHAVE YOUR BEAUTIFUL HAIR JUST 'CAUSE YOU WANNA, TO TAKE BETTER PHOTOS THAN THOSE WHO DOCUMENT YOU, TO EMBODY THE BRILLIANCE OF YOUTH AND TO KEEP PARENTS UP AT NIGHT, SWEATING ABOUT HOME MUCH TIME THEIR DAUGHTERS SPEND SCROLLING THROUGH YOUR SOCIAL MEDIA? DON'T BOTHER ASKING. KID DOESN'T BRAG AND WON'T GLOAT. WHO SAID YOUTH'S WASTED ON THE YOUNG? WHOEVER YOU ARE, KOLOHE ANDINO HAS A BONE TO PICK WITH YOU. HE'S THE ONLY ATHLETE IN THE WORLD WHO DOESN'T HAVE A RED AND YELLOW RED BULL STICKER (IT'S BLACK). A PERFECT WEEKEND FOR THE KID IS GETTING LOST IN THE FOREST, FALLING ASLEEP NEXT TO A CAMPFIRE AND WAKING UP TO 10 HOURS OF SECLUDED WAVES (WITH NO CAMERAS, THANKS). BROTHER'S MENTALITY DEMANDS KNOWLEDGE, ENLIGHTENMENT AND CONTROL OF ALL THINGS IN HIS LIFE, LIKE, RIGHT NOW. HIS PLAYLISTS ARE CONSIDERED. HIS TRUCK IS CLEAN. KOLOHE LIKES THE LITTLE THINGS. KOLOHE IS TWEEDS.</p>
                                <div class="pager white" data-left="2" data-right="3"></div>
                            </div>
                        </div>

                        <div id="story-slide" class="sl-slide bg-3" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
                                <div class="story-bg"></div>
                                <div class="story-text story-text-block">
                                    <p><span class="title">THE STORY OF <br/>TWEEDS</span><br/><br/><span class="p-text-1">PLEASE DON'T CHOKE ON YOUR POPCORN, BUT HONESTLY, TWEEDS MIGHT BE A ROM-COM. OR, PERHAPS A HORROR MOVIE? READ THIS AND DECIDE:
        IN THE CANARY ISLANDS THERE IS A WAVEPOOL. IN THE HEART OF THE CONCRETE JUNGLE, WOULD YOU BELIEVE, A BONA FIDE BODY OF CHLORINATED WATER THAT MAKES WAVES! AND IT WAS HERE, IN THIS STRANGE PLACE, THAT KOLOHE ANDINO AND SAM MCINTOSH FIRST MET IN 2010 (THERE WERE OTHERS THERE, BUT THEY'RE JUST EXTRAS IN THIS PARTICULAR FILM). THERE WAS A STUDIO SHOOT, SURFING'S FIRST, AND KOLOHE SHINED FOR THE CAMERA FLASHES. HE EARNED THE COVER OF SAM'S MAGAZINE. HE WAS JUST SO GOOD.<br/></span><span class="p-text-2"><br/>SIX MONTHS LATER AND THE PAIR FIND THEMSELVES ON THE SAME BOAT IN THE INDIAN OCEAN. KOLOHE'S THERE AS A HIRED GUN, SAM'S PULLING TOGETHER A BIG SHOOT IDEA. IT'S 2011 NOW, A VERY LIBERAL AGE TO BE ALIVE, AND IT'S ON THIS BOAT AT THIS TIME THAT THE DUO DECIDE THEY WANT TO CREATE SOMETHING THAT CELEBRATES ATTENTION TO DETAIL. YOU NOW FIND YOURSELF AT THE PORTAL OF THAT CREATION. SWIM AROUND, IT'S KINDA DYNAMIC IN HERE.</span></p>
                                    <div class="pager" data-left="3" data-right="3"></div>
                                </div>

                            </div>
                        </div>

                    </div><!-- /sl-slider -->
                </div><!-- /slider-wrapper -->

        </section>

        <!-- BUY -->
        <section id="buy" class="section buy" data-type="background" data-offsetY="1010" data-speed="5">

            <div class="buy-content">
                <h1>TWEEDS IS AVAILABLE<br/>AT THESE FINE RETAILERS...</h1>
                <div class="store-container">
                    <a class="white-circle store-btn surf-stitch" href="http://www.surfstitch.com/eu/en/brand/tweeds" target="_blank"><span class="label">SURF STICH</span></a>
                    <div class="white-circle store-btn swell disabled"><span class="label">SWELL .COM</span></div>
                </div>
            </div>

        </section>

        <!-- INSTAGRAM -->
        <section id="instagram" class="section instagram"></section>

        </div>



        <!-- typekit prod-->
        <script type="text/javascript" src="//use.typekit.net/iki3uhf.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>


        <!-- typekit local
        <script type="text/javascript" src="//use.typekit.net/lkf4afo.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>-->

        <script data-main="src/config" src="assets/js/libs/require.js"></script>

        <!-- preloader -->
        <script type="text/javascript" src="/assets/js/plugins/pxloader/PxLoader.js"></script>
        <script type="text/javascript" src="/assets/js/plugins/pxloader/PxLoaderImage.js"></script>

        <script>
            window.isLoaded = false;
            var isRetina = ((window.devicePixelRatio===undefined?1:window.devicePixelRatio)>1),
                srcPath = '/assets/img/src/',
                loader = new PxLoader(),
                images = [
                    srcPath + 'buy/bg.jpg',
                    srcPath + 'logo-typed.png',
                    srcPath + 'lookbook/Tweeds1.jpg',
                    srcPath + 'lookbook/Tweeds2.jpg',
                    srcPath + 'lookbook/Tweeds3.jpg',
                    srcPath + 'lookbook/Tweeds4.jpg',
                    srcPath + 'lookbook/Tweeds5.jpg',
                    srcPath + 'products/bg-mountains.jpg',
                    srcPath + 'products/bg-surfer.jpg',
                    srcPath + 'about/boy_bottom.png',
                    srcPath + 'about/boy_top.png',
                    srcPath + 'about/kolohe_bottom.png',
                    srcPath + 'about/kolohe_top.png',
                    srcPath + 'about/storybackground.png',
                    srcPath + 'youngbufftrans/blue.png',
                    srcPath + 'youngbufftrans/yellow.png'
                ];
            for(var i = 0; i < images.length; i++){
                var pxImage = new PxLoaderImage(images[i]);
                loader.add(pxImage);
            }

            loader.addProgressListener(function(e){
                var ratio = e.completedCount / e.totalCount,
                    max = 127,
                    newHeight = ((1 - ratio) * (max - 20)) + 20,
                    whiteRect = document.getElementById('preloader-white');
                // newHeight = (newHeight > max) ? max : newHeight;
                // whiteRect.style.height = newHeight + 'px';
                if(ratio == 1){
                    window.isLoaded = true;
                }
            });

            loader.start();

        </script>

	</body>

</html>