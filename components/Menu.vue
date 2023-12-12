<template lang="pug">
v-row.d-flex.align-end.justify-center(style='height: 100px')
  v-col(cols='10')
    .menuContainer.text-center.h-100.d-flex.align-center
      NuxtLink.menuItem.mainMenuItem(
        v-for='(option, key, index) in menuOptions' 
        :to="localePath(option.path)"
        :key='key'
        @click='selectMenu(option)'
      ) {{ $t(`${option.mainMenu}`) }}

v-row.d-flex.align-center.justify-center
  v-col(cols='10')
    v-divider

v-expand-transition
  v-row.d-flex.justify-center(no-gutters style='height: 130px')
    v-col(cols='10')
      div(v-if="subMenu === 'previous'").previous.d-flex.align-center.justify-space-around
        NuxtLink.menuItem.text-center.py-5.subMenuItem( 
            v-for="(option, key, index) in previousMenu" 
            :to="localePath(option.path)"
            :key="key"
          ) {{ $t( `${option.title}`) }}

      div(v-if="subMenu === 'research'").research.d-flex.align-center.justify-space-around
        NuxtLink.menuItem.text-center.py-5.subMenuItem( 
          v-for="(option, key, index) in researchMenu" 
          :to="localePath(option.path)"
          :key="key"
        ) {{ $t( `${option.title}`) }}

</template>

<script setup>
const localePath = useLocalePath();

const mainMenu = ref('latest');

const subMenu = ref('')

const selectMenu = (option) => {
  subMenu.value = option.name
};

const menuOptions = [
  {
    name: 'latest',
    mainMenu: 'mainMenu.latest',
    path: 'latest',
  },
  {
    name: 'previous',
    mainMenu: 'mainMenu.previous',
    path: '/previous/streaming',
  },
  {
    name: 'research',
    mainMenu: 'mainMenu.research',
    path: '/research/2016Indonesia',
  },
  {
    name: 'about',
    mainMenu: 'mainMenu.about',
    path: 'about',
  },
]

const previousMenu = [
  { title: 'subMenu.previous.streaming', path: '/previous/streaming' },
  { title: 'subMenu.previous.drinker', path: '/previous/drinker' },
  { title: 'subMenu.previous.celestial', path: '/previous/celestial' },
  { title: 'subMenu.previous.workList', path: '/previous/workList' },
]

const researchMenu = [
  { title: 'subMenu.research.2016Indonesia', path: '/research/2016Indonesia' },
  { title: 'subMenu.research.2017Tainan', path: '/research/2017Tainan' },
  { title: 'subMenu.research.2018Singapore', path: '/research/2018Singapore' },
  { title: 'subMenu.research.2019Indonesia', path: '/research/2019Indonesia' },
  { title: 'subMenu.research.2023Indonesia', path: '/research/2023Indonesia' },
  { title: 'subMenu.research.2023Netherlands', path: '/research/2023Netherlands' },
]

</script>

<style lang="sass" scoped>
.menuContainer
  color: #0F0F0F
  flex-direction: row

.subMenuContainer
  color: #0F0F0F

.menuItem
  position: relative
  text-decoration: none
  cursor: pointer
  width: 100%

.subMenuItem
  font-size: 12px
  width: 200px

a
  text-decoration: none
  color: $primaryText
  border-radius: 20%
</style>
