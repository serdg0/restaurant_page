import grid from './grid';
import foodCard from './foodcard';

const menu = () => {
    grid();
    const body = document.getElementsByTagName('body')[0];
    body.className = '';
    body.classList.add('menu-bg');
    const mainContent = document.getElementById('main-content');
    const header = document.createElement('h1');
    header.classList.add('text-center');
    header.innerHTML = "- Menú -";
    mainContent.appendChild(header);

    let divArr = [];

    const foodCard1 = foodCard('Pozole', 'Tasty traditional mexican pozole', '23');
    const foodCard2 = foodCard('Mole', 'Tasty traditional mexican mole poblano', '20');
    const foodCard3 = foodCard('Cochinita Pibil', 'Tasty traditional cochinita pibil from Yucatan', '40');
    const foodCard4 = foodCard('Caldo de Pavo', 'Tasty traditional turkey soup', '15');
    const foodCard5 = foodCard('Salbutes', 'Tasty traditional salbutes yucatecos', '20');

    divArr.push(foodCard1, foodCard2, foodCard3, foodCard4, foodCard5);
 

    divArr.forEach(el => {
        mainContent.appendChild(el);
    })

    return content;
}

export default menu;