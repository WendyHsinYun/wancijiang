<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2018.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').mt-2.mb-4
      div.text-body-1(v-html='formattedContent')

    v-col.d-flex.flex-wrap.justify-center.mt-4(cols='12')
      div.my-2.my-sm-1.mx-sm-2.image-container(v-for="n in 4" :key="n")
        NuxtImg.image(
          :src="`2018Singapore/2018Singapore-${n}.webp`"
          alt="2018Singapore"
          sizes='xs:80vw md:35vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)
</template>

<script setup>
const { t } = useI18n();
const formattedContent = computed(() => formatContent(t('articles.2018.content')));
</script>

<style lang="sass" scoped>
.image-container
  overflow: hidden
  display: inline-block

.image
  height: 97%
</style>
