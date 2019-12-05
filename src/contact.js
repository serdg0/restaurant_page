const contactPage = () => {
    const content = document.getElementById("content");
    const contactInfo = document.createElement("div");
    const contactInfoChef = document.createTextNode("Sergio Diaz");
    const contactInfoPlace = document.createTextNode("Lake Buena Vista, FL 32830-0250");
    const contactInfoPhone = document.createTextNode("+1 (407) 827-7144");
    const contactInfoEmail = document.createTextNode("tacorest@tacorest.com.mx");
    let arr = Array.of(contactInfoChef, contactInfoPlace, contactInfoPhone, contactInfoEmail);
    
    arr.forEach(info => {
        contactInfo.appendChild(info);
    });

    content.appendChild(contactInfo);
}

export default contactPage;