

// List of Planets in our solar system
const space = {
    mercury:{
        gravity:0.38,
        image:"mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"venus.gif"
    },
    earth:{
        gravity:1.0,
        image:"earth.png"
    },
    mars:{
        gravity:0.38,
        image:"mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"neptune.gif"
    },
    moon:{ 
        gravity:0.17,
        image:"moon.gif"
    }
}



const input = document.querySelector('input');
const button = document.querySelector('button');
const select = document.querySelector(".select");
const imagefield = document.querySelector('.imagefield');
const textfield = document.querySelector('.textfield');
let option;
let weight;


// Creating my option tags 
const planets = Object.keys(space);
for (let i = 0; i < planets.length; i++) {
    option = document.createElement('option');
    option.textContent = planets[i];    
    option.style.fontSize = '24px';
    option.style.color = 'rgb(0,0,0)';
    option.className = 'option';
    select.appendChild(option);
}


const containerUI = (img,text) => {
    let image = document.createElement("img");
    image.src = `./images/${img}`;
    let p = document.createElement("p");
    p.textContent = text;
    p.style.fontSize ="54px";
    p.style.color="white";     
    imagefield.appendChild(image);
    textfield.appendChild(p);
    
}

button.addEventListener("click",function(){
    let imgSrc;
    imagefield.innerHTML = "";
    textfield.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Number(input.value) * space[select.value].gravity;
    containerUI(imgSrc,weight);
    console.log(weight)
})




