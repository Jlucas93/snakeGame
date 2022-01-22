import { snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, selfColision} from './snake/index.js';
import{ update as updateFood, draw as drawFood} from './food/index.js';
import { gameboard, isOutsideBoard } from './board/index.js';

let lastTimeRender = 0;
let gameOver = false;

function main(currentTime) {

  if(gameOver){
    if(confirm("Game Over!")){
      window.location.reload();
    }
    else{
      alert("Não seja um mal perdedor :(");
      window.location.reload();
    }
    return;
  }
      
    window.requestAnimationFrame(main);
  
    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;
  
    if (secondsSinceLastRender < 1 / snakeSpeed) return;
  
    lastTimeRender = currentTime;
  
    update();
  
    draw();

  }

  function update() {
    gameboard.innerHTML = '';
    updateSnake();
    updateFood();
    checkGameOver();
  }
  
  function draw() {
    drawSnake();
    drawFood();
  };

  function checkGameOver(){
    if( isOutsideBoard(getSnakeHead()) || selfColision()){
      gameOver = true;
    }
  }


  window.requestAnimationFrame(main)