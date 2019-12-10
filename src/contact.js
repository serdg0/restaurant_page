import grid from './grid';

const contactPage = () => {
  const content = grid();
  const body = document.getElementsByTagName('body')[0];
  body.className = '';
  body.classList.add('contact-bg');
  const mainContent = document.getElementById('main-content');
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('card', 'text-center');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const imageCredits = document.createElement('a');
  imageCredits.classList.add('card-link');
  imageCredits.setAttribute('href', 'https://www.freepik.com/free-photos-vectors/frame');
  imageCredits.innerHTML = 'Background photos created by valeria_aksakova - www.freepik.com';
  const contactInfoChef = document.createTextNode('Sergio Diaz');
  const chefDiv = document.createElement('h5');
  chefDiv.classList.add('card-title');
  chefDiv.appendChild(contactInfoChef);
  const contactInfoPlace = document.createTextNode('Lake Buena Vista, FL 32830-0250');
  const placeDiv = document.createElement('p');
  placeDiv.classList.add('card-text');
  placeDiv.appendChild(contactInfoPlace);
  const contactInfoPhone = document.createTextNode('+1 (407) 827-7144');
  const phoneDiv = document.createElement('p');
  phoneDiv.classList.add('card-text');
  phoneDiv.appendChild(contactInfoPhone);
  const contactInfoEmail = document.createTextNode('tacorest@tacorest.com.mx');
  const emailDiv = document.createElement('p');
  emailDiv.classList.add('card-text');
  emailDiv.appendChild(contactInfoEmail);
  const arr = [chefDiv, placeDiv, phoneDiv, emailDiv, imageCredits];

  arr.forEach((info) => {
    cardBody.appendChild(info);
  });
  contactInfo.appendChild(cardBody);
  mainContent.innerHTML = '';
  mainContent.appendChild(contactInfo);
  return content;
};

export default contactPage;
