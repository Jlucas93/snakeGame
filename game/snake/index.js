import { getInputDirection } from './input.js';
import { gameboard } from '../board/index.js'

export const snakeSpeed = 3;

const snakeBody = [
    {x: 11, y: 11},
    {x: 11, y: 12},
  ]

  export function update(){
    const inputDirection = getInputDirection();

    // fazer a cabeça andar
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
  
  };

  export function draw() {
    snakeBody.forEach(segment => {
      const snakeElement = document.createElement('div');
  
      // configurar css
      snakeElement.style.gridRowStart = segment.y;
      snakeElement.style.gridColumnStart = segment.x;
      
      // adicionar classe no elemento
      snakeElement.classList.add('snake')
  
      // De fato fazer a pintura
      gameboard.appendChild(snakeElement)
    })
  };

  export function colision(position){
    return snakeBody.some(segment =>{
      return position.x === segment.x && position.y === segment.y; 
    })

  }
