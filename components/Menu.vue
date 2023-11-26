<template lang="pug">
v-row.d-flex.align-end(style='height: 100px')
  v-col(cols='12')
    .menuContainer.text-center.h-100.d-flex.align-center
      NuxtLink.menuItem.mainMenuItem(
        v-for='(option, key, index) in menuOptions' 
        :key='key'
        :to="localePath(option.path)"
        @click='selectMenu(key)'
      ) {{ $t(`${option.mainMenu}`) }}

v-row.d-flex.align-center.justify-center
  v-col(cols='11')
    v-divider

v-expand-transition
  v-row.d-flex(no-gutters style='height: 100px')
    v-col(cols='12')
      .subMenuContainer.d-flex.align-center.justify-space-around
        NuxtLink.menuItem.text-center.py-5.subMenuItem( 
          v-for="(subMenuItem, subMenuIndex) in selectedMenu" 
          :key="subMenuIndex"
        ) {{ $t( subMenuItem.title ) }}

</template>

<script setup>
const localePath = useLocalePath();

const selected = ref('');
const selectedMenu = ref([]);

const selectMenu = (key) => {
  selected.value = key;
};

watch(
  () => selected.value,
  (newValue) => {
    selectedMenu.value = menuOptions[selected.value].subMenu;
  },
);
</script>

<style lang="sass">
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
  font-size: 14px
  width: 280px
</style>
