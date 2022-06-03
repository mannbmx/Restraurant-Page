function contact(){
    console.log('contact')
    const contentCont = document.getElementById('content');
 
        contentCont.innerHTML = "";
    
        
        //Adds content to the content div

        const contactTitle = document.createElement('h1');
        contactTitle.classList.add('contactTitle');
        contactTitle.textContent = "Pappa's Contact Info";
        contentCont.appendChild(contactTitle);

        const phoneNumber = document.createElement('h2');
        phoneNumber.classList.add('phoneNum');
        phoneNumber.textContent = "Pappa's Digits: 777-888-9900";
        contentCont.appendChild(phoneNumber);
    
        const email = document.createElement('h2');
        email.classList.add('email');
        email.textContent = "Pappa's eMail: pappa@pappaspiza.com";
        contentCont.appendChild(email);

        const refund = document.createElement('p');
        refund.classList.add('refund');
        refund.textContent = "Pappa's Pizza does not offer refunds nor do we make mistakes. If you don't like it too bad.";
        contentCont.appendChild(refund);

        const map = document.createElement('div');
        map.classList.add('map');
        contentCont.appendChild(map);
}

export{contact};