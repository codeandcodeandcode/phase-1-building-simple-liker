// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Added a dom content loaded event listener
document.addEventListener("DOMContentLoaded", function() {
  let l = document.querySelectorAll(".like-glyph");
  let modal = document.querySelector("#modal")
  // looped through all like icons and added an event listner for each
  l.forEach(i=>{
    i.addEventListener("click", e=>{
      // handled the server request and changed the icons based on response
      mimicServerCall().then(r=>{i.classList.contains("activated-heart")?(i.innerHTML = EMPTY_HEART,i.classList.remove("activated-heart")):(i.innerHTML = FULL_HEART,i.classList.add("activated-heart"))}).catch((e)=>{
        document.querySelector("#modal-message").textContent = e;
        modal.classList.remove("hidden");
        setTimeout(() => {
          //reset the modal
          modal.classList.add("hidden");
        document.querySelector("#modal-message").textContent = "";
        }, 2000);
      })
    })
  })
});


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
