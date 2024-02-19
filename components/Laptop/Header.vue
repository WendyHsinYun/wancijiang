<template lang="pug">
v-card.px-3(flat color='background').header.d-flex.align-center.my-5
  v-row.d-flex.align-center.px-16
    v-col(cols='auto')
      v-row(no-gutters style='cursor: pointer' @click='router.push("/latest")').ps-10.ps-lg-14.ps-xl-14
        v-col(cols='12')
          span.text-h6.text-md-h5 Wanci Jiang
        v-col(cols='12')
          span.text-md-h5 江婉琦
        
    v-spacer

    v-col(cols='auto').align-center.mr-lg-15.mr-md-12
      v-row
        v-col(cols='6').switchLang.d-flex.align-center.mr-3
          NuxtLink(:to="switchLocalePath('zh')") 
            span.text-lg-body-1.text-md-body-1.text-body-2 繁中 
          span ｜ 
          NuxtLink(:to="switchLocalePath('en')") 
            span.text-lg-body-1.text-md-body-1.text-body-2 ENG
        v-col.align-center(cols='auto')
          NuxtLink.d-flex(href="https://mail.google.com/mail/?view=cm&fs=1&to=p16028621@gmail.com" target="_blank")
            v-icon(size='20' aria-hidden="false" ) mdi-email-outline
        v-col.align-center(cols='auto')
          NuxtLink.d-flex(href="https://www.facebook.com/profile.php?id=100002080775488" target="_blank")
            v-icon(size='20' aria-hidden="false") mdi-facebook
</template>

<script setup>
const router = useRouter();
</script>

<style lang="sass" scoped>
.header
  height: 120px
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
