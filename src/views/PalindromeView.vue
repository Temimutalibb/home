<script setup>
import TopHeader from '@/components/TopHeader.vue'
import { ref } from 'vue'

const textInput = ref('')
const correctText = ref(' is a palindrome')
const wrongText = ref(' is not a palindrome')
const result = ref('')

function output() {
  if (textInput.value === '') {
    alert('Please input a value')
  } else {
    let outputValue = textInput.value
    const outputRegex = outputValue.replace(/[^a-zA-Z0-9]/g, '')
    const outputSplit = outputRegex.split('')
    const outputJoin = outputSplit.join('').toLowerCase()
    const outputReverse = outputSplit.reverse().join('').toLowerCase()

    if (outputJoin === outputReverse) {
      let output = outputValue
      output += correctText.value
      result.value = output
      textInput.value = ''
    } else {
      let output = outputValue
      output += wrongText.value
      result.value = output
      textInput.value = ''
    }
  }
}
</script>
<template>
  <div class="container">
    <TopHeader />
    <div class="main">
      <div class="intro">
        This is one of the required project i did when taking JavaScript Algorithms and Data
        Structures course on
        <a href="https://www.freecodecamp.org/learn/" target="_blank">freeCodeCamp</a>
      </div>
      <h1>Is it a Palindrome?</h1>

      <section class="text-check">
        <h9>Enter in text to check for a palindrome:</h9>

        <input class="text-input" type="text" v-model="textInput" placeholder="Type here" />
        <button @click="output" id="check-btn">check</button>

        <div id="result">{{ result }}</div>
      </section>

      <div class="instruction">
        A palindrome is a word or sentence that's spelled the same way both forward and backward,
        ignoring punctuation, case, and spacing.
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
.intro {
  width: 65%;
  padding: 3px;
  height: auto;
  margin: auto;
  border-radius: 9px;
  box-shadow: 1px 1px 1px black;
  color: aqua;
  margin-top: 30px;
  font-size: 17px;
  margin-bottom: 15px;
}
.container {
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.main {
  text-align: center;
  height: 100vh;
  margin-top: 50px;
}
h1 {
  color: white;
  font-size: 35px;
}
.text-check {
  background-color: white;
  width: 80%;
  height: auto;
  margin: auto;
  border-radius: 8px;
  box-shadow: 1px 5px 2px blue;
}

h9 {
  padding: 8px;
  text-align: center;
  margin: 5px;
  display: block;
  font-size: 25px;
}
.text-input {
  border: none;
  outline: none;
  border-bottom: 2px solid purple;
  margin: auto;
  padding: 5px;
  align-self: center;
  font-size: 15px;
  display: block;
  width: 50%;
  overflow: hidden;
  margin-bottom: 10px;
}
#check-btn {
  background-color: purple;
  color: white;
  padding: 5px;
  border-radius: 25px;
  margin-bottom: 10px;
  width: 25%;
  font-size: 19px;
}

#result {
  text-align: center;
  font-size: 20px;
  color: blue;
  font-weight: heavy;
  padding: 20px;
}
.instruction {
  background-color: gray;
  width: 65%;
  padding: 3px;
  height: auto;
  margin: auto;
  border-radius: 9px;
  box-shadow: 1px 1px 1px black;
  color: aqua;
  margin-top: 30px;
  font-size: 27px;
}
</style>
