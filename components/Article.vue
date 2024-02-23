<template lang="pug">
v-card.mx-auto.px-md-15(
  style="padding-bottom: 100px;" 
  flat 
  color='background')
  v-row(no-gutters).py-3.mx-0.my-0
    v-col(cols='12').text-h5.font-weight-bold
      slot(name="mainTitle")

  v-row(no-gutters).py-3.mx-0.my-0
    v-col(cols='12' style='font-size: 18px')
      slot(name="publishedDate")

  v-row(no-gutters).mx-0.my-0
    slot(name="customContent")
</template>

<script setup>
</script>

<style lang="sass" scoped>

.publishedDate
  font-size: 16px
</style>