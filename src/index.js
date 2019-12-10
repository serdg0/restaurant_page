import 'bootstrap/dist/css/bootstrap.min.css';
import navBar from './nav';
import './style.css';

const navbar = document.getElementById('navbar');
const content = document.getElementById('content');
const body = document.getElementsByTagName('body')[0];
navbar.classList.add('bg-light');
navbar.appendChild(navBar());