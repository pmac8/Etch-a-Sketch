const container = document.querySelector('.container');

// Add funtion to create a grid
function createBoxes(numberPerRow) {
    
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
      }
      // Colors background when mouse enters a square in the grid
        div.addEventListener('mouseenter', () => {
          div.style.backgroundColor = 'blue'
        })
      container.appendChild(div);
    }
  }
  
  createBoxes(16);

  
    
  
  
