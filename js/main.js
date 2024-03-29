 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });




(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });
	


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();
	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.carousel-friends').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 5
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};
	bgVideo();


	function makeTimer() {

		var endTime = new Date("18 Dezember 2021 20:00:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
			 

}
	


function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
	       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
				document.location = save.href; 
// window event not working here
			}else{
		        var evt = new MouseEvent('click', {
		            'view': window,
		            'bubbles': true,
		            'cancelable': false
		        });
		        save.dispatchEvent(evt);
		        (window.URL || window.webkitURL).revokeObjectURL(save.href);
			}	
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
	
var   ticketdownload = function() 
{
	$("input#ticket").on('click',  function (event) {
	    event.preventDefault();
		var name_init = document.getElementById("UserName").value;
		var name = name_init.replace(/\s/g,'').toUpperCase();
		var pass = document.getElementById("Password").value;
		var guestlist = ["BITCHOUMARIEPHILOMENE", "MBAKOPELISABETH", "DITAFOAIME","AKUMAWAHFRU","MIAFOCHANCELINE","BONANOGAETAN",
		"CHIMICHARLES","DEUTCHOUANELLY","DJOUMBAMOUSSA","DJUIDJEDANIELLE","DJUIMOFRANCK","ELOMBATJOSE","FINJECHRISTELLE",
		"FOGUEYANNICK","FOGOUNMARLEINE","FOKOUAAUDREY","FOTOUOERIC","ITOUAMARIE","KAHAMANTHONY","KAMGACEDRIC","KENMOGNEADRIEN",
		"KETCHAMBIAARLETTE","KOUENOUYOU","KUETEROMUALD","LEKEUFACKBORIS","MAGNYCHRISTELLE","MBANDJIPEGGY","NANALIONEL",
		"NDJABAJEANFLAUBERT","NDJABALESLYNE","NDOUMBAIVAN","NGATCHATEUTCHOU","NGONDIEPHERVE","NGONOELODIE","NGONOLUDOVIC",
		"NGOWAFRANCK","NGUEPISTEVE","NGUEYEPANGELA","NKUIKEULYDIA","NTCHATCHOARNOLD","NTIWAHERMANN","NYANGATHOMAS",
		"POUDJOMARISTIDE","SIDJEEMMANUEL","SIMODANIELLE","SIMORAISSA","SOUNKEAROLD","TAGNEPAUL","TAKAMBORIS","TAKAMGHISLAIN",
		"TCHANAESTELLE","TCHANARAOUL","TCHANAYVETTE","TCHATCHOUFRANCK","TCHETAGNIESAIE","TIAGUEANNICK","TOUELECEDRIC",
		"TOUEMBOUROMUALD","TOUKOTHIBAUT","YAMPILIABRAHAM","AMANGMAXIME","AMBIANALAUNA","BATOBAPITOU","BOUGUEURODRIGUE",
		"CHARRIAUEMMANUEL","CHOULALESLIE","CHRISTELLE","DEFOBERTINE","DEFOROSINE","DIANJIJAMILA","DJADEUROSTAND","DJAMILA",
		"DJAMPOUPATRICK","DJEUMOUTATIANA","DJOUNDASANDRINE","DJOUNSIJEAN","DOMTCHUENGVIDAL","EDJONGOSANDRA","ELOIPRISCILLE",
		"ELLAERIC","EYOUMCASSIDY","TCHATCHOUORNEL","FOFIE","FOTSINGFLORIAN","FOTSINGJENNY","FOTSOJEANERNEST","FOUDJOJOVIAL",
		"GENTIANUSTIBENDA","HAPPYVANECK","HEUMICLAUSVICH","HOMSIGERVAIS","JEPMOUNARCISSE","KAMDEMSTEPHANIE","KAMGAINGBARTHELEMIE",
		"KAMGAINGSYLVIANE","KAMGAJEANPIERRE","KAMGOUMKAREN","KAPGANGCAROLE","KAPTUEKEVIN","KEMANJIKETOMA","KEMTABORIS",
		"KENMOGNESYNTHIA","KOUNGAVICKY","KOUONANGMONIQUE","KUAGUIMDUPONT","KUATEJOEL","LEMOVICTORINE","MAGNYHILARY","MAIRAMOUNINA",
		"MATANDALEA","MAYOPACEDRIC","MBAKOPELISABETH","MBIAKOP","MBOUEFABRICE","MEKAMMOSELLE","MEKOUNTCHOUNANCY","MEKOTCHOUWESLEY",
		"MERLIN","MOKTOMOPAMELA","MOLUHAICHA","MOUDIEMMANUEL","MOUGNUTOUSAMIRA","MOUNCHIKPOUARMELLE","NAKEUPAULIN","NDJINKEFIERTE",
		"NDOUMBASERENA","NDOUMGAZACHARIE","DZUGUIAERIC","DZUIGUIAFRANCK","NGAGOUEAURELIE","NGNETHEOPHANE","NGOMNEBORIS","NGOMPEVANESSA",
		"NGONTAP","NGUEDICYRIL","NGUENANGCHRISTELLE","NGUIMFACKDORIANE","NKOMOLADOUCE","NOUBISSICAMILLE","NOUNEAGUELIDRINE",
		"NSANGOUJEAN","OMER","ORLANDE","OUBEDANIELLE","PATOU","PIPAALEX","PIPAEDOUARD","QUTNJEMROMEO","RAISSA","SEUHOUMIKAL","SIMOKEVIN",
		"SIMOMICHELLE","SOBJOPAULIN","SONTSAGAETAN","SONTSAMARTIAL","TABUEESTELLE","TADJUIDJEU","TAKAMKATY","TANONACHILLE","TCHANADOMINIQUE",
		"TCHAMBAPENIEL","TCHAPMIDONALD","TCHATATSTEVE","TCHIENTCHEUCARMELA","TCHOKOIVAN","TCHOUMBOUSIDOINE","TCHOUNDJIAJOREL","TCHOUPEYANNICK",
		"TENERACHELLE","TOUPENDIABDOUL","TSAGUELAETICIA","VAREL","YAMBAVIVIANE","YANOULEO","TAKAMULRICH","NANJIPCABREL","TAGNEMARTIAL",
		"TOUMASESHALOM","BREEZYGEORGE","AKAMECHARLES","CHUISSEUPASCAL","DOLLY","KELLY","MIAFOCHANCELINE","MOUNEAGUELIDRINE","WAFEUGUY",
		"HEUKOUALAURE","TEMGOUA","DOMOKELLY","YOUMBISSIWILLY","SYLVANIE","JOCELYN","SITCHOUHERVE","TCHUENKAMBORIS"];
		if(name != "" && pass != "")	
		{
			var found = guestlist.some(el => el === name.toUpperCase());
			if (!found|| pass.toUpperCase() != 'HM2020')
			{
				$('.hover_bkgr_fricc').show();
			}
			else
			{
			download_file('Billets/'+name+'.pdf',name+'.pdf');	
			}
		}
		else
		{
			$('.hover_bkgr_fricc').show();
		}
					
	});
};
ticketdownload();
setInterval(function() { makeTimer(); }, 1000);

})(jQuery);

