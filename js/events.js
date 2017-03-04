//define functions here
function getIt(){
	$('p').click("Hey!");

}

function frameIt(){
	$('img').on('load', function(){
	  $('img').addClass('tasty')

	});
}

function pressIt(){
	$('#typing').on('keydown', function(key) {
    // 'g' corresponds to 83
    if (key.which === 83) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(key) {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){

// call functions here

});