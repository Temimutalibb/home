<template>
  <router-link to="/">
    <div class="welcometext">Mutalibb</div>
  </router-link>
</template>

<style>
.welcometext {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  margin-left: 1rem;
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
.welcometext:hover {
  background: linear-gradient(45deg, black, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
