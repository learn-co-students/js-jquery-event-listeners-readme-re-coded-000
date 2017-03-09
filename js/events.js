//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

function getIt() {
	$("p").click(function(){
		alert("Hey!");
	})
}

function frameIt() {
	$("img").addClass("tasty");
}

function pressIt() {
	$("input").keydown(function(key){
		if(key == "g"){
			alert("g was pressed");
		}
	})
}

function submitIt() {
	$("form").on("submit",function(){
		alert("Your form is going to be submitted now.");
	})
}

