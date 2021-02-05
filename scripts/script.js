
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=44b15a8581ffb6c0cc21a142f2c8c380')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var temp = data['main']['temp'];
    var descValue = data['weather']['0']['description'];
    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

.catch(err => alert("oeps, er gaat iets mis"));

})
