// pages/about.vue
<template>
  <div class="m-4">
    <NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink>

    <div>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('zh')">繁體中文</NuxtLink>
    </div>

    <h2>{{ $t('welcome') }}</h2>
    <h3>{{ $t('about.title') }}</h3>
    <p>{{ $t('about.description') }}</p>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>
