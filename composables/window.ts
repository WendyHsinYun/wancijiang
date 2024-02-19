const width = ref(window.innerWidth)

const updateWidth = () => {
  width.value = window.innerWidth
}

export const imageCols = computed(() => {
  return width.value < 600 ? 12 : 6
})

export const mobileMode = computed(() => {
  return width.value < 960
})

window.addEventListener('resize', updateWidth)