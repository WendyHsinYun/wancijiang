<template lang="pug">
v-row.align-end.justify-center.px-10(style='height: 75px')
  v-col(cols='10').d-flex.align-center.justify-space-between
    NuxtLink(
      v-for='(option, key) in mainMenuOptions' 
      :to="localePath(option.path)"
      :key='key'
      @click='selectMainMenu(option)'
    ) 
      span(:class="option.title === activeMainItem ? 'activeItem' : ''").mainMenu.text-body-2.text-lg-body-1 {{ t(`${option.mainMenu}`) }}

v-row.align-center.justify-center
  v-col(cols='10')
    div.divider

v-row.justify-center.mt-5.px-10(no-gutters style='height: 100px')
  v-col(cols='10')
    div(v-if="subMenu === 'previous'").d-flex.align-center.justify-space-between
      NuxtLink( 
        v-for="(option, key) in previousMenu" 
        :to="localePath(option.path)"
        :key="key"
        @click='selectSubMenu(option)'
      ) 
        div(style='max-width:165px').subMenu.text-center
          span(:class="option.title === activeSubItem ? 'activeItem' : ''").text-wrap.text-lg-body-2.text-caption {{ t( `${option.title}`) }}

    div(v-if="subMenu === 'research'").d-flex.align-center.justify-space-between
      NuxtLink( 
        v-for="(option, key) in researchMenu" 
        :to="localePath(option.path)"
        :key="key"
        @click='selectSubMenu(option)'
      ) 
        div(style='max-width:110px').subMenu.text-center
          span(:class="option.title === activeSubItem ? 'activeItem' : ''").text-wrap.text-lg-body-2.text-caption {{ t( `${option.title}`) }}
</template>

<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
const route = useRoute()

const mainMenu = ref('latest');

const subMenu = ref('')

const activeMainItem = ref(null);
const activeSubItem = ref(null);

const selectMainMenu = (option) => {
  activeMainItem.value = option.title  
  subMenu.value = option.title
};

const selectSubMenu = (option) => {
  activeSubItem.value = option.title  
};

watch(subMenu, (newValue)=>{
  activeSubItem.value = newValue === 'previous' ? 'streaming' : '2016Indonesia'
})

const router = useRouter();

router.beforeEach((to, from) => {
  if(to.fullPath === '/latest'){
    activeMainItem.value = 'latest'
    activeSubItem.value = null
    subMenu.value = ''
  }
})

const mainMenuOptions = [
  {
    title: 'latest',
    mainMenu: 'latest',
    path: 'latest',
  },
  {
    title: 'previous',
    mainMenu: 'previous',
    path: '/previous/streaming',
  },
  {
    title: 'research',
    mainMenu: 'research',
    path: '/research/2016Indonesia',
  },
  {
    title: 'about',
    mainMenu: 'about',
    path: 'about',
  },
]

const previousMenu = [
  { title: 'streaming', path: '/previous/streaming' },
  { title: 'drinker', path: '/previous/drinker' },
  { title: 'celestial', path: '/previous/celestial' },
  { title: 'workList', path: '/previous/workList' },
]

const researchMenu = [
  { title: '2016Indonesia', path: '/research/2016Indonesia' },
  { title: '2017Tainan', path: '/research/2017Tainan' },
  { title: '2018Singapore', path: '/research/2018Singapore' },
  { title: '2019Indonesia', path: '/research/2019Indonesia' },
  { title: '2023Indonesia', path: '/research/2023Indonesia' },
  { title: '2023Netherlands', path: '/research/2023Netherlands' },
]

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
a
  position: relative
  text-decoration: none
  color: $primaryText
  border-radius: 20%
  cursor: pointer

.activeItem
  color: $primary
  font-weight: 600
  text-wrap: wrap

.mainMenu:hover, .subMenu:hover
  color: $primary

.subMenuContainer
  color: $primaryText

.divider
  height: 1px
  border-bottom-color: rgba(128, 128, 128)
  border-bottom-style: solid
  border-bottom-width: 1px
</style>
