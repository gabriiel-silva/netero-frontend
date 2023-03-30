window.onload = function() {
const parallaxCarousel = document.querySelector('.parallax-carousel');
const items = parallaxCarousel.querySelectorAll('.parallax-item');
const itemLength = items.length;
let currentItem = 0;
  
items[currentItem].classList.add('active');

function showItem(index) {
for (let i = 0; i < itemLength; i++) {
items[i].classList.remove('active');
}
items[index].classList.add('active');
}
setInterval(function() {
currentItem++;
if (currentItem >= itemLength) {
currentItem = 0;
}
showItem(currentItem);
}, 5000);
}