<template>

    <div class="container">
        <Transition name="slide">
            <div class="menu" v-if="!viewportWidth() && showMenu">

                <div class="listOfCities">
                    <div class="row">
                        <p class="welcome">Hello {{props.username}}!</p>
                        <ion-icon name="close-outline" @click="showMenu = !showMenu" class="icon"></ion-icon>
                    </div>

                    <form @submit.prevent="getForecast(searchValue)">
                        <input type="search" placeholder="Search for city" v-model="searchValue" @input="filterCities()">
                        <div class="dropdownList" v-if="searchValue.length > 0">
                            <p v-for="city in filteredCities" @click="getForecast(city.name), showMenu = false">{{city.name}}</p>
                        </div>
                    </form>

                    <div class="savedCitiesWrapper" v-if="currentUser.savedCities.length > 0">
                        <p>Your saved places</p>
                        <div class="savedCities">
                            <p v-for="city in currentUser.savedCities" @click="getForecast(city), showMenu = false">{{city}}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </Transition>



        <div class="wrapper">

            <div class="row" v-if="!viewportWidth()">
                <p class="welcome">Hello {{props.username}}!</p>
                <ion-icon name="menu-outline" @click="showMenu = !showMenu" class="icon"></ion-icon>
            </div>


            <div class="listOfCities" v-if="viewportWidth()">

                <div class="row">
                    <p class="welcome">Hello {{props.username}}!</p>
                </div>

                <form @submit.prevent="getForecast(searchValue)">
                    <input type="search" placeholder="Search for city" v-model="searchValue" @input="filterCities()">
                    <div class="dropdownList" v-if="searchValue.length > 0">
                        <p v-for="city in filteredCities" @click="getForecast(city.name)">{{city.name}}</p>
                    </div>
                </form>

                <div class="savedCitiesWrapper" v-if="currentUser.savedCities.length > 0">
                    <p>Your saved places</p>
                    <div class="savedCities">
                        <p v-for="city in currentUser.savedCities" @click="getForecast(city)">{{city}}</p>
                    </div>
                </div>

                <div class="upcomingDays">
                    <div class="day" v-for="forecastDay in forecast">
                        <p>{{forecastDay.name}}</p>
                        <div>
                            <img :src="forecastDay.iconUrl" :alt="forecastDay.weather" class="forecastIcon">
                            {{forecastDay.temp}}
                        </div>
                        <div style="width: 9em">
                            <img src="./wind.webp" alt="wind:" class="forecastIcon wind">
                            <p>{{forecastDay.windSpeed}}<span style="font-size: .7rem; color: gray;">km/h</span></p>
                        </div>
                    </div>
                </div>

            </div>


            <div class="weather">
                <ion-icon v-if="!currentUser.savedCities.includes(weather.city)" name="add-outline" class="addCityIcon" @click="$emit('addCity', props.username, weather.city)"></ion-icon>
                <ion-icon v-if="currentUser.savedCities.includes(weather.city)" name="remove-outline" class="addCityIcon" @click="$emit('removeCity', props.username, weather.city)"></ion-icon>

                <p class="localization">{{weather.city}}, {{weather.country}}</p>
                <p class="temperature">{{weather.temp}}°</p>
                <img :src="weather.iconUrl" class="weatherIcon">
                <p class="desc">{{weather.desc}}</p>
                <p class="maxMin">H:{{weather.tempMax}}° L: {{weather.tempMin}}°</p>


                <div class="upcomingDays" v-if="!viewportWidth()">
                    <div class="day" v-for="forecastDay in forecast">
                        <p>{{forecastDay.name}}</p>
                        <div>
                            <img :src="forecastDay.iconUrl" :alt="forecastDay.weather" class="forecastIcon">
                            {{forecastDay.temp}}
                        </div>
                        <div style="width: 9em">
                            <img src="./wind.webp" alt="wind:" class="forecastIcon wind">
                            <p>{{forecastDay.windSpeed}}<span style="font-size: .7rem; color: gray;">km/h</span></p>
                        </div>
                    </div>
                </div>

                <div class="rainForecast">
                    <p>Chance of rain:</p>
                    <div class="columnContainer">
                        <div class="columnWrapper">
                            <div class="columnScale">
                                <p>100</p>
                                <p>50</p>
                                <p>0</p>
                            </div>
                            <p style="color: gray;">%</p>
                        </div>
                        <div class="columnWrapper" v-for="data of nextFiveHour">
                            <div class="column" :style="{height: (data.pop*1.7)+'px'}"></div>
                            <p>{{data.time}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    username: String,
    users: Array
})

const cities = [
    {
        "id": 2510911,
        "name": "Sevilla",
        "state": "",
        "country": "ES",
        "coord": {
            "lon": -5.97613,
            "lat": 37.382408
        }
    },
    {
        "id": 2643743,
        "name": "London",
        "state": "",
        "country": "GB",
        "coord": {
            "lon": -0.12574,
            "lat": 51.50853
        }
    },
    {
        "id": 2968815,
        "name": "Paris",
        "state": "",
        "country": "FR",
        "coord": {
            "lon": 2.3486,
            "lat": 48.853401
        }
    },
    {
        "id": 3067696,
        "name": "Prague",
        "state": "",
        "country": "CZ",
        "coord": {
            "lon": 14.42076,
            "lat": 50.088039
        }
    }
]

const weather = ref({
        country: ' ',
        city: ' ',
        temp: ' ',
        desc: ' ',
        tempMin: ' ',
        tempMax: ' ',
        iconUrl: ' '
    })
const searchValue = ref('')
const currentUser = ref()
const showMenu = ref(false)
const forecast = ref([])
const currentCity = ref('Rzeszów')
const nextFiveHour = ref([])

for(let i=0; i<props.users.length; i++) {
    if(props.users[i].login == props.username) {
        currentUser.value = props.users[i]
    }
}


const filteredCities = ref(cities)
const filterCities = () => {
    filteredCities.value = cities
    if(searchValue.value.length != 0) {
        const capitalized = searchValue.value.charAt(0).toUpperCase() + searchValue.value.slice(1)
        filteredCities.value =  filteredCities.value.filter((city) => (city.name.includes(capitalized)))
    }
}

const viewportWidth = () => {
    if(document.documentElement.clientWidth > 800)
    return true
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



const weekdaysInOrder = ref([])

const getForecast = async (givenName) => {

    showMenu.value = false

    currentCity.value = givenName

    const apiKey = '1d1192606d965909ab4f45aa700295af'
    searchValue.value = ''

    const today = new Date();
    let weekday = today.getDay()
    for(let i=0; i<5; i++) {
        weekdaysInOrder.value.push(weekdays[weekday])
        weekday++ 
        if(weekday==7) weekday = 0
    }

    
    let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+givenName+"&appid="+apiKey+'&units=metric')
    const upcoming = await response.json()
    if(!response.ok) return

    forecast.value = []
    for (const item of upcoming.list) {
        if(item.dt_txt.includes('15:00:00')) {
            const date = item.dt_txt.substring(0,10)
            const day = (new Date(date)).getDay()

            forecast.value.push({
                name: weekdays[day],
                temp: Math.round(item.main.temp)+'°',
                weather: item.weather[0].description,
                iconUrl: "https://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png",
                windSpeed: Math.round(item.wind.speed * 3.6)
            })
        }
    }

    nextFiveHour.value = []
    for(let i=0; i<5; i++) {
        const data = upcoming.list[i]

        nextFiveHour.value.push({
            pop: Math.round(data.pop*100),
            time: data.dt_txt.substring(11, 13)
        })
    }




    response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+givenName+"&appid="+apiKey+"&units=metric")
    const current = await response.json()
    weather.value = {
        country: current.sys.country,
        city: current.name,
        temp: Math.round(current.main.temp),
        desc: current.weather[0].description,
        tempMin: Math.round(current.main.temp_min),
        tempMax: Math.round(current.main.temp_max),
        iconUrl: "http://openweathermap.org/img/wn/"+current.weather[0].icon+"@2x.png"
    }
}

getForecast('Prague')



</script>

<style scoped>

    * {
        font-weight: 400;
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        background: rgb(159, 159, 252);
    }

    .menu {
        background: rgb(159, 159, 252);
        position: absolute;
        z-index: 99;
        width: 100%;
        height: 100vh;
        padding: .5em;
        left: 0;
        top: 0;
    }
        .icon {
            display: block;
            font-size: 3rem;
            color: white;
            margin-right: .3em;
        }
        .row {
            display: flex;
            justify-content: space-between;
            width: 100%;
            border-radius: 15px;
            align-items: center;
            height: min-content;
            background: rgb(17, 14, 61);
            border-radius: 15px;
            color: white;
            padding: 1em;
        }

        .menu .row {
            background: transparent;
            color: black;
        }
        .menu .row .icon {
            color: black;
        }


    .wrapper {
        padding: .5em;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
        background: rgb(159, 159, 252);
        border-radius: 20px;
        gap: 1em;
        align-items: flex-start;
    }

    .welcome {
        font-size: 2rem;
    }

    .listOfCities {
        padding: .5em;
        width: 100%;
        margin: auto;
        position: relative;
        border-radius: 15px;
        background: rgb(243, 253, 255);
        gap: 1em;
        display: flex;
        flex-direction: column;
    }

    input {
        width: 325px;
        margin-inline: auto;
        font-size: 1rem;
        padding: .5em;
        outline: none;
        background: rgb(236, 236, 236);
        border-radius: 30px;
    }

    .dropdownList {
        position: absolute;
        margin-top: .1em;
        width: 325px;
        background: rgb(236, 236, 236);
        border-radius: 10px;
        padding: .5em;
        left: .5em;
        display: flex;
        gap: .1em;
        flex-direction: column;
    }

        .dropdownList p {
            cursor: pointer;
            padding: .3em 1em;
        }
        .dropdownList p:hover {
            background: lightgray;
        }

    .savedCitiesWrapper {
        background: rgba(255, 255, 255, 0.527);
        width: 100%;
        max-width: 500px;
        padding: .5em;
        border-radius: 20px;
    }

    .savedCities {
        display: flex;
        gap: .5em;
        padding: .5em 0;
        flex-wrap: wrap;
    }
        .savedCities p {
            padding: .5em;
            background: rgb(235, 235, 235);
            border-radius: 20px;
            cursor: pointer;
            text-transform: capitalize;
        }

    .weather {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        background: rgb(17, 14, 61);
        border-radius: 15px;
        gap: .5em;
        padding: 1em;
        color: white;
        height: 100%;
        position: relative;
    }

    .weatherIcon {
        width: 10rem;
        transform: translateY(-50px);
        margin-bottom: -50px;
    }

    .upcomingDays {
        display: flex;
        flex-direction: column;
        gap: .5em;
        width: 100%;
        max-width: 400px;
    }

    .upcomingDays .day {
        background: rgba(255, 255, 255, 0.11);
        display: flex;
        align-items: center;
        padding: .5em 1em;
        border-radius: 20px;
        gap: 1em;
    }
        .forecastIcon {
            width: 3.5rem;
        }
        .upcomingDays .day p {
            min-width: 6em;
        }

        .upcomingDays .day div {
            display: flex;
            align-items: center;
        }

    .forecastIcon {
        display: inline-block;
    }
    .wind {
        width: 2rem;
    }

    .localization {
        font-size: 1.3rem;
    }

    .temperature {
        font-size: 5rem;
    }

    .desc {
        text-transform: capitalize;
    }

    .addCityIcon {
        font-size: 2rem;
        position: absolute;
        right: .7em;
        cursor: pointer;
    }

    .slide-enter-active, .slide-leave-active {
        transition: 300ms;
    }

    .slide-enter-to, .slide-leave-from {
        transform: none;
    }

    .slide-enter-from, .slide-leave-to {
        transform: translateX(-100%);
    }

    .rainForecast {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        gap: 1.3em;
    }
    .columnContainer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
        .columnWrapper {
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;

        }
        .columnScale {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            color: gray;
        }
        .column {
            background: rgb(78, 169, 255);
            width: 1em;
            border-radius: 10px;
            min-height: 2px;
        }





@media only screen and (min-width: 800px) {
    .weather {
        height: 100%;
        width: 30%;
        border-radius: 0px;
        border-radius: 20px;
    }
    .listOfCities {
        height: 100%;
        width: 70%;
        border-radius: 0px;
        border-radius: 20px;
    }
    .wrapper {
        padding: 0px;
        flex-direction: row;
        padding: 1em;
        box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.02),
        0px 0px 5.3px rgba(0, 0, 0, 0.028),
        0px 0px 10px rgba(0, 0, 0, 0.035),
        0px 0px 17.9px rgba(0, 0, 0, 0.042),
        0px 0px 33.4px rgba(0, 0, 0, 0.05),
        0px 0px 80px rgba(0, 0, 0, 0.07);
        }
    .container {
        background: rgb(17, 14, 61);
        min-height: 100vh;
        align-items: center;
    }
    .row {
        background: transparent;
        color: black;
    }

    .upcomingDays .day {
        background: rgba(255, 255, 255, 0.527);
    }
}

</style>