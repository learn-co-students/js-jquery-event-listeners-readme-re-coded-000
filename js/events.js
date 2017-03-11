//define functions here
function getIt() {
  $("p").click(function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').load(function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').keydown(function(key){
    if (key.which == 71) {
      alert('g is pressed')
    }
  })
}

function submitIt() {
  $('form').submit(function(){
    alert("your form is going to be submitted now");
    return;
  })
}
$(document).ready(function(){
getIt();
// call functions here
frameIt();
pressIt();
submitIt();
});
