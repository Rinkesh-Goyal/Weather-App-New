export const getOtherData = async (promise) => {
    // console.log(promise);
    let data = await promise;
    // let currentDate = new Date();
    let otherData = [];
    let sunrise,sunset,pressure,feelsLike,humidity,windSpeed,visibility,seaLevel;
     
    // console.log(data);

    humidity = data.main.humidity;
    feelsLike = data.main.feels_like;
    pressure = data.main.pressure;
    seaLevel = (data.main.sea_level)/1000;
    windSpeed = data.wind.speed;
    visibility = data.visibility/1000;
    sunrise = `${new Date((data.sys.sunrise)*1000).getHours()}`.padStart(2,'0') + `:` +`${new Date((data.sys.sunrise)*1000).getMinutes()}`.padStart(2,'0');
    sunset = `${new Date((data.sys.sunset)*1000).getHours()}`.padStart(2,'0') + `:` +`${new Date((data.sys.sunset)*1000).getMinutes()}`.padStart(2,'0');
    
    otherData.push({sunrise,sunset,pressure,feelsLike,humidity,windSpeed,visibility,seaLevel});
        
    
    // console.log(otherData);
    return otherData;
}

export const fillOtherData = (otherData) =>{
    document.querySelector('.sealevel-data').textContent = `${otherData[0].seaLevel} Km`;
    document.querySelector('.feels-like-data').textContent = `${otherData[0].feelsLike}°C`;
    document.querySelector('.pressure-data').textContent = `${otherData[0].pressure} hPa`;
    document.querySelector('.visibility-data').textContent = `${otherData[0].visibility} Km`;
    document.querySelector('.sunrise-data').textContent = otherData[0].sunrise;
    document.querySelector('.sunset-data').textContent = otherData[0].sunset;
    document.querySelector('.wind-data').textContent = `${otherData[0].windSpeed} Km/hr`;
    document.querySelector('.humidity-data').textContent = `${otherData[0].humidity}%`;

}   