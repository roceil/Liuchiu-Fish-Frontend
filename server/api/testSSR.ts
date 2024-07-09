export default defineEventHandler(async () => {
  const res = await $fetch('https://fakestoreapi.com/products/1')

  return {
    data: res,
  }
})
