import { getInputDirection } from './input.js';
import { gameboard } from '../board/index.js'

export const snakeSpeed = 8;
let newSegment;

const snakeBody = [
    {x: 11, y: 11},
  ]

  export function update(){
    addSegment();
    const inputDirection = getInputDirection();

    //movimentar os segmentos
    for(let i = snakeBody.length -2; i >= 0;  i--) {
      snakeBody[i + 1] = { ...snakeBody [i] };
    }

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
export function expendSnake(amount){
  newSegment = amount;
}

export function addSegment(){
  if (newSegment > 0){
    snakeBody.push({
      ...snakeBody[snakeBody.length - 1],
    })
    newSegment -= 1;
  }
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function selfColision(){
  
  const sankeHead = snakeBody[0];

  return snakeBody.some((segment, index) => {
    if(index === 0)  return false;

    return sankeHead.x === segment.x && sankeHead.y === segment.y; 
  })
      
}