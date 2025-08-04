<script setup>
import background5 from '@/assets/img/backgroundfive.jpg'
import background6 from '@/assets/img/backgroundsix.jpg'
import background3 from '@/assets/img/backgroundthree.jpg'
import background2 from '@/assets/img/backgroundtwo.jpg'
import { computed, onMounted, ref } from 'vue'

const images = [background2, background3, background5, background6]
const currentIndex = ref(0)

const isLargeScreen = ref(false)

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
})

const backgroundImage = computed(() =>
  isLargeScreen.value ? '' : `url(${images[currentIndex.value]})`,
)
</script>

<template>
  <div>
    <section class="sectionintro stripe-background" :style="{ backgroundImage }">
      <header class="header" role="navigation">
        <a class="portfoliolink" href="https://portfolio.mutalibb.xyz" aria-label="Go to Portfolio">
          <div>Portfolio</div>
        </a>

        <a class="portfoliolink" href="#recentwork" aria-label="Go to Recent Work">
          <div>Other Works</div>
        </a>
      </header>

      <main>
        <div class="introprofile">
          <h1>
            Hi, I'm Mutalibb <br />
            A Software Developer
          </h1>

          <p class="introtext">I build web applications and mobile apps</p>
        </div>

        <a href="https://portfolio.mutalibb.xyz" aria-label="View my portfolio">
          <div class="portfoliobutton">View Portfolio</div>
        </a>
      </main>
    </section>

    <section class="sectionabout">
      <div>
        <h2 class="recentwork">About Me</h2>
        <p class="recenttext">
          I am a Software developer with experience in creating responsive and user-friendly web and
          mobile applications, i have worked on various projects, developing both frontend and
          backend components. I am proficient in HTML, CSS, JavaScript, and various frameworks such
          as Vue.js and React. I am passionate about creating efficient and scalable web
          applications that provide a great user experience.
        </p>
      </div>

      <div>
        <p class="recentwork" id="recentwork">Recent Work</p>
        <div class="work">
          <a
            class="worklink"
            href="https://clancircle.mutalibb.xyz"
            aria-label="View Clan Circle project"
          >
            <div class="imagetitle">clan circle</div>
            <div class="workbox">
              <div class="imagebody">
                <img
                  src="@/assets/img/clancircle.png"
                  alt="Clan Circle App Screenshot"
                  class="image"
                />
              </div>

              <div class="imagetext">
                A mobile app that helps maximize profits, and earn crypto-currency by completing
                simple task
              </div>
            </div>
            <div class="footnote">Mobile App</div>
          </a>

          <a class="worklink" href="https://blogit.mutalibb.xyz" aria-label="View BlogIt project">
            <div class="imagetitle">blogIt</div>
            <div class="workbox">
              <div class="imagebody">
                <img src="@/assets/img/blogit.png" alt="BlogIt App Screenshot" class="image" />
              </div>
              <div class="imagetext">An Anonymouse web blog that allows you express yourself</div>
            </div>
            <div class="footnote">Desktop App</div>
          </a>

          <a
            class="worklink"
            href="https://rokonote.mutalibb.xyz"
            aria-label="View Roko Note project"
          >
            <div class="imagetitle">Roko Note</div>
            <div class="workbox">
              <div class="imagebody">
                <img src="@/assets/img/rokonote.png" alt="Roko Note App Screenshot" class="image" />
              </div>
              <div class="imagetext">
                A note taking web App that allows you write down your thoughts
              </div>
            </div>
            <div class="footnote">Desktop App</div>
          </a>
        </div>
      </div>
    </section>
    <div class="footer">&copy; 2023 Mutalibb</div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.stripe-background {
  background-image: repeating-linear-gradient(
    45deg,
    #f0f0f0,
    #f0f0f0 10px,
    #ffffff 10px,
    #ffffff 20px
  );

  background-size: cover;
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
  background-color: white;
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
  background-clip: text;
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  text-align: center;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.822);
}

h1 {
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-shadow: 1px white;
  -webkit-text-stroke: 1px black;
}
.introtext {
  color: white;
  font-size: 12px;
  width: 70%;
  text-align: center;
  margin: auto;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.63);
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
  align-items: center;
  background-color: rgba(211, 211, 211, 0.39);
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
  background-color: lightgray;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.658);
  width: 24rem;
  height: 14rem;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-around;
}
.worklink:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
.workbox {
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
}
.imagebody {
  width: 40%;
  height: 80%;
  padding: 0 7px;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.imagetitle {
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  margin-left: 5%;
  padding: 1px 0;
  height: 10%;
}
.imagetext {
  font-size: 12px;
  text-align: left;
  width: 60%;
  padding: 1px;
  overflow: hidden;
  width: 98;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: 100%;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.753);
}
.footnote {
  color: gray;
  font-weight: 800;
  height: 10%;
  padding-bottom: 15px;
}
.footer {
  width: 100%;
  height: 110px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 800;
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

/* Media query for large screens (e.g., 1024px and above) */
@media (max-width: 600px) {
  .worklink {
    width: 16rem;
  }
}
</style>
