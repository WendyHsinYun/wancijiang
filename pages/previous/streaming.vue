<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.streaming.mainTitle') }}

  template(v-slot:publishedDate)
    | {{ $t('articles.streaming.publishedDate') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-10
      div(v-html='formattedArticle')

    v-col.d-flex.child-flex(v-for="n in 2" :key="n" cols="6")
      v-img(
        :src="`/images/streaming/streaming_${n}.webp`"
        :lazy-src="`/images/streaming/streaming_${n}_lowers.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
        template(v-slot:placeholder='')
          v-row.fill-height.ma-0(align='center' justify='center')
            v-progress-circular(indeterminate='' color='grey-lighten-5')

    v-col(cols='12').my-5
      span {{ t('preview') }}
      em {{ t('bookTitle') }}
      a(target="_blank" href="https://drive.google.com/file/d/1TGyCWJYGnab7eJ93PWG1Arpu-cxlWWXr/view?usp=sharing") [PDF]
      br
      span {{ t('criticTitle') }}
      br
      v-list.list
        v-list-item
          a(target="_blank" href="https://okapi.books.com.tw/article/16591") - {{ t('citics1') }}
        v-list-item
          a(target="_blank" href="https://okapi.books.com.tw/article/16538") - {{ t('citics2') }}

    v-col.d-flex.child-flex(v-for="n in [3, 4, 5, 6, 7, 8, 9, 10] " :key="n" cols="6")
      v-img(
        :src="`/images/streaming/streaming_${n}.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
        template(v-slot:placeholder='')
          v-row.fill-height.ma-0(align='center' justify='center')
            v-progress-circular(indeterminate='' color='grey-lighten-5')
    
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
const formattedArticle = formatContent(t('articles.streaming.content'))
</script>

<style lang="sass">
.list
  background: $background
</style>
