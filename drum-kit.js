function playSound(e) {
  let inputKey = e.key;
  let dataKey;

  switch (inputKey) {
    case ('a'):
    case ('A'):
      dataKey = 65;
      break;
    case ('s'):
    case ('S'):
      dataKey = 83;
      break;
    case ('d'):
    case ('D'):
      dataKey = 68;
      break;
    case ('f'):
    case ('F'):
      dataKey = 70;
      break;
    case ('g'):
    case ('G'):
      dataKey = 71;
      break;
    case ('h'):
    case ('H'):
      dataKey = 72;
      break;
    case ('j'):
    case ('J'):
      dataKey = 74;
      break;
    case ('k'):
    case ('K'):
      dataKey = 75;
      break;
    case ('l'):
    case ('L'):
      dataKey = 76;
      break;
    default:
      dataKey = -1;
      break;
  }

  let audio = document.querySelector(`audio[data-key='${dataKey}']`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  let key = document.querySelector(`.key[data-key='${dataKey}']`);
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);