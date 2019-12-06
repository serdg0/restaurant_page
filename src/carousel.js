import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const carousel = () => {
    const carrousel = document.createElement('div');
const inerCarousel = document.createElement('div');
const imageOneDiv = document.createElement('div');
const imageTwoDiv = document.createElement('div');
const imageThreeDiv = document.createElement('div');
const imageFourDiv = document.createElement('div');

let divArr = [imageOneDiv, imageTwoDiv, imageThreeDiv, imageFourDiv];
divArr.forEach(div => {
    div.classList.add('carousel-item');
    inerCarousel.appendChild(div);
})
imageOneDiv.classList.add('active');
const imageOne = new Image();
const imageTwo = new Image();
const imageThree = new Image();
const imageFour = new Image();
imageOne.src = image1;
imageTwo.src = image2;
imageThree.src = image3;
imageFour.src = image4;
let imageArr = [imageOne, imageTwo, imageThree, imageFour];
imageArr.forEach(image => {
    image.classList.add('d-block', 'w-100');
})
imageOneDiv.appendChild(imageOne);
imageTwoDiv.appendChild(imageTwo);
imageThreeDiv.appendChild(imageThree);
imageFourDiv.appendChild(imageFour);
carrousel.setAttribute('id', 'carouselExampleControls');
inerCarousel.classList.add('carousel-inner');
carrousel.classList.add('carousel', 'slide');
carrousel.setAttribute('data-ride', 'carousel');

const aPrev = document.createElement('a');
aPrev.classList.add('carousel-control-prev');
aPrev.setAttribute('href', '#carouselExampleControls');
aPrev.setAttribute('role', 'button');
aPrev.setAttribute('data-slide', 'prev');
const hiddenPrev = document.createElement('span');
hiddenPrev.classList.add('carousel-control-prev-icon');
hiddenPrev.setAttribute('aria-hidden', 'true');
const spanPrev = document.createElement('span');
spanPrev.classList.add('sr-only');
spanPrev.innerHTML = 'Previous';
aPrev.appendChild(hiddenPrev);
aPrev.appendChild(spanPrev);

const aNext = document.createElement('a');
aNext.classList.add('carousel-control-next');
aNext.setAttribute('href', '#carouselExampleControls');
aNext.setAttribute('role', 'button');
aNext.setAttribute('data-slide', 'next');
const hiddenNext = document.createElement('span');
hiddenNext.classList.add('carousel-control-next-icon');
hiddenNext.setAttribute('aria-hidden', 'true');
const spanNext = document.createElement('span');
spanNext.classList.add('sr-only');
spanNext.innerHTML = 'Next';
aNext.appendChild(hiddenNext);
aNext.appendChild(spanNext);

carrousel.appendChild(inerCarousel);
carrousel.appendChild(aPrev);
carrousel.appendChild(aNext);
console.log(carrousel);
return carrousel;
}

export default carousel;
