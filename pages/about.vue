<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.aboutMe.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-2
      div.my-1.text-body-1(v-html='formattedContent')

    v-col.d-flex.flex-column(cols="12")
      span.my-3.text-h6(v-html='formattedSubTitle')

    v-col.d-flex.flex-column(cols="12")
      ul
        li.ml-5.my-2(v-for='presentation in presentations' :key="presentation.name") 
          span.my-1.text-body-2(v-html='presentation.name')

</template>


<script setup>
const { t, locale, locales } = useI18n();

const formattedContent = computed(() => formatContent(t('articles.aboutMe.content')));

const formattedSubTitle = computed(() => formatContent(t('articles.aboutMe.subTitle')));

const presentations = [
  {
    name: formatContent(t('articles.aboutMe.presentation1')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation2')),
  },  
  {
    name: formatContent(t('articles.aboutMe.presentation3')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation4')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation5')),
  },  
  {
    name: formatContent(t('articles.aboutMe.presentation6')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation7')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation8')),
  },  
  {
    name: formatContent(t('articles.aboutMe.presentation9')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation10')),
  },
  {
    name: formatContent(t('articles.aboutMe.presentation11')),
  },  
  {
    name: formatContent(t('articles.aboutMe.presentation12')),
  },
];
</script>

<style lang="sass" scoped>
li
  position: relative
  line-height: 1.75
  list-style-type: none
  padding-left: 20px
  &::before
    content: '•'
    color: $primaryText
    font-size: 14px
    position: absolute
    left: 0px
    top: 2px
</style>