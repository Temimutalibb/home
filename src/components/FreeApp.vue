<script setup>
import blogit from '@/assets/img/blogit.png'
import background3 from '@/assets/img/icon.png'

import rokonote from '@/assets/img/rokonote.png'
</script>

<template>
  <div class="cover">
    <div class="boxheadertext">Free APP</div>
    <div class="freeapp">
      <a
        :style="{
          backgroundImage: `url(${rokonote})`,
          backgroundSize: cover,
        }"
        class="freeappsmallbox"
        href="https://roko.mutalibb.xyz"
        target="_blank"
      >
        <div>
          <div class="freeapptext">ROKO NOTE</div>
          <div class="freeappdescription">
            Easy app to take a note, and functionalities to make taking and sharing note easy
          </div>
        </div>
      </a>

      <a
        class="freeappsmallbox"
        :style="{
          backgroundImage: `url(${blogit})`,
          backgroundSize: cover,
        }"
        href="https://blogit.mutalibb.xyz"
        target="_blank"
      >
        <div>
          <div class="freeapptext">Blogit</div>
          <div class="freeappdescription">Read write and earn.</div>
        </div>
      </a>

      <a
        class="freeappsmallbox"
        :style="{
          backgroundImage: `url(${background3})`,
          backgroundSize: cover,
        }"
        href="https://clancircle.mutalibb.xyz"
        target="_blank"
      >
        <div>
          <div class="freeapptext">Clan Circle</div>
          <div class="freeappdescription">
            Get more people to interact with your social media contents and earn while interacting
            with peoples content
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: absolute;
  width: 100%;
  overflow-x: scroll;
  top: 29rem;
}

.cover::-webkit-scrollbar {
  display: none;
}
.freeapp {
  display: flex;
  align-items: center;
}

.freeappsmallbox {
  min-width: 21rem;
  width: 21rem;
  height: 13rem;
  background-color: rgb(0, 0, 0);
  margin: 1rem;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideInFromRight 1s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 7s;
  opacity: 0;
}

.freeapp a:hover {
  background-color: brown;
  padding: 15px;
  width: 30rem;
}

.freeapptext {
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

.freeappdescription {
  color: black;
  padding: 5px;
  font-weight: 800;
}
.boxheadertext {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  animation: fadeIn 3s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 6s;
  opacity: 0;
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
