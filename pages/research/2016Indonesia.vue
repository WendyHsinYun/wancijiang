<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2016.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-2
      div(v-html='formattedContent1')

    v-divider 

    v-col(cols='auto').my-2.flex-column.d-flex
      div.mb-10(v-html='formattedContent2')

      span.text-medium-emphasis.text-h6 WANCI’s presentation
      span.text-medium-emphasis.text-h6 ABOUT SHELTER

    v-col(cols='auto').my-2
      div.text-medium-emphasis(v-html='formattedContent3')

    v-col.d-flex.child-flex(v-for="n in 8" :key="n" cols="6")
      v-img(
        :src="`/images/2016/2016_${n}.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

</template>
<script setup>
const { t } = useI18n();
const formattedContent1 = computed(() => formatContent(t('articles.2016.content1')));
const formattedContent2 = computed(() => formatContent(t('articles.2016.content2')));
const formattedContent3 = computed(() => formatContent(t('articles.2016.content3')));
</script>