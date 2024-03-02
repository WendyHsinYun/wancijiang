<template lang="pug">
v-row.fill-height.align-center
  v-col(cols='1')
  v-col(cols='5').textArea.d-flex.justify-center
    div.mx-auto.text-start
      p How did this happen? 
      p A friend dreamt of me,
      p I traveled to the Netherlands to visit her,
      p And there, I found true love,
      p As I was writing 'In Search of True Love'.
      br
      p I fell in love with a migrant worker,
      p While interviewing Indonesian migrant workers about love,
      p And observing my own life through participation, 
      p Within the realm of love.
    
  v-col(cols='5').d-flex.fill-height.align-center
    div.imgWrapper
      img.clip(
        src="https://res.cloudinary.com/dqq8y9ud4/image/upload/f_auto,q_auto/v1/wancijiang/entry"
        alt="entry page"
      )

  v-col(cols='1').fill-height.d-flex.align-end.justify-end
    button(@click='enter').me-16.mb-15 Enter

</template>


<script setup>
const enter = () => {
  navigateTo('/latest')
}
</script>

<style lang="sass" scoped>
.imgWrapper
  height: 50vh
  .clip
    height: 100%
    width: auto
    clip-path: inset(0% 30% 0% 15% round 12px)

button
  padding: 10px 20px
  background-color: $primary
  border-radius: 12px
  color: white
  opacity: 0
  animation: appear 1s ease-out 34s
  animation-fill-mode: forwards

.textArea
  line-height: 34px
  font-size: 16px
  p 
    white-space: nowrap
    overflow: hidden
    clip-path: inset(0 100% 0 0)
  p:nth-of-type(1)
    width: auto
    animation: typing 3s ease-out
    animation-fill-mode: forwards
  
  p:nth-of-type(2)
    width: auto
    animation: typing 3s ease-out 3s
    animation-fill-mode: forwards
  
  p:nth-of-type(3)
    width: auto
    animation: typing 3s ease-out 6s
    animation-fill-mode: forwards

  p:nth-of-type(4)
    width: auto
    animation: typing 4s ease-out 9s
    animation-fill-mode: forwards

  p:nth-of-type(5)
    width: auto
    animation: typing 3s ease-out 13s
    animation-fill-mode: forwards

  p:nth-of-type(6)
    width: auto
    animation: typing 3s ease-out 18s
    animation-fill-mode: forwards

  p:nth-of-type(7)
    width: auto
    animation: typing 3s ease-out 21s
    animation-fill-mode: forwards

  p:nth-of-type(8)
    width: auto
    animation: typing 4s ease-out 25s
    animation-fill-mode: forwards

  p:nth-of-type(9)
    width: auto
    animation: typing 5s ease-out 29s
    animation-fill-mode: forwards

@keyframes typing
  0%
    clip-path: inset(0 100% 0 0)
  50%
    clip-path: inset(0 60% 0 0)
  90% 
    clip-path: inset(0 20% 0 0)
  100%
    clip-path: inset(0 0 0 0)

@keyframes appear
  0%
    opacity: 0
  100%
    opacity: 1

  
</style>