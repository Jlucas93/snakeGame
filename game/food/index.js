


export function update(){

}

export function draw() {
    snakeBody.forEach(segment => {
      const foddElement = document.createElement('div');
  
      // configurar css
      foodElement.style.gridRowStart = segment.y;
      foodElement.style.gridColumnStart = segment.x;
      
      // adicionar classe no elemento
      foodElement.classList.add('food')
  
      // De fato fazer a pintura
      gameboard.appendChild(snakeElement)
    })
  };