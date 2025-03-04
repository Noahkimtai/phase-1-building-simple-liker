// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.getElementById('modal')
let like = document.querySelectorAll('.like')
let heart =document.querySelectorAll('.like-glyph')
console.log(heart)
function eventListener(){
  alert('You are connecting to the server')
  for(let i = 0; i<heart.length; i++){
    heart[i].addEventListener('click', handleClickEvent)
  }
}
mimicServerCall().then(eventListener()).catch(error =>displayError())

function handleClickEvent(e){
  console.log(e.target)
  let likedHeart = e.target
  likedHeart.innerText =FULL_HEART
  likedHeart.style.color ='red'
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
