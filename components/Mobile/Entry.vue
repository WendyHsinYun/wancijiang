<template lang="pug">
v-row(no-gutters).fill-height.align-start.d-flex.d-md-none
  v-col(cols='12').pt-16.mt-16
    div.textArea.mx-auto.text-start.d-flex.d-md-none
      p {{ currentText }}

    div.d-flex.justify-center.pt-16.d-md-none
      button(v-show='showButton' @click='enter') Enter

div.imgWrapper.d-block.d-md-none
  img.clip(
    src="https://res.cloudinary.com/dqq8y9ud4/image/upload/f_auto,q_auto/v1/wancijiang/entry"
    alt="entry page"
  )
</template>

<script setup>
const textArray = ref([ 
  "How did this happen? ",
  "A friend dreamt of me, I traveled to the Netherlands to visit her,",
  "And there, I found true love, As I was writing 'In Search of True Love'.",
  "I fell in love with a migrant worker, While interviewing Indonesian migrant workers about love, And observing my own life through participation, ",
  "Within the realm of love.",
])

const currentText = ref('')

const charSpeed = 80
const sentencePause = 1000
const lastCharPause = 1000

let currentTextIndex = 0
let charIndex = 0

const showButton = ref(false)

const initText = () => {
  if (currentTextIndex + 1 < textArray.value.length) { 
    currentTextIndex = (currentTextIndex + 1) % textArray.value.length;
    charIndex = 0;
    displayNextChar();
  }
}

const displayNextChar = () => {
  if (charIndex < textArray.value[currentTextIndex].length) {
    currentText.value += textArray.value[currentTextIndex].charAt(charIndex++);
    setTimeout(displayNextChar, charSpeed); 
  } else {
    prepareNextSentence();
  }
}

const prepareNextSentence = () => {
  if (currentTextIndex + 1 < textArray.value.length) { 
    setTimeout(() => {
      currentText.value = ''; 
      setTimeout(initText, sentencePause);
    }, lastCharPause);
  }else {
    setTimeout(() => {
      showButton.value = true;
    }, lastCharPause);
  }
}

onMounted(() => {
  displayNextChar() 
})

const enter = () => {
  navigateTo('/latest')
}
</script>

<style lang="sass" scoped>
.textArea
  line-height: 2.5rem
  width: 60%
  position: absolute
  z-index: 2
  left: 15%
  p
    white-space: wrap
    overflow: hidden
    font-size: 28px
    color: white

button
  padding: 5px 20px
  border: 1px solid white
  border-radius: 12px
  color: white
  position: absolute
  z-index: 2
  top: 40%
  
.imgWrapper
  position: absolute
  top: 0%
  height: 100%
  width: 100%
  overflow: hidden
  .clip
    width: 400%
    transform: translate(-40%)
</style>