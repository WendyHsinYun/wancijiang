<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2016.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-2
      div.text-body-2.text-sm-body-1(v-html='formattedContent1')

    v-divider 

    v-col(cols='auto').my-2.flex-column.d-flex
      div.mb-10.text-body-2.text-sm-body-1(v-html='formattedContent2')

      span.text-medium-emphasis.text-subtitle-1.text-sm-h6 WANCI’s presentation
      span.text-medium-emphasis.text-subtitle-1.text-sm-h6 ABOUT SHELTER

    v-col(cols='auto').mt-2.mb-4
      div.text-medium-emphasis.text-body-2.text-sm-body-1(v-html='formattedContent3')

    v-col.d-flex.child-flex(v-for="n in 8" :key="n" :cols="imageCols")
      v-img.mx-1.my-1(
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