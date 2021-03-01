import { locations } from './locations.js'


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
    .join('')
}

overviewPage();