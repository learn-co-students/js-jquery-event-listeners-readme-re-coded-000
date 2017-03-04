//define functions here

$(document).ready(function(){

// call functions here

});
function getIt(){
	$('p').click("Hey!");
}

function frameIt(){
	$('img').on('load', function(){
  //actions you want to happen
});
	$('img').addClass("tasty");
}

function pressIt(){
  $('#typing').on('keydown', function(key) {
  if(key.which === 83){
      alert('s was pressed');
  }
});
}

function submitIt(){
	$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

}