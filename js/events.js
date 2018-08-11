//define functions here

$(document).ready(function(){

// call functions here
function getIt(){
  $("p").click(function(){
    alert('Hey!');
  })
}

});

function frameIt(){
  $('img').load(function(){
    this.className = 'tasty';
  })
}