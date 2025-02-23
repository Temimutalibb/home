<template>
  <div class="firststagebackground">
    <div class="bitmoji">
      <img src="@/assets/img/bitmoji.jpg" alt="Image" class="bitimage" />
    </div>
    <div class="currenttime">
      {{ currentTime }}
    </div>
    <div class="welcometext">Welcome! <span>I'm Mutalibb. What can I call you? </span></div>
    <input
      class="input"
      v-model="localInputText"
      placeholder="What's your name"
      @input="updateInputText"
    />
    <button class="firstbutton" @click="toggleElements">continue</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  currentTime: String,
  inputText: String,
  toggleElements: Function,
})

const emit = defineEmits(['update:inputText'])

const localInputText = ref(props.inputText)

const updateInputText = () => {
  emit('update:inputText', localInputText.value)
}

watch(
  () => props.inputText,
  (newVal) => {
    localInputText.value = newVal
  },
)
</script>

<style scoped>
.firststagebackground {
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bitmoji {
  width: 7rem;
  height: 7rem;
  background-color: blue;
  border-radius: 50%;
  animation: slideInFromTop 1s ease-out;
}
.bitimage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.currenttime {
  padding: 1px;
  font-size: 25px;
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
  animation: slideInFromRight 1s ease-out;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;
}
.input {
  width: 18rem;
  height: 3rem;
  font-size: 2rem;
  background: white;
  color: blue;
  text-align: center;
  border: none;
  animation: fadeIn 3s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  opacity: 0;
}

.firstbutton {
  background: linear-gradient(45deg, white, blue);
  width: 18rem;
  height: 3rem;
  font-size: 2rem;
  color: blue;
  text-align: center;
  border: none;
  margin: 9px;
  animation: fadeIn 3s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  opacity: 0;
}
.firstbutton:hover {
  background: linear-gradient(45deg, blue, white);
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
</style>
