<template lang="pug">
LaptopHeader(v-if='!mobileMode')
LaptopMenu(v-if='!mobileMode')

MobileHeader(
  v-if='mobileMode' 
  @expand='expand = true' 
  @close='expand = false'
  :expandProps='expand')
  
v-expand-transition
  MobileMenu(
    v-if='mobileMode && expand' 
    @close='onClose')
      
v-row(no-gutters="").px-10.px-sm-14.mx-auto.article.mt-0
  v-col(cols='12')
    slot
</template>

<script setup>
const expand = ref(false)

const onClose = () => {
  expand.value = false
}
</script>

<style lang="sass" scoped>

@media (min-width: 600px)
  .px-sm-16
    padding-right: 100px !important
    padding-left: 100px !important

.article
  position: absolute
  
@media screen and (max-width: 960px) and (min-width: 0px)
  .article
    top: 150px


</style>
