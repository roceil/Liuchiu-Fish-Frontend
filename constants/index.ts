import type { News, Product } from '~/types'

export const appName = '琉球漁會'
export const appDescription = 'Nuxt 3 Starter'

// 商品列表，用於渲染 ProductCard
export const productsList: Product[] = [
  {
    id: 1,
    hotSale: true,
    hotSaleNumber: 1,
    name: '特及鮮魚肝',
    price: 300,
  },
  {
    id: 2,
    hotSale: true,
    hotSaleNumber: 2,
    name: '特鮮鮪魚',
    price: 500,
  },
  {
    id: 3,
    hotSale: false,
    hotSaleNumber: 0,
    name: '好吃脂肪肝',
    price: 10000,
  },
]

// 最新消息列表，用於渲染 HomeNewsListItem
export const newsList: News[] = [
  {
    id: 1,
    title: '部分金融服務停機公告',
    tag: '琉漁小鋪',
    date: '111 / 6 / 17',
  },
  {
    id: 2,
    title: '109年度防治洗錢及反資恐制度聲明書',
    tag: '輔導股',
    date: '111 / 5 / 11',
  },
  {
    id: 3,
    title: '產品館網路訂購區訊息',
    tag: '會務股',
    date: '111 / 2 / 7',
  },
  {
    id: 4,
    title: '振興五倍券兌付宣導影片(金融機構)',
    tag: '推廣部',
    date: '111 / 1 / 23',
  },
]

// 關於小琉球列表
export const contentList = [
  {
    title: '認識小琉球',
    description: '琉球嶼位於高屏溪口之西南，高雄市南南西方約十八浬之海上，孤懸海中狀似一隻飄浮於台灣海峽之鞋子，為台灣本島附近十四屬島中唯一珊瑚礁島嶼。',
    images: '/about/01.svg',
  },
  {
    title: '前進小琉球',
    description: '小琉球位於台灣本島屏東縣西南方大海上，是台灣唯一的一座珊瑚礁島嶼。前往島上方式為自東港港口搭乘交通船，船行時間約 25 至 30 分鐘即可抵達。',
    images: '/about/02.svg',
  },
  {
    title: '觀光導覽',
    description: '小琉球位於南台灣屏東縣東港西南方，自東港搭船只需半小時即可到達，是台灣唯一的珊瑚礁島。島上觀光資源豐富，隨處可見的奇岩怪石、生態豐富的潮間帶、炫麗動人的琉球曉霞、夜晚的燦爛星空及螢火蟲。',
    images: '/about/03.svg',
  },
  {
    title: '生態導覽',
    description: '小琉球位於南台灣屏東縣東港西南方，自東港搭船只需半小時即可到達，是台灣唯一的珊瑚礁島。島上觀光資源豐富，隨處可見的奇岩怪石、生態豐富的潮間帶、炫麗動人的琉球曉霞、夜晚的燦爛星空及螢火蟲。',
    images: '/about/04.svg',
  },
]
