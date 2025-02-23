<script setup></script>

<template>
  <div class="leftdisplay">
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/cleaning.jpeg" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren bottomshape">
      <img src="@/assets/img/demostore.jpeg" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren kite">
      <img src="@/assets/img/facebook.jpg" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapeone">
      <img src="@/assets/img/google.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapetwo">
      <img src="@/assets/img/myprofile.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapethree">
      <img src="@/assets/img/rokonote.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/wiiapp.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/circle.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/ogold.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapeone">
      <img src="@/assets/img/ocash.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/rokonote.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapeone">
      <img src="@/assets/img/wiiapp.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/guessgame.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren shapethree">
      <img src="@/assets/img/blogit.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren roundshape">
      <img src="@/assets/img/profileblue.png" alt="Image" class="leftimage" />
    </div>
    <div class="leftdisplaychildren bottomshape">
      <img src="@/assets/img/blogit.png" alt="Image" class="leftimage" />
    </div>
  </div>
</template>

<style scoped>
.leftdisplay {
  height: 100vh;
  position: absolute;
  width: 25rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.leftdisplaychildren {
  width: 4rem;
  height: 4rem;
  margin: 1em;
  background-color: rgba(0, 0, 0, 0.466);
  animation: leftDisplayAnimation 2s linear;
  animation-fill-mode: forwards;
  opacity: 0;
}

.leftdisplaychildren:hover {
  background-color: antiquewhite;
  padding: 5px;
}
.roundshape {
  border-radius: 50%;
  animation-delay: 2s;
}
.bottomshape {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  animation-delay: 4s;
}

.kite {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation-delay: 3s;
}
.shapeone {
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 90%;
  border-top-left-radius: 20%;
  border-top-right-radius: 30%;
  animation-delay: 2s;
}
.shapetwo {
  border-top-left-radius: 50%;
  animation-delay: 3s;
}
.shapethree {
  border-bottom-right-radius: 50%;
  animation-delay: 4s;
}
.leftimage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  opacity: 0.5;
}
@keyframes leftDisplayAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
