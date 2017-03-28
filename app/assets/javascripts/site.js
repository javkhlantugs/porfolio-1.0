$(document).on('turbolinks:load', function() {
	$('.my-container').css('height', minimumHeight());
	$('.avatar-container').css('height', aboutHeight());
	$('.window-inactive').css('height', windowsHeight() * 0.4);
	$('.developer-button').on('click', adjustWidthDev);
	$('.designer-button').on('click', adjustWidthDes);
});


// windows height
var windowsHeight = function () {
	var hei = $(window).height();
	return hei
}

function minimumHeight() {
	console.log(windowsHeight())
	var halfHeight = windowsHeight() * 0.6
	if (halfHeight < 300) {
		return 370 
	} else {
		return halfHeight
	}
}
//windows height end

//about height

function aboutHeight() {
	
	var hei = $('.about').height();
	console.log(hei);
	return hei
}

// about height end

//portfolio animation
function adjustWidthDev() {
	if (checkDeveloperMin()){
		$('.js-developer').toggleClass('developer-window developer-min')
		$('.js-designer').toggleClass('designer-min designer-window')
	} else {
		$('.js-developer').toggleClass('window-active window-inactive developer-window developer-window-inactive');
		$('.js-designer').toggleClass('window-active window-inactive designer-min designer-window-inactive');
	}
}

function adjustWidthDes() {
	if (checkDesignerMin()){
		$('.js-developer').toggleClass('developer-min developer-window');
		$('.js-designer').toggleClass('designer-min designer-window');
	} else {
		$('.js-designer').toggleClass('window-active window-inactive designer-window designer-window-inactive')
		$('.js-developer').toggleClass('window-active window-inactive developer-min developer-window-inactive')
	}
}

function checkDesigner() {
	return $('.js-designer').hasClass('window-active');
}
function checkDeveloper() {
	return $('.js-developer').hasClass('window-active');
}

function checkDesignerWindow() {
	return $('.js-designer').hasClass('designer-window');
}

function checkDeveloperWindow() {
	return $('.js-developer').hasClass('developer-window');
}
function checkDesignerMin() {
	return $('.js-designer').hasClass('designer-min');
}
function checkDeveloperMin() {
	return $('.js-developer').hasClass('developer-min');
}