<template>
    <Login 
      v-if="!userLoggedIn"
      :users="users"
      @openWeather="openWeather"/>
    <Weather
      :username="username"
      v-if="userLoggedIn"
      :users="users"
      @addCity="savePlace"/>
</template>

<script setup>
    import { ref } from 'vue'
    import Login from './components/Login'
    import Weather from './components/Weather'

    const username = ref('')
    const userLoggedIn = ref(false)

    const users = ref([
    {
        login: 'admin',
        pass: 'admin',
        savedCities: []
    }])

    const getValues = () => {
        if(window.localStorage.getItem('users') == null) return
        users.value = JSON.parse(window.localStorage.getItem('users'))
    }; getValues()

    const saveValues = () => {
        window.localStorage.setItem('users', JSON.stringify(users.value))
    }

    const openWeather = (passedUsername, authorized) => {
        if(authorized) {
            username.value = passedUsername
            userLoggedIn.value = true
        }

    }

    const savePlace = (login, givenCity) => {
        const index = getIndex(login)

        if(
          users.value[index].savedCities.length < 10 &&
          !users.value[index].savedCities.includes(givenCity)) {
            users.value[index].savedCities.push(givenCity)
        }

        saveValues()
    }

    const getIndex = (login) => {
        let i=0
        for (const user of users.value) {
            if(user.login === login) {
                return i
            }
            i++
        }
    }

</script>

<style scoped>

</style>