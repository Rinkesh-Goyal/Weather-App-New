import * as weather from './weather.js';
import * as data from './data.js';
import * as daily from './daily-weather.js';
import * as hourly from './hourly-weather.js';
import * as other from './other-data.js'

const showWeeklyByCity = async () => {
    try{
      const city = document.querySelector('.city-input').value;
        const json = await data.getDataByCity(city);
        let filteredData = await daily.filterDailyData(data.getDailyData(json.coord.lat,json.coord.lon))
        daily.fillDailyData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
const showHourly = async () => {
      try{
        const city = document.querySelector('.city-input').value;
          const json = await data.getDataByCity(city);
          let filteredData = await hourly.filterHourlyData(data.getHourlyData(json.coord.lat,json.coord.lon))
          hourly.fillHourlyData(filteredData);
        }catch(err){
          console.log(err);
        }
}

const showOtherData = async () => {
    try{
        const city = document.querySelector('.city-input').value;
        const json = await data.getDataByCity(city);
        let filteredData = await other.getOtherData(data.getDataByCity(city))
        // console.log(filteredData);
        other.fillOtherData(filteredData);
    }catch(err){
        console.log(err);
    }
}

const showWeeklyByCoord = async (city) => {
    try{
    //   const city = document.querySelector('.city-input').value;
        const json = await data.getDataByCity(city);
        let filteredData = await daily.filterDailyData(data.getDailyData(json.coord.lat,json.coord.lon))
        daily.fillDailyData(filteredData);
      }catch(err){
        console.log(err);
      }
    }
const showHourlyByCoord = async (city) => {
      try{
        // const city = document.querySelector('.city-input').value;
          const json = await data.getDataByCity(city);
          let filteredData = await hourly.filterHourlyData(data.getHourlyData(json.coord.lat,json.coord.lon))
          hourly.fillHourlyData(filteredData);
        }catch(err){
          console.log(err);
        }
}

const showOtherDataByCoord = async (city) => {
    try{
        // const city = document.querySelector('.city-input').value;
        // const json = await data.getDataByCity(city);
        let filteredData = await other.getOtherData(data.getDataByCity(city))
        // console.log(filteredData);
        other.fillOtherData(filteredData);
    }catch(err){
        console.log(err);
    }
}


const displayInfoByCoord = async (position) =>{
  try{
    const lat = await position.coords.latitude;
    const lon = await position.coords.longitude;
    const filteredData = await weather.filterData(data.getDataByCoord(lat,lon));
    // console.log(filteredData);
    weather.fillData(filteredData);
    showHourlyByCoord(filteredData.city);
    showWeeklyByCoord(filteredData.city);       
    showOtherDataByCoord(filteredData.city);
  }catch(err){
    console.log(err);
  }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayInfoByCoord);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}



const displayInfoByCity = async () =>{
  try{
      const city = document.querySelector('.city-input').value;
      const filteredData = await weather.filterData(data.getDataByCity(city));
      // console.log(filteredData);
      weather.fillData(filteredData);
      showHourly();
    showWeeklyByCity();       
    showOtherData();
    }catch(err){
      console.log(err);
    }
    
  }






document.querySelector('.current-location').addEventListener('click',getLocation);
document.querySelector('.search-location-btn').addEventListener('click',displayInfoByCity);