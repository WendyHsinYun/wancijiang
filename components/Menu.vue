<template lang="pug">
v-container
  v-row 
    v-col(cols='12')
      .menuContainer.text-center.h-75.d-flex.align-center
        NuxtLink.menu-item(
          v-for='(item, index) in menuItems' 
          :key='index' 
          :to='localePath(item.to)'
          @click='selectedMenuItem = index' 
          :class="{ 'selected': selectedMenuItem === index }")
          | {{ item.label }}
      v-divider
  v-row 
    v-col(cols='12')
      .subMenuContainer.text-center.h-75.d-flex.align-center
        .menu-item(
          v-for='(item, index) in subMenuItems[selectedMenuItem]' 
          :key='index'
          )
          | {{ item.label }}
</template>

<style lang="sass">
.menuContainer
  color: #0F0F0F
  flex-direction: row

.subMenuContainer
  color: #0F0F0F
  padding: 0px 200px

.menu-item
  position: relative
  padding: 10px 20px
  text-decoration: none
  cursor: pointer 
  width: 100%

.selected
  color: blue

.submenu
  display: none
  top: 100%
  left: 0
  background-color: #555
  border: 1px solid white
  flex-direction: row
  width: 100%

.open, .submenu 
  display: flex
  width: 100%

.submenu-item
  padding: 10px 15px
  text-decoration: none
  display: block
  width: 100%
</style>


<script setup>
const localePath = useLocalePath();

const menuItems = ref([
  { label: 'Current Work', to: '/' },
  { label: 'Previous Work' },
  { label: 'Field Projects' },
  { label: 'About me', to: '/about'},
])

const subMenuItems = ref([
  [
    { label: '' }
  ],
  [
    { label: '移工怎麼都在直播' },
    { label: 'Sub Product 2' },
    { label: 'Sub Product 3' },
    { label: 'Sub Product 4' },
  ],
  [
    { label: 'Sub Service 1' },
    { label: 'Sub Service 2' },
    { label: 'Sub Service 3' },
    { label: 'Sub Service 4' },
  ],
  [
    { label: '' }
  ],
]);

const selectedMenuItem = ref(0);
</script>

