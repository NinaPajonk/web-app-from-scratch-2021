import { locations } from './locations.js'


// overview page zoek functie 

const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const temp = document.querySelector('.temp');
const urlApi = "https://api.openweathermap.org/data/2.5/weather?q=";
// const units= "metric";


button.addEventListener('click', function(){
    
fetch(urlApi+inputValue.value+'&appid=44b15a8581ffb6c0cc21a142f2c8c380') 
.then(response => response.json())
.then(data =>  {
    console.log(data.name)
    const nameValue = data['name'];
    const tempValue = data['main']['temp'];
    const windValue = data['wind']['speed'];
    const descValue = data['weather']['0']['description'];
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    wind.innerHTML = windValue;
    desc.innerHTML = descValue;
})

.catch(error => {
    console.log(error);
});

})



// overviewpage plekken top 5 kite surf spots (moet nog api filteren)

export function overviewPage() {
    locations.map(location => {
        const list = document.querySelector(".list")
        console.log(location.image);
        list.insertAdjacentHTML('beforeend', `
        <article> 
        <a href="#spot1${location.id}">
        <h2>${location.name} </h2>
        <img src="${location.image}"> 
         </article>  `)
    })
}

overviewPage();


//DETAIL PAGE



  


// router (moet niet in de fetch module, nog verplaatsen)
export function router() {
    routie('spot1', function () {
        console.log('test1')
    });
    routie('spot2', function () {
        console.log('test')
    });
    routie('spot3', function () {
        console.log('test')
    });
    routie('spot4', function () {
        console.log('test4')
    });
    routie('spot5', function () {
        console.log('test5')
    });
};

router()
