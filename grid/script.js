var grid = document.getElementById("grid");
var numberOfBlocks = 380;

for (var i = 0; i < numberOfBlocks; i++) {
  grid.insertAdjacentHTML('beforeend', '<li id="square" class="grid__list-item"></li>')
}

document.onclick = e => {
  
  if (e.target.id == "square") {
    e.target.classList.add('grid__list-item--remove')
    setTimeout(() => {
      e.target.parentNode.removeChild(e.target)
    },500)
  }
  
} 