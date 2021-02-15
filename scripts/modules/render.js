
import {
    locations
}
from './locations.js'

// Add top 5 locaties kite surfen
 export function renderOverviewTop5() {
    locations.map(location => {
        const list = document.querySelector(".list")
        console.log(list);
        list.insertAdjacentHTML(`
        <article> 
        <a href="#details${location.id}">Check ${location.cityName} </a>
        <img src="${location.image}">
    </article>  `)
    })
}

