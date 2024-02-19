<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2023Indonesia.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent1')

    v-col.d-flex.child-flex(v-for="n in 1" :key="n" cols="12")
      v-img(
        :src="`/images/2023Indonesia/2023_Indonesia_1.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

    v-col(cols='auto').my-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent2')

    v-col.d-flex.child-flex(v-for="n in 1" :key="n" cols="12")
      v-img(
        :src="`/images/2023Indonesia/2023_Indonesia_2.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

    v-col(cols='auto').my-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent3')

  </template>

  <script setup>
  const { t } = useI18n();
  const formattedContent1 = computed(() => formatContent(t('articles.2023Indonesia.content1')));
  const formattedContent2 = computed(() => formatContent(t('articles.2023Indonesia.content2')));
  const formattedContent3 = computed(() => formatContent(t('articles.2023Indonesia.content3')));
  </script>