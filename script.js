const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let score = 0
var music = document.getElementById("loading-music");

        music.volume = 0.08;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const value = window.getComputedStyle(mario,null);
    const marioPosition = value.getPropertyValue("bottom")

    console.log(parseInt(value))
    
    if (pipePosition <= 120 && pipePosition > 0 && parseInt(marioPosition) < 70 ){
        
        score = 0
        
        
        pipe.styleanimation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${parseInt(marioPosition)}px`;
        
        mario.src="./images/game-over (2).png";
        mario.style.width ='70px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
    } else{

        score = score +1
        document.getElementById("score").innerHTML = `Score: ${score}`

    }
},10);

document.addEventListener('keydown', jump);
