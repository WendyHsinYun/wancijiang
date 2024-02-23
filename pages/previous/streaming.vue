<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.streaming.mainTitle') }}

  template(v-slot:publishedDate)
    | {{ $t('articles.streaming.publishedDate') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-10
      div.text-body-1(v-html='formattedArticle')

    v-col.d-flex.flex-wrap.justify-center(cols='12')
      div.my-sm-1.mx-sm-2
        NuxtImg.image(
          :src="'streaming/streaming-1.webp'"
          alt="Why Are Migrant Workers Always Live-Streaming"
          sizes='xs:80vw md:25vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)
      div.my-sm-1.mx-sm-2
        NuxtImg.image(
          :src="'streaming/streaming-2.webp'"
          alt="Why Are Migrant Workers Always Live-Streaming"
          sizes='xs:80vw md:45vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

    v-col(cols='12').my-5
      p.text-medium-emphasis.text-body-1
        span {{ t('preview') }}
        em {{ t('bookTitle') }}
        a(target="_blank" href="https://drive.google.com/file/d/1TGyCWJYGnab7eJ93PWG1Arpu-cxlWWXr/view?usp=sharing") [PDF]

      span.text-body-1 {{ t('criticTitle') }}
      v-list.list
        v-list-item
          a.text-body-1(target="_blank" href="https://okapi.books.com.tw/article/16591") - {{ t('citics1') }}
        v-list-item
          a.text-body-1(target="_blank" href="https://okapi.books.com.tw/article/16538") - {{ t('citics2') }}

    v-col.d-flex.flex-wrap.justify-center(cols='12')
      div.my-2.my-sm-1.mx-sm-2.imageContainer
        NuxtImg.image(
          :src="'streaming/streaming-3.webp'"
          alt="Why Are Migrant Workers Always Live-Streaming"
          sizes='xs:80vw md:35vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)
      div.my-2.my-sm-1.mx-sm-2.imageContainer(v-for="n in [4, 5, 6, 7, 8, 9, 10] " :key="n")
        NuxtImg.image(
          :src="`streaming/streaming-${n}.webp`"
          alt="Why Are Migrant Workers Always Live-Streaming"
          sizes='xs:80vw md:35vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)
</template>

<i18n lang="yaml">
en:
  preview: 'Preview of the first two chapters of'
  bookTitle: '"Why Are Migrant Workers Always Live-Streaming": '
  criticTitle: 'Critic Reviews:'
  citics1: 'Wu Xiaole / Handing the microphone to migrant workers, we hear completely different stories - Reading "Why Are Migrant Workers Always Live Streaming"'
  citics2: 'Wan Jinyou / Riding modified motorcycles, singing in Taiwanese, participating in welcoming deities – the aspects of migrant workers you may not know - Reading "Why Are Migrant Workers Always Live Streaming"'
zh:
  preview: '《移工怎麼都在直播》前兩章內容試閱：'
  bookTitle: ''
  criticTitle: ''
  citics1: '作家書評：吳曉樂/把麥克風交給移工，我們會聽到截然不同的故事—讀《移工怎麼都在直播》'
  citics2: '作家書評：萬金油/騎改車、唱台語歌、參加迎王爺，你所不知道的移工樣貌—讀《移工怎麼都在直播》'
</i18n>

<script setup>
const { t } = useI18n();
const router = useRouter()

const formattedArticle = computed(() =>  formatContent(t('articles.streaming.content')))

</script>

<style lang="sass" scoped>
.list
  background: $background

.imageContainer
  overflow: hidden
  display: inline-block

.image
  height: 97%
</style>
