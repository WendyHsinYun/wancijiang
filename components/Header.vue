<template lang="pug">
v-row.h-100.align-center.px-16.my-10
  v-col(cols='3')
    NuxtLink.d-flex.flex-column.pl-10(:to="localePath('index')")
      span.logo Wanci Jiang
      span.logo 江婉琦
  v-spacer
  v-col(cols='3').d-flex.flex-row.justify-space-around
    v-row
        v-col.switchLang.d-flex.align-center.mr-2
          NuxtLink(:to="switchLocalePath('zh')") 繁中 
          span ｜ 
          NuxtLink(:to="switchLocalePath('en')") ENG
        v-col.d-flex.justify-center
          NuxtLink(href="https://mail.google.com/mail/?view=cm&fs=1&to=p16028621@gmail.com" target="_blank")
            v-icon(icon="mdi-email-outline")
        v-col.d-flex.justify-center
          NuxtLink(href="https://www.facebook.com/profile.php?id=100002080775488" target="_blank")
            v-icon(icon="mdi-facebook")
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<style lang="sass" scoped>
.logo
  font-size: 24px
  font-style: normal
  font-weight: 400
  line-height: 40px

.switchLang
  letter-spacing: 3px
  word-break: keep-all

a:hover
  transition: background-color 0.5s ease

a
  text-decoration: none
  color: $primaryText
  border-radius: 20%

.v-icon--size-default
  font-size: calc(var(--v-icon-size-multiplier) * 2em)
</style>
