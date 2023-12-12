<template lang="pug">
Article
  template(v-slot:mainTitle)
    div(v-html='formattedMainTitle')

  template(v-slot:publishedDate)
    | {{ $t('articles.latest.publishedDate') }}

  template(v-slot:customContent)
    v-col(cols='auto').my-10
      div(v-html='formattedArticle')

    v-col.d-flex.child-flex(v-for="n in 4" :key="n" cols="6")
      v-img(
        :src="`/images/latest/latest_${n}.webp`"
        aspect-ratio="4/3"
        alt="latest publication"
        class="bg-grey-lighten-2"
        cover)
        template(v-slot:placeholder='')
          v-row.fill-height.ma-0(align='center' justify='center')
            v-progress-circular(indeterminate='' color='grey-lighten-5')

</template>

<script setup>
const { t } = useI18n();
const formattedMainTitle = formatContent(t('articles.latest.mainTitle'))
const formattedArticle = formatContent(t('articles.latest.content'))
</script>

<style lang="sass">
</style>
