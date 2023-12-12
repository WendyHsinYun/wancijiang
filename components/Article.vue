<template lang="pug">
v-card(flat color='background')
  v-row
    v-col(cols='auto').mainTitle
      slot(name="mainTitle")

  v-row
    v-col(cols='auto').publishedDate
      slot(name="publishedDate")

  v-row
    slot(name="customContent")
</template>

<script setup>
</script>

<style lang="sass" scoped>
.mainTitle
  font-size: 22px
  font-weight: 600
  
.publishedDate
  font-size: 16px
</style>