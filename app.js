
document.addEventListener("keydown", function(event) {
  var key=event.which;

  console.log(key);
})

function whichKey(key){
  if(key === 65){
    console.log("You Pressed A");
  }else{
    console.log("You Pressed L");
  }
whichKey();

}

//
// $(document).ready(function(){
//
//
//
//
// });
