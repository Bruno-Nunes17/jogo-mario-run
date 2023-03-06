const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const scoreBoard = document.querySelector('.score-board')
const gameOver = document.querySelector('.game-over')
const reset = document.querySelector('.reset')

let score = 0;
let pipeHeight = 100;

setInterval(() => {
    score++;
}, 500);

function restart() {
    gameOver.classList.toggle("open")
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const pipeLoop = setInterval(() => {
    let pipeHeight = Math.floor(Math.random() * (170 - 60 + 1)) + 60;
    pipe.style.height = `${pipeHeight}px`
    pipeHeight = pipeHeight;
    console.log(pipeHeight)
}, 1500);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const clodPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < pipeHeight) {

        clouds.style.animation = 'none'
        clouds.style.left = `${clodPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './src/img/mariodead.png'
        mario.style.width = '90px'
        mario.style.marginLeft = '20px'

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        restart();
        clearInterval(loop)
        clearInterval(pipeLoop)
    }
    else {
        scoreBoard.textContent = `Score: ${score}`
    }
}, 10);

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)