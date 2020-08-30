const btn = document.querySelector('.btn');
btn.addEventListener('click',start);

const vill = document.getElementById('vill');
const civ = document.getElementById('civ');
let villDead = false;
let civDead = false;
let killCnt = 0;

function start() {
  let gameStart = setInterval(moveVill, 1000)
  gameStart;
  killCnt = 0;
    document.getElementById("killCnt").innerHTML = killCnt;
  setTimeout(gameStop,20000);
  function gameStop () {
    clearInterval(gameStart)
    alert(`당신의 점수는 ${killCnt*10} 입니다.`)
    
  }
}

function moveVill () {

  if(villDead === true) {
    const creatVill = document.createElement('img');
      creatVill.setAttribute("id", "vill");
      creatVill.setAttribute("src", "images/villain.png");
      creatVill.setAttribute("onclick", "disappearVill()");
    document.querySelector('.container').appendChild(creatVill);
    villDead = false;
  }
  
  if(civDead === true) {
    const creatCiv = document.createElement('img');
      creatCiv.setAttribute("id", "civ");
      creatCiv.setAttribute("src", "images/civ.png");
      creatCiv.setAttribute("onclick", "disappearCiv()");
    document.querySelector('.container').appendChild(creatCiv);
    civDead = false;
  }

  let randomTopVill = Math.floor(Math.random() * 80);
  let randomLeftVill = Math.floor(Math.random() * 80);
  let randomTopCiv = Math.floor(Math.random() * 80);
  let randomLeftCiv = Math.floor(Math.random() * 80);

  document.getElementById('vill').style.top = `${randomTopVill}%`;
  document.getElementById('vill').style.left = `${randomLeftVill}%`;
  document.getElementById('civ').style.top = `${randomTopCiv}%`;
  document.getElementById('civ').style.left = `${randomLeftCiv}%`;

  civ.style.top = `${randomTopCiv}%`;
  civ.style.left = `${randomLeftCiv}%`;
}

function disappearVill () {
  document.getElementById('vill').remove();
  villDead = true;
  killCnt++;
  document.getElementById("killCnt").innerHTML = killCnt;
}

function disappearCiv () {
  document.getElementById('civ').remove();
  civDead = true;
  killCnt--;
  document.getElementById("killCnt").innerHTML = killCnt;
}