var square = document.getElementById("square");
var heart = document.getElementById("heart");
var tools_btns = document.getElementById("tools");

square.ondblclick = () => {
  heart.classList.remove('mask');
  heart.classList.add('grow');
  
  setTimeout(() => {
    heart.classList.add('mask');
    heart.classList.remove('grow');
  }, 550);
};

square.onmouseover = () => {
  tools_btns.classList.remove('hide');
};

square.onmouseout = () => {
  tools_btns.classList.add('hide');
};