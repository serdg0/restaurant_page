import grid from "./grid";

const home = () => {
    const body = document.getElementsByTagName('body')[0];
    body.className = '';
    body.classList.add('home-bg');
    const content = document.getElementById("content");
    const divWelcome = document.createElement('div');
    divWelcome.classList.add('text-center');
    const message = document.createElement('h1');
    message.classList.add('welcome-msg');
    message.innerHTML = 'Welcome to the new dimension of taste!';
    divWelcome.appendChild(message);
    content.innerHTML = '';
    content.appendChild(divWelcome);
}

export default home;