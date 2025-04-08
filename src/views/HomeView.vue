<script setup>
import background5 from '@/assets/img/backgroundfive.jpg'
import background6 from '@/assets/img/backgroundsix.jpg'
import background3 from '@/assets/img/backgroundthree.jpg'
import background2 from '@/assets/img/backgroundtwo.jpg'

import { computed, onMounted, ref } from 'vue'

const images = [background2, background3, background5, background6]
const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
})

const backgroundImage = computed(() => `url(${images[currentIndex.value]})`)
</script>

<template>
  <div>
    <section class="sectionintro" :style="{ backgroundImage }">
      <div class="header">
        <a class="portfoliolink" href="https://portfolio.mutalibb.xyz">
          <div>Portfolio</div>
        </a>

        <a class="portfoliolink" href="#recentwork">
          <div>Other Works</div>
        </a>
      </div>

      <div class="introprofile">
        <h1>Hi, I'm Mutalibb</h1>
        <h1>A Software DEVELOPER</h1>
        <p class="introtext">I build web applications and mobile apps</p>
      </div>

      <a href="https://portfolio.mutalibb.xyz">
        <div class="portfoliobutton">View Portfolio</div>
      </a>
    </section>

    <section class="sectionabout">
      <div>
        <h2 class="recentwork">About Me</h2>
        <p class="recenttext">
          I am a Software developer with experience in creating responsive and user-friendly web
          applications, i have worked on various projects, developing both frontend and backend
          components. I am proficient in HTML, CSS, JavaScript, and various frameworks such as
          Vue.js and React. I am passionate about creating efficient and scalable web applications
          that provide a great user experience.
        </p>
      </div>

      <div>
        <p class="recentwork" id="recentwork">Recent Work</p>
        <div class="work">
          <a class="worklink" href="https://clancircle.mutalibb.xyz">
            <div class="workbox">
              <div class="imagebody">
                <img src="@/assets/img/clancircle.png" alt="Image" class="image" />
              </div>
              <p class="imagetitle">clan circle</p>
              <p class="imagetext">A mobile app that helps maximize profits</p>
            </div>
          </a>

          <a class="worklink" href="https://blogit.mutalibb.xyz">
            <div class="workbox">
              <div class="imagebody">
                <img src="@/assets/img/blogit.png" alt="Image" class="image" />
              </div>
              <p class="imagetitle">blogIt</p>
              <p class="imagetext">An Anonymouse web blog that allows you express yourself</p>
            </div>
          </a>
          <a class="worklink" href="https://rokonote.mutalibb.xyz">
            <div class="workbox">
              <div class="imagebody">
                <img src="@/assets/img/rokonote.png" alt="Image" class="image" />
              </div>
              <p class="imagetitle">Roko Note</p>
              <p class="imagetext">
                A note taking web App that allows you write down your thoughts
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.stripe-background {
  background-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'> <defs> <pattern id='stripes' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='rotate(45)'> <rect width='10' height='20' fill='lightgray' /><rect x='10' width='10' height='20' fill='white' /></pattern> </defs> <rect width='100%' height='100%' fill='url(%23stripes)' /> </svg>");
  background-size: auto;
  border: 1px solid #ccc;
}
.sectionintro {
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  animation: moveBackground 10s linear infinite;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding-bottom: 5rem;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 13rem;
  margin-left: auto;
  font-size: 14px;
}
.header div {
  color: black;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.39);
  padding: 5px;
}
.portfoliolink {
  text-decoration: none;
  color: black;
  font-weight: 600;
}
.introprofile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  text-align: center;
  line-height: 44px;
  margin-top: 19px;
  color: linear-gradient(45deg, blue, black);
  background: linear-gradient(45deg, blue, black);
  background-clip: text;
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  text-align: center;
  padding: 15px;
}

h1 {
  color: linear-gradient(90deg, blue, black);
  font-size: 35px;
  font-weight: bold;
}
.introtext {
  color: white;
  font-size: 12px;
  width: 70%;
  text-align: center;
  margin: auto;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.404);
}
.portfoliobutton {
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 8px;
  margin: auto;
  font-size: 12px;
  width: 7rem;
  text-align: center;
  font-weight: 600;
}
.portfoliobutton:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.sectionabout {
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: beige;
  align-items: center;
}

.recentwork {
  font-weight: 600;
  font-size: 20px;
  padding: 5px;
}
.recenttext {
  font-size: 14px;
  width: 70%;
  text-align: center;
  margin: auto;
  font-weight: 400;
  color: black;
}
.work {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
}
.worklink {
  text-decoration: none;
  color: black;
}
.workbox {
  width: 14rem;
  height: 14rem;
  border-radius: 5px;
  border: 1px solid black;
  line-height: 18px;
}
.imagebody {
  width: 90%;
  height: 70%;
  margin: auto;
  margin-top: 5%;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.imagetitle {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-left: 5%;
  padding: 1px 0;
}
.imagetext {
  font-size: 12px;
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
  padding: 1px 0;
  overflow: hidden;
  width: 98;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  max-height: 100%;
  display: block;
  font-weight: bold;
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
