import './style.css';
import {home} from './app/home.js';
import {contact} from './app/contact.js';
import {menu} from './app/menu.js';



const contentCont = document.getElementById('content');


home();

function createHome(){
    contentCont.innerHTML = '';
    home();
}

function createContact(){
    contentCont.innerHTML = "";
    contact();
}

function createMenu(){
    contentCont.innerHTML = "";
    menu();
}

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Home") createHome();
    if (target === "Menu") createMenu();
    if (target === "Contact") createContact();
  });