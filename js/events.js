//define functions here
function getIt() {
  $('p').on('click',function functionName() {
     alert("Hey!")
  })
}
function frameIt() {
  $('img').on('load',function functionName() {
     $('img').addClass('tasty')
  })
}
function pressIt() {
  $('input').on('keydown',function functionName(event) {
     if(event.which==71){alert("oops")}
  })
}
function submitIt() {
  $('form').on('submit',function functionName() {
     alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){
 getIt();
 frameIt();
 pressIt();
 submitIt()
// call functions here

});