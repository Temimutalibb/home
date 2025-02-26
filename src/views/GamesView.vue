<script setup>
import TopHeader from '@/components/TopHeader.vue'
</script>

<template>
  <div class="container">
    <TopHeader />
    <div class="cover">
      <router-link to="/palindrome" class="smallbox">
        <div>
          <div class="smallboxtext">Palindrome</div>
        </div>
      </router-link>
      <router-link to="/games" class="smallbox">
        <div>
          <div class="smallboxtext"></div>
        </div>
      </router-link>
      <router-link to="/games" class="smallbox">
        <div>
          <div class="smallboxtext"></div>
        </div>
      </router-link>
      <router-link to="/games" class="smallbox">
        <div>
          <div class="smallboxtext"></div>
        </div>
      </router-link>
      <router-link to="/games" class="smallbox">
        <div>
          <div class="smallboxtext"></div>
        </div>
      </router-link>
      <router-link to="/games" class="smallbox">
        <div>
          <div class="smallboxtext"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
.container {
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.cover {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 1rem;
}
.smallbox {
  width: 30%;
  padding: 10px;
  height: 16.5rem;
  background-color: rgb(0, 0, 0);
  margin: 1rem;
  margin-top: 0;
  align-self: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
