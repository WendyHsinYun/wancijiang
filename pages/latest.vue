<template lang="pug">
Article
  template(v-slot:mainTitle)
    div(v-html='formattedMainTitle')

  template(v-slot:publishedDate)
    | {{ $t('articles.latest.publishedDate') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-10
      div.text-body-1(v-html='formattedArticle')

    v-col.d-flex.flex-wrap.justify-center(cols='12')
      div.my-2.my-sm-1.mx-sm-2(v-for="n in 4" :key="n")
        NuxtImg(
          :src="`latest/latest-${n}.webp`"
          alt="latest publication"
          sizes='xs:80vw md:35vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

</template>

<script setup>
const { t } = useI18n();
const formattedMainTitle = formatContent(t('articles.latest.mainTitle'))
const formattedArticle = formatContent(t('articles.latest.content'))
</script>

<style lang="sass">
</style>
