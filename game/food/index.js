import { gameboard, genarateRandomBoardPosition } from '../board/index.js'
import {  colision as snakeColision } from '../snake/index.js'

let foodPosition = genarateRandomPosition();

export function update(){
    if(snakeColision(foodPosition)){
        foodPosition = genarateRandomPosition();
    }
}

export function draw() {

      const foodElement = document.createElement('div');
  
      // configurar css
      foodElement.style.gridRowStart = foodPosition.y;
      foodElement.style.gridColumnStart = foodPosition.x;
      
      // adicionar classe no elemento
      foodElement.classList.add('food')
  
      // De fato fazer a pintura
      gameboard.appendChild(foodElement)
  };

  export function genarateRandomPosition(){
      let newFoddPosition;

      while(newFoddPosition === undefined || snakeColision(newFoddPosition)){
          newFoddPosition = genarateRandomBoardPosition();
      }

      return newFoddPosition;
  }