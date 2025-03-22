<template>
  <div class="cover">
    <a href="https://dev.to/mutalibb" target="_blank">
      <img src="@/assets/bottomimg/dev.png" alt="Image" class="image" />
    </a>
    <a href="#"> <img src="@/assets/bottomimg/facebook.jpg" alt="Image" class="image" /></a>
    <a href="https://github.com/temimutalibb" target="_blank">
      <img src="@/assets/bottomimg/github.jpg" alt="Image" class="image"
    /></a>
    <a href="#"> <img src="@/assets/bottomimg/hive.jpg" alt="Image" class="image" /></a>
    <a href="#"> <img src="@/assets/bottomimg/instagram.jpg" alt="Image" class="image" /></a>
    <a href="https://x.com/mutalibb" target="_blank">
      <img src="@/assets/bottomimg/twitter.jpg" alt="Image" class="image"
    /></a>
    <a href="https://roko.mutalibb.xyz/" target="_blank">
      <img src="@/assets/bottomimg/rokonote.png" alt="Image" class="image"
    /></a>
  </div>
</template>

<style scoped>
.cover {
  position: fixed;
  width: 100%;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background: linear-gradient(45deg, black, darkblue);
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  align-items: last-baseline;
}

.image {
  width: 2rem;
  height: 2rem;
  color: white;
  border-radius: 50%;
}
.image:hover {
  background: linear-gradient(45deg, darkblue, black);
}
</style>
