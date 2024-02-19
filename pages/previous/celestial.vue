<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.celestial.mainTitle') }}

  template(v-slot:publishedDate)
    | {{ $t('articles.celestial.publishedDate') }}

  template(v-slot:customContent)
    v-col.text-center.d-flex.flex-column(cols="12")
      v-img(
        src="/images/celestial/celestial_1.webp"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
      em.mt-2.mb-4.text-medium-emphasis.text-body-2.text-sm-body-1 {{ t('caption1') }}

    v-col(cols='auto').my-2
      div.text-body-2.text-sm-body-1(v-html='formattedContent1')

    v-col(cols='auto').my-3
      span.text-subtitle-1.text-sm-h6.font-weight-bold {{ t('subTitle1') }}

    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent2')

    v-col.text-center.d-flex.flex-column(cols="12")
      v-img(
        src="/images/celestial/celestial_2.webp"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
      em.mt-2.mb-4.text-body-2.text-sm-body-1.text-medium-emphasis {{ t('caption2') }}

    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent3')    
  
    v-col.text-center.d-flex.flex-column(cols="12")
      v-img(
        src="/images/celestial/celestial_3.webp"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
      em.mt-2.mb-4.text-body-2.text-sm-body-1.text-medium-emphasis {{ t('caption3') }}

    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent4')    

    v-col.text-center.d-flex.flex-column(cols="12")
      v-img(
        src="/images/celestial/celestial_4.webp"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
      em.mt-2.mb-4.text-body-2.text-sm-body-1.text-medium-emphasis {{ t('caption4') }}

    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent5')  

    .videoContainer
      iframe(
        width='640' 
        height='360'
        src='https://www.youtube.com/embed/UNtiNl4kmbg' 
        title='擲筊過程（2019禮官、仙女選拔）' 
        frameborder='10' 
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen='')

    v-col(cols='auto').my-2
      div.text-body-2.text-sm-body-1(v-html='formattedContent6')  

    v-col(cols='auto').my-3
      span.text-subtitle-1.text-sm-h6.font-weight-bold {{ t('subTitle2') }}

    v-col(cols='auto').my-2
      div.text-body-2.text-sm-body-1(v-html='formattedContent7')  
  
    v-col(cols='auto').my-3
      span.text-subtitle-1.text-sm-h6.font-weight-bold {{ t('subTitle3') }}

    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent8')  

    v-col.text-center.d-flex.flex-column(cols="12")
      v-img(
        src="/images/celestial/celestial_5.webp"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
      em.mt-2.mb-4.text-body-2.text-sm-body-1.text-medium-emphasis {{ t('caption5') }}  

    v-col(cols='auto').my-2
      div.text-body-2.text-sm-body-1(v-html='formattedContent9')  

    v-col(cols='auto').my-2
      a.text-body-2.text-sm-body-1(target="_blank" href="https://opinion.cw.com.tw/blog/profile/52/article/7647") {{ t('link') }}
</template>


<i18n lang="yaml">
en:
  caption1: The Deer Ear Gate Tianhou Temple hosts its annual Fairy Selection Ritual. 
  caption2: The lively scene at Deer Ear Gate Tianhou Temple in the early morning. 
  caption3: The fairy candidates are determined by the method of casting divination blocks.
  caption4: Schematic diagram of the selection venue for fairy and protocol officers.
  caption5: List of selected fairies 
  subTitle1: The Ritual:Being an Observer
  subTitle2: Intention:An Inner Monologue as a Believer
  subTitle3: Am I really the number one fairy?
  link: The original article was published in "CommonWealth Magazine Independent Review."

zh:
  caption1: 鹿耳門天后宮每年舉辦仙女選拔比賽 
  caption2: 鹿耳門天后宮一早的熱鬧景象
  caption3: 「仙女」人選由擲筊方式決定
  caption4: 仙女、禮官選拔場地示意圖
  caption5: 「仙女」入選名單 
  subTitle1: 儀式：作為旁觀的觀察者
  subTitle2: 意念：作為信眾，我心內的聲音
  subTitle3: 我是仙女第一名？
  link: 原文刊登於《天下雜誌獨立評論》
</i18n>

<script setup>
const { t } = useI18n();

const formattedContent1 = computed(() => formatContent(t('articles.celestial.content1')));
const formattedContent2 = computed(() => formatContent(t('articles.celestial.content2')));
const formattedContent3 = computed(() => formatContent(t('articles.celestial.content3')));
const formattedContent4 = computed(() => formatContent(t('articles.celestial.content4')));
const formattedContent5 = computed(() => formatContent(t('articles.celestial.content5')));
const formattedContent6 = computed(() => formatContent(t('articles.celestial.content6')));
const formattedContent7 = computed(() => formatContent(t('articles.celestial.content7')));
const formattedContent8 = computed(() => formatContent(t('articles.celestial.content8')));
const formattedContent9 = computed(() => formatContent(t('articles.celestial.content9')));
</script>

<style lang="sass" scoped>
.videoContainer
  position: relative
  width: 100%
  height: 0
  padding-bottom: 56.25%
  iframe
    position: absolute
    top: 0
    left: 5px
    width: 100%
    height: 100%

</style>