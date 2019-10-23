//define functions here
function getIt() {
	$('p').on("click",function () {
		alert("Hey!")
		return
	})
}
function frameIt() {
	$('img').on('load',function () {
		$('img').addClass('tasty')
	})
}

function pressIt() {
	$('input').on('keydown',function (key) {
		if (key.which==80) {
			alert('g was pressed')
		}
	})
}

function submitIt() {
	$('form').on('submit',function () {
		alert("Your form is going to be submitted now.")
	})
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
