// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key} 
// your API key is 44b15a8581ffb6c0cc21a142f2c8c380

fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=44b15a8581ffb6c0cc21a142f2c8c380')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("oeps, er gaat iets mis"))