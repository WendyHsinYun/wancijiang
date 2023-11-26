<template lang="pug">
v-card(flat color='background')
    v-card-title.text-h5 近期計畫：《尋找真愛》
    v-card-subtitle.text-h6.mt-10 2023-2026
    div(v-html='formattedArticle').mt-10
</template>

<script setup>
const { t } = useI18n();
const translatedIndex = t('index');
const indexText = t('index');

// 创建一个计算属性来将 '\n' 替换为 '<br>'
const formattedArticle = computed(() => {
  return indexText.replace(/\n/g, '<br>');
});
</script>

<style lang="sass"></style>
