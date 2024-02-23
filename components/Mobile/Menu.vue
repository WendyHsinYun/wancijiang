<template lang="pug">
v-container.menuContainer
  v-card.mx-auto(elevation="0")
    v-list.px-3.px-sm-10
      v-list-item
        template(v-slot:title)
          NuxtLink.nuxtLink(:to="localePath('/latest')" @click='onClick') 
            p.text-body-2.text-primaryText {{ t('latest') }}

      v-divider.mx-7

      v-list-group
        template(v-slot:activator='{ props }')
          v-list-item(v-bind='props' )
            template(v-slot:title)
              p.text-body-2.text-primaryText {{ t('previous') }}
        
        v-list-item(
          v-for='(item, i) in previous' 
          :key='i' 
          :value='item.name' 
          )
          v-divider.mx-7
          template(v-slot:title)
            NuxtLink.nuxtLink(:to="localePath(item.path)" @click='onClick') 
              p.text-caption.ps-2(style='color:rgba(0,0,0,0.8)') {{ t(item.name) }}
      
      v-divider.mx-7
      
      v-list-group
        template(v-slot:activator='{ props }')
          v-list-item(v-bind='props')
            template(v-slot:title)
                p.text-body-2.text-primaryText {{ t('research') }}
        v-list-item(
          v-for='(item, i) in research' 
          :key='i' 
          :value='item.name')
          template(v-slot:title)
            NuxtLink.nuxtLink(:to="localePath(item.path)" @click='onClick') 
              p.text-caption.ps-2(style='color:rgba(0, 0, 0, 0.8)') {{ t(item.name) }}

      v-divider.mx-7
      
      v-list-item
        template(v-slot:title)
          NuxtLink.nuxtLink(:to="localePath('/about')" @click='onClick') 
            p.text-body-2.text-primaryText {{ t('about') }}
      
      v-list-item.py-5
        template(v-slot:title)
          v-row.justify-center
            v-col(cols='auto')
              NuxtLink(href="https://mail.google.com/mail/?view=cm&fs=1&to=p16028621@gmail.com" target="_blank")
                v-icon(:icon="mdiEmailOutline" size='20' aria-hidden="false")
              
            v-col(cols='auto')
              NuxtLink(href="https://www.facebook.com/profile.php?id=100002080775488" target="_blank")
                IconFacebook
</template>

<script setup>
import { mdiEmailOutline } from '@mdi/js';

const { t, locale } = useI18n();
const router = useRouter()

const currentLocale = ref(locale)

const emit = defineEmits(['close'])
const open = ref(['Users'])

const previous = ref([
  {
    name: 'streaming',
    path: '/previous/streaming'
  },
  {
    name: 'drinker',
    path: '/previous/drinker'
  },
  {
    name: 'celestial',
    path: '/previous/celestial'
  },
  {
    name: 'workList',
    path: '/previous/workList'
  },
])

const research = ref([
  {
    name: '2016Indonesia',
    path: '/research/2016Indonesia',
  },
  {
    name: '2017Tainan',
    path: '/research/2017Tainan',
  },
  {
    name: '2018Singapore',
    path: '/research/2018Singapore',
  },
  {
    name: '2019Indonesia',
    path: '/research/2019Indonesia',
  },
  {
    name: '2023Indonesia',
    path: '/research/2023Indonesia',
  },
  {
    name: '2023Netherlands',
    path: '/research/2023Netherlands',
  },
])

const mainMenu = ref([])

const onClick = () => {
  emit('close')
}
</script>

<i18n lang="yaml">
en:
  latest: Latest Project
  previous: Previous Work
  research: Research Projects
  about: About Me
  streaming: Why Are Migrant Workers Always Live-Streaming
  drinker: Confessions of B-Drinkers
  celestial:  In Pursuit of the Celestial
  workList: Previous Works
  2016Indonesia: 2016 Bangka Island, Indonesia
  2017Tainan: 2017 Guanmiao, Tainan
  2018Singapore: 2018 Singapore
  2019Indonesia: 2019 Java, Indonesia
  2023Indonesia: 2023 Java, Indonesia
  2023Netherlands: 2023 Netherlands
zh:
  latest: 近期計畫
  previous: 作品
  research: 田野計畫
  about: About Me
  streaming: 移工怎麼都在直播
  drinker: 酒店，是一場有酒喝的心理諮商
  celestial: 我在2019年的第一天，選上了「仙女」
  workList: 作品列表
  2016Indonesia: 2016 印尼邦加島
  2017Tainan: 2017 台南關廟
  2018Singapore: 2018 新加坡
  2019Indonesia: 2019 印尼爪哇島
  2023Indonesia: 2023 印尼爪哇島
  2023Netherlands: 2023 荷蘭
</i18n>

<style lang="sass" scoped>
.menuContainer
  height: auto
  width: 100%
.v-container
  position: fixed
  top: 120px
  z-index: 50
  padding: 0
  background-color: rgba(249, 250, 250, 0.9)

.v-container::before
  content: ''
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(249, 250, 250, 0.7)
  z-index: -1

.v-card
  background-color: transparent
  
:deep(.v-list)
  padding: 0 50px 
  background: transparent !important

  .v-list-item
    padding: 0 30px
    .v-list-item__content
      height: 100% !important
      .v-list-item-title
        width: 100%
        height: 100% !important
        display: flex
        align-items: center
      
.nuxtLink
  padding: 0
  margin: 0
  height: 100%
  width: 100%
  display: flex
  align-items: center
  text-decoration: none

a
  text-decoration: none
  color: $primaryText
  border-radius: 20%
</style>