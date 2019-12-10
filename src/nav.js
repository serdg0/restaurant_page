import contact from './contact';
import menu from './menu';
import home from './home';

const navBar = () => {
  const navUl = document.createElement('ul');
  navUl.classList.add('nav', 'nav-tabs');
  const navHome = document.createElement('li');
  const navContact = document.createElement('li');
  const navMenu = document.createElement('li');
  const navLogo = document.createElement('a');
  navLogo.classList.add('navbar-brand');
  navLogo.innerHTML = 'THE RESTAURANT';
  navUl.appendChild(navLogo);
  const navArray = [navHome, navMenu, navContact];

  navArray.forEach((tab) => {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    tab.classList.add('nav-item');
    tab.appendChild(link);
    navUl.appendChild(tab);
    if (tab === navHome) {
      link.innerHTML = 'Home';
      link.onclick = () => { home(); };
    } else if (tab === navContact) {
      link.innerHTML = 'Contact';
      link.onclick = () => { contact(); };
    } else {
      link.innerHTML = 'Menu';
      link.onclick = () => { menu(); };
    }
  });

  return navUl;
};

export default navBar;
