<template lang="pug">
v-img(
  :src="src"
  aspect-ratio="4/3"
  alt="latest publication"
  class="bg-grey-lighten-2"
  cover)
  template(v-slot:placeholder='')
    v-row.fill-height.ma-0(align='center' justify='center')
      v-progress-circular(indeterminate='' color='grey-lighten-5')
</template>

<script setup>
</script>