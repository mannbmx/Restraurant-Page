export function home(){

    console.log('test test test')
const contentCont = document.getElementById('content');
    //Removes all elements from content div
    // while(contentCont.firstChild){
    //     parent.removeChild(contentCont.firstChild);
    // }
    contentCont.innerHTML = "";

    
    //Adds content to the content div
    const quoteText = document.createElement('h2');
    quoteText.classList.add('test');
    quoteText.textContent = "The best pizza place in the whole city!";
    contentCont.appendChild(quoteText);

    const quoteAuthor = document.createElement('h4');
    quoteAuthor.classList.add('author');
    quoteAuthor.textContent = "-Your Mom";
    contentCont.appendChild(quoteAuthor);

    const orderButton = document.createElement('button');
    orderButton.classList.add('orderbtn');
    orderButton.textContent = "Order Online";
    contentCont.appendChild(orderButton);

    const warning = document.createElement('p');
    warning.classList.add('warning');
    warning.textContent = 'Test Product May Contain A Chemical Known To The State Of California To Cause Cancer Or Birth Defects Or Other Reproductive Harm';
    contentCont.appendChild(warning);
}