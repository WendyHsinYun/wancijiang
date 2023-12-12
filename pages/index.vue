<template lang="pug">
div(style="height:25vh")

v-card(flat color='primary')
  v-row.justify-center
    v-col(cols='6')
      div(v-html='typewriterText').content.my-10

</template>

<script setup>
definePageMeta({
  layout: 'entry'
})

const formattedEntry = formatContent('entry.content')

const typewriterText = ref('');
const typingDelay = 60;
let index = 0;
const tagRegex = /<[^>]*>/; // 正則表達式來匹配完整的HTML標籤

function typeWriter() {
  let visibleText = formattedEntry.value.slice(0, index);
  let nextChar = formattedEntry.value.charAt(index);

  // 檢查下一個字符是否開始了一個新的標籤
  if (nextChar === '<') {
    // 找到完整的標籤並立即添加
    const tagMatch = formattedEntry.value.slice(index).match(tagRegex);
    if (tagMatch) {
      visibleText += tagMatch[0];
      index += tagMatch[0].length;
    }
  } else {
    visibleText += nextChar;
    index++;
  }

  typewriterText.value = visibleText;

  if (index < formattedEntry.value.length) {
    setTimeout(typeWriter, typingDelay);
  }
}

onMounted(() => {
  typeWriter();
});

</script>

<style lang="sass">
.content
  text-align: center
  color: $secondaryText
  line-height: 32px
  font-size: 16px
</style>