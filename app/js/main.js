$( function () {

	// $( '.drop-box' ).click( function () {
	// 	$( '#ul' )
	// 		.fadeToggle();
	// } );

	// $( '.drop-box' ).on( 'click', function () {
	// 	$( this ).toggleClass( 'marked' );
	// 	$( '.drop-text' ).toggleClass( 'marked1' );
	// } );

	// $( ".drop-box" ).click( function () {
	// 	$( '.rotate' ).toggleClass( "down" );
	// } );

	$( '.product__slider' ).slick( {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		asNavFor: '.slider__nav',
	} );
	$( '.slider__nav' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product__slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true,
	} );



	$( '.works__inner' ).slick( {
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: true,

		prevArrow: '<button class="slick-arrow slick-prev"><img	src="images/slider/slide-left.svg" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.svg" alt=""></button>',
	} );


	$( ".rate-star" ).rateYo( {
		rating: 5,
		starWidth: "15px",
		readOnly: true,
	} );

} );