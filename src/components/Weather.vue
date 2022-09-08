<template>

    <div class="container">

        <!-- Menu for mobile devices, slide from left -->
        <Transition name="slide">
            <div class="menu" v-if="!largeDevice() && showMenu">
                <div class="leftSection">
                    <div class="row">
                        <p class="welcome">Hello {{props.username}}!</p>
                        <ion-icon name="close-outline" @click="showMenu = !showMenu" class="icon"></ion-icon>
                    </div>

                    <form @submit.prevent="getForecast(searchValue), showMenu = false">
                        <input type="search" placeholder="Search for city" v-model="searchValue">
                        <ion-icon @click="getForecast(searchValue), showMenu = false" style="font-size:2rem; cursor: pointer;" name="search-outline"></ion-icon>
                    </form>

                    <div class="savedCitiesWrapper" v-if="currentUser.savedCities.length > 0">
                        <p>Your saved places</p>
                        <div class="savedCities">
                            <p v-for="city in currentUser.savedCities" @click="getForecast(city), showMenu = false">{{city}}</p>
                        </div>
                    </div>

                    <div class="options">
                        <div class="row toggleRow" @click="$emit('toggleValue', props.username, 'deg'), getForecast(currentCity)">
                            <Transition name="slide-up">
                                <div v-if="!currentUser.celsius" class="value">Fahrenheit</div>
                                <div v-else class="value">Celsius</div>
                            </Transition>
                        </div>
                        <div class="row toggleRow" @click="$emit('toggleValue', props.username, 'speed'), getForecast(currentCity)">
                            <Transition name="slide-up">
                                <div v-if="!currentUser.mph" class="value" >km/h</div>
                                <div v-else class="value">mph</div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>  
        </Transition>

        <div class="wrapper">

            <!-- Welcome row displayed on mobile devices -->
            <div class="row" v-if="!largeDevice()">
                <p class="welcome">Hello {{props.username}}!</p>
                <ion-icon name="menu-outline" @click="showMenu = !showMenu" class="icon"></ion-icon>
            </div>

            <div class="leftSection" v-if="largeDevice()">
                <!-- Welcome row displayed on larger devices -->
                <div class="row">
                    <p class="welcome">Hello {{props.username}}!</p>

                    <div class="options desktopOptions">
                        <div class="row toggleRow" @click="$emit('toggleValue', props.username, 'deg'), getForecast(currentCity)">
                            <Transition name="slide-up">
                                <div v-if="!currentUser.celsius" class="value">Fahrenheit</div>
                                <div v-else class="value">Celsius</div>
                            </Transition>
                        </div>                        
                        <div class="row toggleRow" @click="$emit('toggleValue', props.username, 'speed'), getForecast(currentCity)">
                            <Transition name="slide-up">
                                <div v-if="!currentUser.mph" class="value" >km/h</div>
                                <div v-else class="value">mph</div>
                            </Transition>
                        </div>
                    </div>
                </div>

                <!-- Search for cities for desktop-->
                <form @submit.prevent="getForecast(searchValue)">
                    <input type="search" placeholder="Search for city" v-model="searchValue">
                    <ion-icon @click="getForecast(searchValue), showMenu = false" style="font-size:2rem; cursor: pointer;" name="search-outline"></ion-icon>
                </form>

                <!-- Saved cities for desktop -->
                <div class="savedCitiesWrapper" v-if="currentUser.savedCities.length > 0">
                    <p>Your saved places</p>
                    <div class="savedCities">
                        <p v-for="city in currentUser.savedCities" @click="getForecast(city)">{{city}}</p>
                    </div>
                </div>

                <!-- Five day forecast for upcoming days DESKTOP -->
                <div class="upcomingDays">
                    <div class="day" v-for="forecastDay in forecast" @click="forecastDay.showSecondary = !forecastDay.showSecondary">
                        <Transition name="slide-up">
                            <div class="mainData" v-if="!forecastDay.showSecondary">
                                <p>{{forecastDay.name}}</p>
                                <div style="width: 5.5em;">
                                    <img :src="forecastDay.iconUrl" :alt="forecastDay.weather" class="forecastIcon">
                                    {{forecastDay.temp}}
                                </div>
                                <div style="width: 9em; margin-left: 1em;">
                                    <img src="./wind.webp" alt="wind:" class="forecastIcon wind">
                                    <p>{{forecastDay.windSpeed}}
                                        <span v-if="currentUser.mph" style="font-size: .8rem; color: gray;">mph</span>
                                        <span v-else style="font-size: .8rem; color: gray;">km/h</span>
                                    </p>
                                </div>
                            </div>

                            <div class="secondaryData" v-else>
                                <p>Pressure: {{forecastDay.pressure}}<span style="font-size: .8rem; color: gray;"> hPa</span> | Humidity: {{forecastDay.humidity}}%</p>
                            </div>
                        </Transition>
                    </div>
                </div>

            </div>

            <!-- Weather section -->
            <div class="weather">
                <ion-icon v-if="!currentUser.savedCities.includes(weather.city)" name="add-outline" class="addCityIcon" @click="$emit('addCity', props.username, weather.city)"></ion-icon>
                <ion-icon v-if="currentUser.savedCities.includes(weather.city)" name="remove-outline" class="addCityIcon" @click="$emit('removeCity', props.username, weather.city)"></ion-icon>

                <p class="localization">{{weather.city}}, {{weather.country}}</p>
                <p class="temperature">{{weather.temp}}</p>
                <img :src="weather.iconUrl" class="weatherIcon">
                <p class="desc">{{weather.desc}}</p>
                <p class="maxMin">H:{{weather.tempMax}}° L: {{weather.tempMin}}°</p>

                <!-- Five day forecast for upcoming days MOBILE -->
                <div class="upcomingDays" v-if="!largeDevice()">
                    <div class="day" v-for="forecastDay in forecast" @click="forecastDay.showSecondary = !forecastDay.showSecondary">
                        <Transition name="slide-up">
                            <div class="mainData" v-if="!forecastDay.showSecondary">
                                <p>{{forecastDay.name}}</p>
                                <div style="width: 5.5em;">
                                    <img :src="forecastDay.iconUrl" :alt="forecastDay.weather" class="forecastIcon">
                                    {{forecastDay.temp}}
                                </div>
                                <div style="width: 9em; margin-left: 1em;">
                                    <img src="./wind.webp" alt="wind:" class="forecastIcon wind">
                                    <p>{{forecastDay.windSpeed}}
                                        <span v-if="currentUser.mph" style="font-size: .8rem; color: gray;">mph</span>
                                        <span v-else style="font-size: .8rem; color: gray;">km/h</span>
                                    </p>
                                </div>
                            </div>

                            <div class="secondaryData" v-else>
                                <p>Pressure: {{forecastDay.pressure}}<span style="font-size: .8rem; color: gray;"> hPa</span> | Humidity: {{forecastDay.humidity}}%</p>
                            </div>
                        </Transition>
                    </div>
                </div>

                <!-- RAIN DIAGRAM -->
                <div class="rainForecast">
                    <p>Todays probability of rain:</p>
                    <div class="columnContainer">
                        <div class="columnWrapper mm">
                            <p style="color: gray;">%</p>
                            <div class="columnScale ">
                                <p>100</p>
                                <p>50</p>
                                <p>0</p>
                            </div>
                        </div>

                            <div class="columnWrapper" v-for="data of nextFiveHour">
                                <div class="column" :style="{height: (data.pop*1.6)+'px'}"></div>
                                <p>{{data.time}}</p>
                            </div>

                        <div class="columnWrapper">
                            <div class="columnScale">

                            </div>
                            <p style="color: gray;">hour</p>
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

const weather = ref({})
const searchValue = ref('')
const currentUser = ref()
const showMenu = ref(false)
const forecast = ref([])
const currentCity = ref('Rzeszów')
const nextFiveHour = ref([])
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for(let i=0; i<props.users.length; i++) {
    if(props.users[i].login == props.username) {
        currentUser.value = props.users[i]
    }
}

const largeDevice = () => {
    if(document.documentElement.clientWidth > 800)
    return true
}

const getForecast = async (givenName) => {

    currentCity.value = givenName
    const apiKey = '1d1192606d965909ab4f45aa700295af'
    searchValue.value = ''

    let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+givenName+"&appid="+apiKey+'&units=metric')
    const upcoming = await response.json()
    if(!response.ok) return

    forecast.value = []
    for (const item of upcoming.list) {
        if(item.dt_txt.includes('15:00:00')) {
            const date = item.dt_txt.substring(0,10)
            const day = (new Date(date)).getDay()

            const temp = currentUser.value.celsius ? item.main.temp : item.main.temp*1.8+32
            const windSpeed = currentUser.value.mph ? item.wind.speed*3.6/1.609344 : item.wind.speed * 3.6

            forecast.value.push({
                name: weekdays[day],
                temp: Math.round(temp)+'°',
                weather: item.weather[0].description,
                iconUrl: "https://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png",
                windSpeed: Math.round(windSpeed),
                showSecondary: false,
                pressure: item.main.pressure,
                humidity: item.main.humidity
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
    const temp = currentUser.value.celsius ? current.main.temp : current.main.temp*1.8+32

    weather.value = {
        country: current.sys.country,
        city: current.name,
        temp: Math.round(temp)+'°',
        desc: current.weather[0].description,
        tempMin: Math.round(current.main.temp_min),
        tempMax: Math.round(current.main.temp_max),
        iconUrl: "http://openweathermap.org/img/wn/"+current.weather[0].icon+"@2x.png"
    }
}
getForecast('Prague')

setInterval(()=> {
    getForecast(currentCity.value)
},60000)

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
        min-height: 100vh;
        overflow-x: hidden;
    }
    form {
        display: flex;
        align-items: center;
        width: max-content;
        gap: .5em;
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
            position: relative;
        }
        .menu .row {
            background: transparent;
            color: black;
        }
        .menu .row .icon {
            color: black;
        }
        .value {
            position: absolute;
            font-size: 1.3rem;
            cursor: pointer;
        }
        .toggleRow {
            margin-top: 1em;
            margin-bottom: 1em;
        }

    .desktopOptions {
        right: 7em;
        display: flex;
        width: 250px;
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
        align-items: stretch;
    }

    .welcome {
        font-size: 2rem;
        width: max-content;
    }

    .leftSection {
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
        width: 300px;
        margin-inline: auto;
        font-size: 1rem;
        padding: .5em;
        outline: none;
        background: rgb(236, 236, 236);
        border-radius: 30px;
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
        position: relative;
    }
        .weatherIcon {
            width: 10rem;
            transform: translateY(-50px);
            margin-bottom: -50px;
        }
        .addCityIcon {
            font-size: 2rem;
            position: absolute;
            right: .7em;
            cursor: pointer;
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
            cursor: pointer;
            height: 70px;
        }
            .secondaryData, .mainData {
                position: absolute;
            }
            .forecastIcon {
                width: 3.5rem;
            }
            .wind {
                width: 2rem;
            }
            .upcomingDays .day p {
                min-width: 6em;
            }
            .upcomingDays .day div {
                display: flex;
                align-items: center;
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
            height: 220px;
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

        .mm {
            transform: translateY(-1.2em);
        }
        .column {
            background: rgb(78, 169, 255);
            width: 1em;
            border-radius: 10px;
            min-height: 2px;
        }

/* T R A N S I T I O N S */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
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

@media only screen and (min-width: 800px) {
    .weather {
        /* height: 100%; */
        width: 30%;
        border-radius: 0px;
        border-radius: 20px;
    }
    .leftSection {
        /* height: 100%; */
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