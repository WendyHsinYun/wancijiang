<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2016.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-2
      div.text-body-1(v-html='formattedContent1')

    v-divider.my-4 

    v-col(cols='auto').my-2.flex-column.d-flex
      div.mb-10.text-body-1(v-html='formattedContent2')

      span.text-medium-emphasis.text-subtitle-1.text-sm-h6 WANCI’s presentation
      span.text-medium-emphasis.text-subtitle-1.text-sm-h6 ABOUT SHELTER

    v-col(cols='auto').mt-2.mb-4
      div.text-medium-emphasis.text-body-1(v-html='formattedContent3')

    v-col.mt-4.d-flex.flex-wrap.justify-center(cols="12")
      div.my-2.my-sm-1.mx-sm-2(v-for="n in 8" :key="n")
        NuxtImg(
          :src="`2016Indonesia/2016Indonesia-${n}.webp`"
          alt="2016Indonesia"
          sizes='xs:80vw md:35vw'
          :modifiers="{ roundCorner: '6' }"
          preload
          placeholder)

</template>
<script setup>
const { t } = useI18n();

const formattedContent1 = computed(() => formatContent(t('articles.2016.content1')));

const formattedContent2 = computed(() => formatContent(t('articles.2016.content2')));

const formattedContent3 = computed(() => formatContent(t('articles.2016.content3')));
</script>