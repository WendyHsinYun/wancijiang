<template lang="pug">
DesktopHeader(v-if='!mobileMode')
MobileHeader(
  v-if='mobileMode' 
  @expand='expand = true' 
  @close='expand = false'
  :expandProps='expand')

DesktopMenu(v-if='!mobileMode')
v-expand-transition
  MobileMenu(
    v-if='mobileMode && expand' 
    @close='onClose')
      
v-row(no-gutters).article.px-10.px-sm-14.mx-auto.mt-3
  v-col(cols='12')
    slot

  v-col(cols='auto' @click='toTop' style='cursor: pointer').mb-10.mx-auto
    p(style='color:rgba(0, 0, 0, 0.5)').text-center
      v-icon(:icon="mdiChevronTripleUp")
    p.mt-2.text-caption.text-line(style='color:rgba(0, 0, 0, 0.5)') Top
</template>

<script setup>
import { mdiChevronTripleUp } from '@mdi/js';
const expand = ref(false)
const width = ref(window.innerWidth)

const onClose = () => {
  expand.value = false
}

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const updateWidth = () => {
  width.value = window.innerWidth
}

const mobileMode = computed(() => {
  return width.value < 960
})

window.addEventListener('resize', updateWidth)
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
