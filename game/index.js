import { snakeSpeed, update as updateSnake, draw as drawSnake } from './snake/index.js'

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
    updateSnake();
  }
  
  function draw() {
    drawSnake();

  };

  window.requestAnimationFrame(main)