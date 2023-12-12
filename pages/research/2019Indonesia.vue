<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2019.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-2
      div(v-html='formattedContent1')

    v-col.d-flex.child-flex(v-for="n in 1" :key="n" cols="12")
      v-img(
        :src="`/images/2019/2019_1.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

    v-col(cols='auto').my-2
      div(v-html='formattedContent2')

    v-col.d-flex.child-flex(v-for="n in 1" :key="n" cols="12")
      v-img(
        :src="`/images/2019/2019_2.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

    v-col(cols='auto').my-2
      div(v-html='formattedContent3')

  </template>

  <script setup>
  const { t } = useI18n();
  const formattedContent1 = computed(() => formatContent(t('articles.2019.content1')));
  const formattedContent2 = computed(() => formatContent(t('articles.2019.content2')));
  const formattedContent3 = computed(() => formatContent(t('articles.2019.content3')));
  </script>