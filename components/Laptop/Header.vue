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

    v-col(cols='auto').mr-lg-15.mr-md-12
      v-row.align-center
        v-col.switchLang.d-flex.align-center.mr-3
          NuxtLink(:to="switchLocalePath('en')").me-2
            span(:class="{ lang: !isZh }").py-2.px-3.text-body-2 ENG

          NuxtLink(:to="switchLocalePath('zh')") 
            span(:class="{ lang: isZh }").py-2.px-3.text-body-2 繁中 

        v-col.align-center(cols='auto')
          NuxtLink.d-flex(href="https://mail.google.com/mail/?view=cm&fs=1&to=p16028621@gmail.com" target="_blank")
            v-icon(:icon="mdiEmailOutline" aria-hidden="false" size='22')

        v-col.align-center(cols='auto')
          NuxtLink.d-flex(href="https://www.facebook.com/profile.php?id=100002080775488" target="_blank")
            IconFacebook
</template>

<script setup>
import { mdiEmailOutline } from '@mdi/js';

const router = useRouter();
const route = useRoute()

const zhRegex = /\/zh\//;
const isZh = ref('')

router.beforeEach((to, from) => {
  isZh.value = zhRegex.test(to.fullPath) ? true : false
})

onMounted(()=>{
  isZh.value = zhRegex.test(route.fullPath) ? true : false
})
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

.lang
  background-color: rgba(128, 128, 128, 0.1)
  border-radius: 10px

.v-icon--size-default
  font-size: calc(var(--v-icon-size-multiplier) * 2em)
</style>
