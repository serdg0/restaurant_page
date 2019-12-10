const foodCard = (name, description, price) => {
    const foodCard1 = document.createElement('div');
    const foodTitle1 = document.createElement('h3');
    const description1 = document.createElement('p');
    const price1 = document.createElement('span');
    foodCard1.classList.add('text-center', 'mb-4');
    foodCard1.appendChild(foodTitle1);
    foodCard1.appendChild(description1);
    foodCard1.appendChild(price1);
    foodTitle1.innerHTML = name;
    description1.innerHTML = description;
    price1.innerHTML = '$' + price;
    return foodCard1;
}

export default foodCard;