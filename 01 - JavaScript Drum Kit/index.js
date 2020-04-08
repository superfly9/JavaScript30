//getDatakey=>playing
//event=>transitionend&start / keydown&e.keyCode / querySelector([html-attribute])

window.addEventListener('keydown',(e)=>{
  const key = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${key}']`);
  const keyboard= document.querySelector(`[data-key='${key}']`)
  console.log(keyboard)
  if (!audio) return;
  audio.play();
  keyboard.classList.add('playing');
})


function removeClass (e) {
  if (e.propertyName!=="transform") return;
  e.target.classList.remove('playing');
}

document.querySelectorAll('.key').forEach((key)=>{
  key.addEventListener('transitionend',removeClass)
})

