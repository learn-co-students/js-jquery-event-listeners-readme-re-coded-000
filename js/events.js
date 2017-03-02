//define functions here

$(document).ready(function(){
	getIt();
	frameIt();
	pressIt();
	submitIt();
// call functions here

});

function getIt(){
	$("p").click(function(event){
		alert("Hey!")
	})
}

function frameIt(){
	$("img").load(function(){
		$("img").addClass("tasty")
	});
}

function pressIt(){
	$("input").keydown(function(event){
		if(event.which==71){
			alert("the letter g was pressed")

		}
	})
}

function submitIt(){
	$("form").submit(function(){
		alert("Your form is going to be submitted now.")
	})
}