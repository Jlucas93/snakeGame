const inputDirection = {
    x: 0,
    y: 0
  }
let lasInputDirection = {
  x:0,
  y:0
}
  
  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp':
        if(lasInputDirection.y !==  0) break;
        inputDirection.x = 0;
        inputDirection.y = -1;
        break
      case 'ArrowDown':
        if(lasInputDirection.y !==  0) break;
        inputDirection.x = 0;
        inputDirection.y = 1;
        break
      case 'ArrowLeft':
        if(lasInputDirection.x !==  0) break;
        inputDirection.x = -1;
        inputDirection.y = 0;
        break
      case 'ArrowRight':
        if(lasInputDirection.x !==  0) break;
        inputDirection.x = 1;
        inputDirection.y = 0;
        break
    }
  })
  
  export function getInputDirection() {
    lasInputDirection = inputDirection;
     return inputDirection;
  }