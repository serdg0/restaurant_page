import carousel from './carousel'

const home = () => {
    const content = document.getElementById("content");
    const divCarousel = document.createElement('div');
    content.innerHTML = '';
    content.appendChild(divCarousel);
    divCarousel.appendChild(carousel());
}

export default home;