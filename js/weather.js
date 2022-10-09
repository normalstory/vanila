
const APIKEY = "2ac678da9d51ad6688f3a73a302e8b66";


function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    
    console.log("you live in : ",lat,lon);
    console.log(url);

    fetch(url)
        .then((response)=>response.json())
        .then((data) => {
            console.log(data.name, data.weather[0].main);
            const myCity=document.querySelector("#weather span:first-child");
            const todayWeather=document.querySelector("#weather span:last-child");
            myCity.innerText=data.name;
            todayWeather.innerText=`${data.weather[0].main} / ${data.main.temp}`;

        });

}

function onGeoError(){
    alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
