<template lang="pug">
v-row(no-gutters).header.d-flex.align-center.py-5.px-10.px-sm-14
  v-col(cols='auto')
    v-row(no-gutters style='cursor: pointer' @click='router.push("/latest")') 
      v-col(cols='12')
        p.text-h6 Wanci Jiang
        p.text-h6 江婉琦
      
  v-spacer

  v-col(cols='auto')
    v-row(no-gutters).justify-space-between.align-center
      v-col(cols='6').switchLang.d-flex.align-center.mr-5.mr-sm-10

        NuxtLink(:to="switchLocalePath('en')") 
          span(:class="{ lang: !isZh }").pa-2.text-body-2 ENG

        NuxtLink(:to="switchLocalePath('zh')") 
          span(:class="{ lang: isZh }").pa-2.text-body-2 中 
        
      v-col(cols='auto').d-flex.align-center
        v-icon(size='22' v-if='!expand' :icon="mdiMenu" style="cursor: pointer" @click='openMenu')
        v-icon(size='20' v-if='expand' :icon="mdiClose" @click='closeMenu')
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { mdiMenu } from '@mdi/js';
import { mdiClose } from '@mdi/js';
const { name } = useDisplay()

const props = defineProps({
  close: {
    type: Boolean,
    default: true,
  },
  expandProps: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['expand', 'close'])

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

const expand = ref(props.expandProps)

const openMenu = () => {
  expand.value = true
  emit('expand')
}

const closeMenu = () => {
  expand.value = false
  emit('close')
}

watch(()=> props.expandProps, 
  (newValue)=>{
    expand.value = newValue
  }
)


</script>

<style lang="sass" scoped>
.header
  height: 120px
  width: 100%
  position: fixed
  top: 0px
  z-index: 50
  background-color: rgba(249, 250, 250, 0.9)

.header::before
  content: ''
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(249, 250, 250, 0.7)
  z-index: -1
  
.switchLang
  letter-spacing: 3px
  word-break: keep-all

a:hover
  transition: background-color 0.5s ease

a
  text-decoration: none
  color: $primaryText
  border-radius: 20%

.verticalDivider
  height: 22px
  border-left-color: rgba(128, 128, 128, .5)
  border-left-style: solid
  border-left-width: 2px

.lang
  background-color: rgba(128, 128, 128, 0.1)
  border-radius: 10px

.v-icon--size-default
  font-size: calc(var(--v-icon-size-multiplier) * 2em)
</style>
