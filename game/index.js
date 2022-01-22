import { snakeSpeed, update as updateSnake, draw as drawSnake } from './snake/index.js'

import{ update as updateFood, draw as drawFood} from './food/index.js'
import { gameboard } from './board/index.js';

let lastTimeRender = 0;


function main(currentTime) {
      
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
    updateFood()
  }
  
  function draw() {
    drawSnake();
    drawFood()
  };

  window.requestAnimationFrame(main)