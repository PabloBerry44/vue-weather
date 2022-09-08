<template>
    <main>
        <div class="container">
            <h1>{{title}}</h1>
            <form @submit.prevent="authorize(), $emit('openWeather', username, userLoggedIn)" class="loginForm">
                <label for="login">Login:</label>
                <input type="text" v-model='inputLogin'>
                <label for="password">Password:</label>
                <input type="password" v-model='inputPass'>
                <label v-if="registration" for="repeatPassword">Repeat password</label>
                <input v-if="registration" type="password" v-model='inputPassRepeat'>
                <p class="wrongMessage" v-if="faultMessage.length > 0">{{faultMessage}}</p>
                <button type="submit">Submit</button>
            </form>
            <p @click="toggleForm()" class="toggleForm">{{toggleTitle}}</p>

            <Transition name='fade'>
                <p v-if="toastVisible" class="toast" >Account created!</p>
            </Transition>
        </div>
    </main>
</template>

<script setup>

import { ref } from 'vue'

const registration = ref(false)
const title = ref('Login to weather')
const toggleTitle = ref("Don't have an account?")
const faultMessage = ref('')
const toastVisible = ref(false)

const inputLogin = ref('')
const inputPass = ref('')
const inputPassRepeat = ref('')

const username = ref('')
const userLoggedIn = ref(false)

const props = defineProps({
    users: Array
})

const users = props.users

const toggleForm = () => {
    registration.value = !registration.value
    title.value = title.value === 'Login to weather' ? 'Create an account' : 'Login to weather'
    toggleTitle.value = toggleTitle.value === "Don't have an account?" ? 'Already registered? ' : "Don't have an account?"
    faultMessage.value = ''
    inputLogin.value = ''
    inputPass.value = ''
    inputPassRepeat.value = ''
}

const saveValues = () => {
    window.localStorage.setItem('users', JSON.stringify(users))
}

const authorize = () => {
    if(registration.value) {
        for (const user of users) {
            if(user.login == inputLogin.value) {
                faultMessage.value = 'User already exists!'
                return false
            }
        }
        faultMessage.value = ''
        if(inputPass.value == inputPassRepeat.value) {
                    users.push({
                        login: inputLogin.value,
                        pass: inputPass.value,
                        savedCities: [],
                        celsius: false,
                        mph: true
                    })
                    toastVisible.value = true
                    setTimeout(()=> {toastVisible.value = false}, 1500)
                    faultMessage.value = ''
                    saveValues()
        }
        else {
            faultMessage.value = "Passwords don't match!"
        }
    }
    else {
        for (const user of users) {
            if(user.login == inputLogin.value) {
                if(user.pass == inputPass.value) {
                    //open weather app with username as parameter
                    username.value = user.login
                    userLoggedIn.value = true
                    return true
                }
            }
            else {
                faultMessage.value = 'Wrong login or password!'
            }
        }
    }
}

</script>

<style scoped>

    main {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgb(17, 14, 61);
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1em;
        background: rgb(159, 159, 252);
        padding: 2em 1em;
        border-radius: 25px;
        box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.02),
        0px 0px 5.3px rgba(0, 0, 0, 0.028),
        0px 0px 10px rgba(0, 0, 0, 0.035),
        0px 0px 17.9px rgba(0, 0, 0, 0.042),
        0px 0px 33.4px rgba(0, 0, 0, 0.05),
        0px 0px 80px rgba(0, 0, 0, 0.07);
    }
    .loginForm {
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 300px;
    }
    .wrongMessage {
        color: rgb(202, 0, 0);
    }
    form input {
        background: rgb(247, 247, 247);
        border-radius: 10px;
        font-size: 1.3rem;
        padding: .5em;
        outline: none;
        box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.02),
        0px 0px 5.3px rgba(0, 0, 0, 0.028);
    }
    form label {
        margin-top: 1em;
    }
    form button {
        background: rgb(247, 247, 247);
        margin-top: 1em;
        width: 50%;
        font-size: 1.3rem;
        padding: .3rem;
        border-radius: 10px;
        margin-inline: auto;
        box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.02),
        0px 0px 5.3px rgba(0, 0, 0, 0.028);
        cursor: pointer;
        color: black;
    }
    .toast {
        position: absolute;
        background: rgb(206, 206, 255);
        padding: .5em;
        font-size: 1.5rem;
        border-radius: 15px;
        box-shadow:
        0px 0px 2.2px rgba(0, 0, 0, 0.02),
        0px 0px 5.3px rgba(0, 0, 0, 0.028),
        0px 0px 10px rgba(0, 0, 0, 0.035),
        0px 0px 17.9px rgba(0, 0, 0, 0.042),
        0px 0px 33.4px rgba(0, 0, 0, 0.05),
        0px 0px 80px rgba(0, 0, 0, 0.07);
    }
    .toggleForm {
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: 300ms;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>