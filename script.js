
function myFunction() {
let logo = document.querySelector("body > main > section.start-screen > header > div > div.logo");
     if (logo.style.display === "none") {
        logo.style.display = "block";
    } else {
      logo.style.display = "none";
    } 
let x = document.querySelector("body > main > section.start-screen > header > div > nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
let menu = document.querySelector("body > main > section.start-screen > header > div > nav > ul");
      menu.classList.add('main-menu_active');
      
let logoMob = document.querySelector("body > main > section.start-screen > header > div > div.logo.hidden");
if (logoMob.style.display === "block") {
    logoMob.style.display = "none";
} else {
  logoMob.style.display = "block";
} 

let menuAct = document.querySelector("body > main > section.start-screen > header > div > div.menu-burger > span");
menuAct.classList.contains('rotate') ? menuAct.classList.remove('rotate') : menuAct.classList.add('rotate');


}

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.container-cards');
const track = document.querySelector('.cards-product');
const btnPrev = document.querySelector('.border-circle.left');
const btnNext = document.querySelector('.border-circle.right');

const items = document.querySelectorAll('.item-card');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow; console.log(itemWidth)
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth-90}px`;
  console.log(item.style.minWidth);
})

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
 
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
window.addEventListener('resize', setPosition);
checkBtns();


/*let position = 0;
let width;
const container = document.querySelector('.container-cards');
const track = document.querySelector('.cards-product');
const btnPrev = document.querySelector('.border-circle.left');
const btnNext = document.querySelector('.border-circle.right');
const items = document.querySelectorAll('.item-card');

function init() {
  console.log('resize');
  width = container.clientWidth;console.log(width);
  track.style.width = width * items.length + 'px';
  items.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  
}

init();
window.addEventListener('resize', init);

btnNext.addEventListener('click', () => {
  position++;
  if(position >= items.length) {
    position = 0;
  }
  rollSlider();
})

btnPrev.addEventListener('click', () => {
  position--;
  if(position < 0) {
    position = items.length - 1;
  }
  rollSlider();
})

function rollSlider() {
  track.style.transform = 'translate(-' + position * width + 'px)';
}*/