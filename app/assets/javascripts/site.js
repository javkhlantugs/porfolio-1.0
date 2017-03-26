$(document).on('turbolinks:load', function() {
	$('.my-container').css('height', minimumHeight())
	$('.avatar-container').css('height', aboutHeight())
	$('.js-developer').click(adjustWidthDev())
	})


// windows height
var windowsHeight = function () {
	var hei = $(window).height();
	return hei
}

function minimumHeight() {
	console.log(windowsHeight())
	var halfHeight = windowsHeight() * 0.5
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

// developer window


