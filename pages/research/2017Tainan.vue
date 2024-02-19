<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.2017.mainTitle') }}

  template(v-slot:customContent)
    v-col(cols='auto').mt-2.mb-4
      div.text-body-2.text-sm-body-1(v-html='formattedContent')

    v-col.d-flex.child-flex(v-for="n in 6" :key="n" :cols="imageCols")
      v-img.mx-1.my-1(
        :src="`/images/2017/2017_${n}.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        cover)

</template>
<script setup>
const { t } = useI18n();
const formattedContent = computed(() => formatContent(t('articles.2017.content')));
</script>