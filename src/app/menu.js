function menu(){
    
    const contentCont = document.getElementById('content');
    const tempCont = document.createElement('div');
    tempCont.classList.add('tempCont');
    contentCont.appendChild(tempCont);
    
    const meat = document.createElement('div');
    meat.classList.add('meat');
    tempCont.appendChild(meat);

        const meatTitle = document.createElement('h4');
        meatTitle.classList.add("pizzaName");
        meatTitle.textContent = "Meat Lovers Pizza"
        meat.appendChild(meatTitle);

        const meatAbout = document.createElement('p');
        meatAbout.classList.add('pizzaAbout');
        meatAbout.textContent = "It's a pizza with ALOT of meat. Everything from beef and chicken to baby shark and penguin can be found on this pizza.";
        meat.appendChild(meatAbout);

    const pepperoni = document.createElement('div');
    pepperoni.classList.add('pepperoni');
    tempCont.appendChild(pepperoni);

        const pepperTitle = document.createElement('h4');
        pepperTitle.classList.add("pizzaName");
        pepperTitle.textContent = "Pepperoni Pizza"
        pepperoni.appendChild(pepperTitle);

        const pepperAbout = document.createElement('p');
        pepperAbout.classList.add('pizzaAbout');
        pepperAbout.textContent = "This is a pizza shop staple. If you go to a pizza place where they don't serve this then run, because that means something's up.";
        pepperoni.appendChild(pepperAbout);

    const cheese = document.createElement('div');
    cheese.classList.add('cheese');
    tempCont.appendChild(cheese);

        const cheeseTitle = document.createElement('h4');
        cheeseTitle.classList.add("pizzaName");
        cheeseTitle.textContent = "Cheese Pizza"
        cheese.appendChild(cheeseTitle);

        const cheeseAbout = document.createElement('p');
        cheeseAbout.classList.add('pizzaAbout');
        cheeseAbout.textContent = "We leave this pizza on the menu as tool to profile people. If we catch you ordering this and you're under the age of 5 then we're gonna have to ask you to leave.";
        cheese.appendChild(cheeseAbout);

    const calzone = document.createElement('div')
    calzone.classList.add('calzone');
    tempCont.appendChild(calzone);

        const  calzoneTitle = document.createElement('h4');
        calzoneTitle.classList.add("pizzaName");
        calzoneTitle.textContent = "Calzone"
        calzone.appendChild(calzoneTitle);

        const calzoneAbout = document.createElement('p');
        calzoneAbout.classList.add('pizzaAbout');
        calzoneAbout.textContent = "Calzone's are just pizzas folded in half. That's actually how we make ours, we just fold a pizza in half."
        calzone.appendChild(calzoneAbout);
}

export{menu};