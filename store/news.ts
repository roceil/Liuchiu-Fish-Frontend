import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NewsData } from '~/services/supabase/useNews'

export const useNewsStore = defineStore('news', () => {
  const newsList = ref<NewsData[] | []>([])

  const setNewsList = (data: NewsData[]) => {
    newsList.value = data.sort((a, b) => b.date.localeCompare(a.date))
  }

  const getAdjacentNews = (currentId: number) => {
    const index = newsList.value.findIndex(news => news.id === currentId)
    const previousNews = index > 0 ? newsList.value[index - 1] : null
    const nextNews = index < newsList.value.length - 1 ? newsList.value[index + 1] : null
    return { previousNews, nextNews }
  }

  return {
    newsList,
    setNewsList,
    getAdjacentNews,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
