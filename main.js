// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.getElementById('modal')
let like = document.querySelectorAll('.like')
function eventListener(){
  for(let i = 0; i<like.length; i++){
    like[i].addEventListener('click', handleClickEvent)
  }
}


function handleClickEvent(){
  mimicServerCall().then(res =>{
  let heart =like.querySelector('.like-glyph')
  heart.innerText(FULL_HEART)
  }).catch(error =>displayError())
}

function displayError(){
  errorMessage.classList.remove('hidden')
  setTimeout(reassignClass(),3000)
}
function reassignClass(){
  errorMessage.className = 'hidden'
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
