<template lang="pug">
v-row(no-gutters).header.d-flex.align-center.py-5.px-10.px-sm-14
  v-col(cols='auto')
    v-row(no-gutters style='cursor: pointer' @click='router.push("/latest")') 
      v-col(cols='12')
        span.text-body-1.text-sm-h6.text-md-h5 Wanci Jiang
      v-col(cols='12').my-0.my-sm-1
        span.text-body-1.text-sm-h6.text-md-h5 江婉琦
      
  v-spacer

  v-col(cols='auto').align-center
    v-row(no-gutters).justify-space-between
      v-col(cols='6').switchLang.d-flex.align-center.mr-3.mr-sm-10
        NuxtLink(:to="switchLocalePath('zh')") 
          span.text-lg-body-1.text-sm-body-1.text-caption 繁中 
        span ｜ 
        NuxtLink(:to="switchLocalePath('en')") 
          span.text-lg-body-1.text-sm-body-1.text-caption ENG
      v-col(cols='auto').d-flex.align-center
        v-icon(:size='size' v-if='!expand' style="cursor: pointer" @click='openMenu') mdi-menu
        v-icon(:size='size' v-if='expand' @click='closeMenu') mdi-close
</template>

<script setup>
import { useDisplay } from 'vuetify'
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
const expand = ref(props.expandProps)

const openMenu = () => {
  expand.value = true
  emit('expand')
}

const closeMenu = () => {
  expand.value = false
  emit('close')
}

const size = computed(()=>{
  switch (name.value) {
    case 'xs': return 18
  }
})

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
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px) !important
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
