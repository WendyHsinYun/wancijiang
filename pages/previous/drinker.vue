<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.drinker.mainTitle') }}

  template(v-slot:publishedDate)
    | {{ $t('articles.drinker.publishedDate') }}

  template(v-slot:customContent)
    v-col.d-flex.child-flex(cols="12")
      div
        NuxtImg(
          :src="'drinker/drinker.webp'"
          alt="Confessions of B-Drinkers"
          sizes='xs:80vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

    em.mt-2.mb-4.text-medium-emphasis.text-body-1 {{ t('caption') }}

    v-col(cols='auto').my-2
      div.text-body-1(v-html='formattedContent1')

    v-col(cols='auto').my-3
      span.text-h6.font-weight-bold {{ t('subTitle1') }}

    v-col(cols='auto').my-2.text-body-1
      div(v-html='formattedContent2')

    v-col(cols='auto').my-3
      span.text-h6.font-weight-bold {{ t('subTitle2') }}

    v-col(cols='auto').my-2.text-body-1
      div(v-html='formattedContent3')

    v-col(cols='auto').my-2
      a.text-body-1(target="_blank" href="https://opinion.cw.com.tw/blog/profile/537/article/11577") {{ t('link') }}
</template>

<i18n lang="yaml">
en:
  caption: Yi Yi reckons that at the bar, she's not just pouring drinks but also filling gaps in folks' lives – and her own. Think of it as therapy but with cocktails on the side. 
  subTitle1: Stereotypes protect me sometimes
  subTitle2: There is satisfaction in the job as well
  link: The original article was published in "CommonWealth Magazine Independent Review."
zh:
  caption: 依依覺得在酒店裡，她的成就感在於填補了別人對關係上的需求，也彌補了她對自己生命中的不完全。這場心理諮商，喝的是酒。 
  subTitle1: 有時候，刻板印象變成我的擋箭牌
  subTitle2: 做酒店也有成就感
  link: 原文刊登於《天下雜誌獨立評論》

</i18n>

<script setup>
const { t } = useI18n();
const formattedContent1 = computed(() => formatContent(t('articles.drinker.content1')));
const formattedContent2 = computed(() => formatContent(t('articles.drinker.content2')));
const formattedContent3 = computed(() => formatContent(t('articles.drinker.content3')));
</script>

