<script setup>
import background5 from '@/assets/img/backgroundfive.jpg'
import background4 from '@/assets/img/backgroundfour.jpg'
import background1 from '@/assets/img/backgroundone.jpg'
import background6 from '@/assets/img/backgroundsix.jpg'
import background3 from '@/assets/img/backgroundthree.jpg'
import background2 from '@/assets/img/backgroundtwo.jpg'
import BottomFooter from '@/components/BottomFooter.vue'
import FirstStage from '@/components/FirstStage.vue'
import FreeApp from '@/components/FreeApp.vue'
import SmallBox from '@/components/SmallBox.vue'
import { computed, onMounted, ref } from 'vue'
import VueCookies from 'vue-cookies'

const images = [background1, background2, background3, background4, background5, background6]
const currentIndex = ref(0)
const currentTime = ref('')
const welcomeText = ref('')
const showElements = ref(true)
const inputText = ref('')
const userLocation = ref({ latitude: null, longitude: null })

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString()
}

const updateLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation.value = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
      },
      (error) => {
        console.error('Error getting location:', error)
      },
    )
  } else {
    console.error('Geolocation is not supported by this browser.')
  }
}

const toggleElements = () => {
  const cookieName = 'name'
  VueCookies.set(cookieName, inputText.value, '7d') // Set cookie for 7 days
  welcomeText.value = 'Hello'
  showElements.value = false
}

const checkAndSetCookie = () => {
  const cookieName = 'name'
  const cookieValue = VueCookies.get(cookieName)

  if (cookieValue) {
    inputText.value = cookieValue
    showElements.value = false
    welcomeText.value = 'Welcome back'
  }
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000) // Update time every second
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
  updateLocation()
  checkAndSetCookie()
})

const backgroundImage = computed(() => `url(${images[currentIndex.value]})`)
</script>

<template>
  <transition name="fade" @after-leave="removeElements">
    <div v-if="showElements">
      <FirstStage
        :currentTime="currentTime"
        v-model:inputText="inputText"
        :toggleElements="toggleElements"
      />
    </div>
  </transition>

  <div v-if="!showElements" class="bodybackground" :style="{ backgroundImage }">
    <div class="mainbox">
      <div class="welcometext">{{ welcomeText }} {{ inputText }}</div>
      <div class="location" v-if="userLocation.latitude && userLocation.longitude">
        from {{ userLocation.latitude }}, {{ userLocation.longitude }}
      </div>
      <div class="currenttime">
        {{ currentTime }}
      </div>
    </div>
    <SmallBox />
    <FreeApp />
    <div class="secondrow">
      <div class="bigbox">
        <div class="bigboxtext">Mentorship program</div>
        <div class="innertext">
          we mentor 10 people every year, put them on till they becomes expect
        </div>
        <div class="list">
          <ul>
            <li>
              You will gain valuable insights on how to effectively work as a team, fostering a
              collaborative environment.
            </li>
            <li>
              By the end of the program, you will have developed your own fully functional project.
            </li>
            <li>
              You will work on open-source projects with comprehensive guidance from our experienced
              mentors.
            </li>
            <li>
              Our dedicated team members will always be available to support you throughout your
              journey.
            </li>
          </ul>
        </div>
        <a class="request" href="mailto:temitopking@icloud.com" target="_blank">Request to join</a>
      </div>
      <div class="bigboxplain">
        <router-link to="/games" class="smallbox">
          <div>
            <div class="smallboxtext">Games</div>
            <div class="innertext">play games while waiting</div>
          </div>
        </router-link>
        <div class="smallbox">
          <div class="smallboxtext">Make money</div>
          <div class="innertext">
            We are a team of developers building projects, sharing ideas, and most importantly,
            making money
          </div>
          <a class="request" href="mailto:temitopking@icloud.com" target="_blank"
            >Request to join</a
          >
        </div>
      </div>
    </div>
    <BottomFooter />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bodybackground {
  background-size: cover;
  background-position: center top 30%;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  animation: moveBackground 7s linear infinite;
  position: relative;
}

.mainbox {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.smallbox {
  width: 100%;
  background-color: rgb(0, 0, 0);
  align-items: center;
  justify-content: center;
  display: flex;
  align-self: baseline;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 3s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  opacity: 0;
  box-shadow: 1px 1px 1px 1px white;
}

.smallboxtext {
  background: linear-gradient(45deg, black, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  text-align: center;
}

.secondrow {
  margin: 3rem 0rem;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  align-items: center;
}

.bigbox {
  min-width: 21rem;
  width: 45%;
  height: 34rem;
  background-color: rgb(0, 0, 0);
  margin: 1rem 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 3s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  opacity: 0;
  text-align: center;
  box-shadow: 1px 1px 1px 1px white;
  padding: 1px;
}
.bigboxplain {
  min-width: 21rem;
  width: 45%;
  height: 34rem;
  margin: 1rem 0.5rem;
  margin-top: 0;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  animation: fadeIn 3s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  opacity: 0;
  text-align: center;
  padding: 1px;
  justify-content: space-around;
  align-items: first baseline;
}
.list {
  padding: 18px;
  font-size: 1rem;
  text-align: left;
}
.bigbox ul {
  list-style-type: square;
}
.bigbox li {
  padding: 4px;
}
.bigboxtext {
  background: linear-gradient(45deg, black, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  text-align: center;
  background-color: white;
}
.request {
  background-color: rgba(28, 28, 65, 0.459);
  border-radius: 25px;
  font-size: 1rem;
  color: white;
  padding: 7px;
  margin: 8px;
  cursor: pointer;
}

.request:hover {
  background-color: rgba(28, 28, 65, 0.616);
}
.innertext {
  font-weight: 900;
  padding: 5px;
}

.welcometext {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: auto;
  animation: slideInFromRight 1s ease-out;
  animation-delay: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}
.location {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.currenttime {
  padding: 1px;
  font-size: 25px;
  text-align: center;
  font-weight: 1000;
  color: white;
}

.small-screen-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
  z-index: 1000;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveBackground {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
