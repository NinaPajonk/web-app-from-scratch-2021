
# Single page app - Check the weather for kitesurfs spot
## [Link to live demo in Github Pages:](https://kitesurf.netlify.app)

Single page app for kitesurfers to check the best spots in the Netherlands from the API: The open weather app.
<!-- ☝️ replace this description with a description of your own work
 -->

 <!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
## Index:
* [Get started](#Get-started)
* [Concept](#Concept)
* [Features](#Features)
* [API's](#API)
* [Data Fetchen](#Data-fetchen)
* [When I had more time](#When-I-had-more-time)
* [Research](#Research)


## Get started

1. Open the terminal on your computer.
2. Create a directory in a location of your choice with "mkdir" in your console.
3. Clone repository by typing the following command in your command-line:
git clone https://github.com/NinaPajonk/web-app-from-scratch-2021


## Concept

My application is for kite surfers who would like to see the current weather conditions at the best kite surf spots. There is a search function for spots that are not in the top 5. They can check the temperature and the wind speed. 

## Features
* Fetching data from API (Open Weather App)
* Search option
* Top 5 kitesurf spots with up to date weather data

## API

[Open Weather App](https://openweathermap.org) for current weather data. Access current weather data for any location on Earth including over 200,000 cities. 
Properties I used: Name, Weather description, Temperature, Wind Speed.
I found a YouTube tutorial in which you build a weather app with JavaScript and the Open Weather API. I used this Youtube tutorial to request the data and render it on my page. I mentioned the [Source](https://www.youtube.com/watch?v=GXrDEA3SIOQ&t=2s) of the tutorial in my code.



## Actor and Interactive Diagram
I made an actor and an interactive diagram of my application:

### Actor Diagram
<img src="/web-app-from-scratch-2021/images/actordiagram_v1.png"> 
Nog niet compleet
### Interactive Diagram

## Data fetchen
How I fetched my data from the open weather API:

I used it with an addEventListener because in my application you need to fill first in the searchbar the location and hit the sumbit button. After the data is fetched it retsponse json file and rendered to my HTML.
```
const urlApi = "https://api.openweathermap.org/data/2.5/weather?q=";

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
```

## When I had more time

- Icons that changed with the weather conditions. (sun, rain etc)
- Personal list of your favorites
- 


## Research (in Dutch)
### Single Page Application (SPA)

Wat is een SPA?
Een SPA is letterlijk een app die bestaat uit maar 1 pagina. De pagina hoeft dus niet te herladen tijdens het gebruik. 

Doel: Een vlotte gebruikerservaring bieden
In een SPA wordt alle benodigde HTML, JavaScript en CSS code opgeladen met één enkele laadactie van de pagina. De pagina wordt op geen enkele manier in het proces opnieuw geladen. Interactie met een SPA gaat vaak gepaard met dynamische communicatie met de webserver. 

Nadelen SPA:
Werkt niet zonder Javascript.
Niet vriendelijk voor zoekmachines (SEO), omdat je als het ware maar 1 html pagina inlaadt. Door de hash urls kunnen zoekmachines dit niet lezen.

Voorbeelden van SPA's zijn: 
* Netflix
* Google Maps
* Twitter  
* LinkedIn
* Facebook
* Gmail
* Google Drive 

Wanneer gebruik je geen SPA?
Een SPA is niet altijd handig om te gebruiken voor als je een page hebt meerdere categorieën of veel content. Bijvoorbeeld een online winkel. 

### JavaScript Fundamentals - Joost 
- Defer
Een defer attribute geeft aan laden na je html. Als je dit: <script src="script.js" defer> </script> in de head zou zetten inplaatsvan onderaan je html pagina laat hij het alsnog in de goede volgorde. Modules doen defer bij default.
- Scope
is omgeving waar bindings (var, let, const) leven, waar ze bestaan. 
Bindings leven in functie = functie scope, variabele die je binnen eenn functie declareert bestaan binnen die functie scope.

Const, let (Es6) zijn er later bij gekomen. 

- Block Scope
Alles wat je tussen de accolades {} zet. Maak je er een var van dan pakt hij het wel.

- Functie Scope
fucntion getHeadig(){
var heading = document.querySelector('h1');
}
Je zet de variabel dus in de functie zelf.
- Global Scope
a = 'a' 
Bad practice, deze variabele kan je in het hele script gebruiken. Zondeer binding. Als je in de browser 'window' typt, dan krijg je de globale Javascript scope terug.
- "use strict"
Strict mode, sommige manieren niet meer zijn toegestaan zoals geen globale varaibele mag aanmaken. Modules draaien standaard in strict mode dus kan geen globale variabele kan definieren.
- Hoisting
Omhoog tillen, bepaalde onderdelen naar boven brengen. 

### Modules
Modules zijn opgesplitste Javascript files. Wanneer je Javascript bestand erg groot wordt, is dit fijn om in kleinere stukjes op te splitsen. Elke file (module) heeft dan zijn eigen taak. Je hebt 1 "main" Javascript bestand en daar exporteer je elke module naar toe als het ware. Hiervoor moet je wel in je HTML aangeven dat je main Javascript werkt met modules. Mijn main Javascript is app.js
``` <script type="module" src="script/app.js"></script> ```

Ik heb mijn code gesplitst in de volgende modules:
- fetch.js
- locations.js
- render.js
- router.js

Zie ook mijn [Actor diagram] (#Actor-Diagram)

Good to know:
- Modules are scoped
- Modules only work on webserver/localhost
- Main script needs a [type=module] attribute to work
- Modules are deferred bij default



