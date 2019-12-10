import 'bootstrap/dist/css/bootstrap.min.css';
import navBar from './nav';
import './style.css';
import home from './home';

home();
const navbar = document.getElementById('navbar');
navbar.classList.add('bg-light', 'fixed-top');
navbar.appendChild(navBar());