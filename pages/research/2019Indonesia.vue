<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2019.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').mt-2.mb-4
      div.text-body-1(v-html='formattedContent1')

    v-col.d-flex.child-flex.my-2(cols="12")
      div
        NuxtImg(
          :src="'2019Indonesia/2019Indonesia-1.webp'"
          alt="2019Indonesia"
          sizes='xs:80vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

    v-col(cols='auto').mt-2.mb-4
      div.text-body-1(v-html='formattedContent2')

    v-col.d-flex.child-flex.my-2(cols="12")
      div
        NuxtImg(
          :src="'2019Indonesia/2019Indonesia-2.webp'"
          alt="2019Indonesia"
          sizes='xs:80vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

    v-col(cols='auto').my-2
      div.text-body-1(v-html='formattedContent3')

  </template>

  <script setup>
  const { t } = useI18n();
  const formattedContent1 = computed(() => formatContent(t('articles.2019.content1')));
  const formattedContent2 = computed(() => formatContent(t('articles.2019.content2')));
  const formattedContent3 = computed(() => formatContent(t('articles.2019.content3')));
  </script>