//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
function getIt(){
  $('p').click(function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').load(function(){
    this.className = 'tasty';
  })
}

function pressIt(){
  $('input').keydown(function(e){
    console.log(e);
    if (e === 'G'){
      alert("You pressed G.")
    }
  })
}

function submitIt(){
  $('form').submit(function(e){
    alert("Your form is going to be submitted now.");
  })
}

