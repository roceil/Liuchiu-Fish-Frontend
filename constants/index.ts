import type { News, Product } from '~/types'

export const appName = '琉球漁會'
export const appDescription = '琉球漁會官方網站'

// 商品列表，用於渲染 ProductCard
export const productsList: Product[] = [
  {
    id: 1,
    hotSale: true,
    hotSaleNumber: 1,
    name: '鬼頭刀魚鬆',
    price: 200,
    cover: '/shop/products/mahi-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/mahi-fiber-sub-1.jpg'],
        subTitle: '來自大海的美味',
        description: '來自台灣海域的鬼頭刀魚，以其肉質鮮美，口感細腻而聞名。如今我們將這頂級海鮮原料巧妙地轉化成了一道極具特色的美食：鬼頭刀魚鬆。精選新鮮鬼頭刀魚，經過殿格去鳞、去骨，再細心切割成細絲，確保每一口都能品嚐到海鮮的鮮味，然後我們加入秘製調味料，經過精心炒製，使得鬼頭刀魚鬆敞發出迷人的香氣和獨特的口感。',
      },
    ],
  },
  {
    id: 2,
    hotSale: true,
    hotSaleNumber: 2,
    name: '鬼頭刀魚酥條(原味/辣味)',
    price: 110,
    cover: '/shop/products/fish-crackers-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/fish-crackers-sub-1.jpg'],
        subTitle: '追劇好夥伴',
        description: '經過精心挑選的魚肉製成，並採用獨特的製作工藝，保證了口感的酥脆和品質的可靠性，是三五好友聚會及沙發追劇好夥伴。',
      },
    ],
  },
  {
    id: 3,
    hotSale: true,
    hotSaleNumber: 3,
    name: '鬼頭刀魚乾(辣味/辣味)',
    price: 110,
    cover: '/shop/products/fish-dry-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/fish-dry-sub-1.jpg'],
        subTitle: '大海的獨特風味',
        description: '經過多層繁雜的工序洗淨、抹鹽、反覆日曬，徐徐海風吹撫，為鬼頭刀熟魚乾增添大海的獨特風味。',
      },
    ],
  },
  {
    id: 4,
    hotSale: false,
    hotSaleNumber: 0,
    name: '鬼頭刀糙米捲',
    price: 130,
    cover: '/shop/products/rice-roll-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/rice-roll-sub-1.jpg'],
        subTitle: '大海的全新風味',
        description: '糙米的纖維和營養與鬼頭刀的蛋白質和維生素相得益彰，外層包裹著新鮮鬼頭刀魚鬆，加上起司風味可可磚夾心，鬼頭刀糙米捲將傳統的糙米捲與獨特的鬼頭刀食材結合在一起，創造出一種別開生面的味覺體驗。鬼頭刀肉質香美，口感豐富，為糙米捲注入了新的風味。',
      },
    ],
  },
  {
    id: 5,
    hotSale: false,
    hotSaleNumber: 0,
    name: '鬼頭刀魚丸',
    price: 200,
    cover: '/shop/products/fish-ball-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/fish-ball-sub-1.jpg'],
        subTitle: '海洋的鮮味',
        description: '探索海洋的鮮味，感受小琉球的恩賜！我們自豪地呈獻小琉球鬼頭刀魚丸，採用頂級鬼頭刀魚為原料，精心製作而成，每一口鬼頭刀魚丸都蘊含著大海的澎湃力量與鮮美風味！',
      },
    ],
  },
  {
    id: 6,
    hotSale: false,
    hotSaleNumber: 0,
    name: '旗魚丸',
    price: 200,
    cover: '/shop/products/swordfish-ball-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/swordfish-ball-sub-1.jpg'],
        subTitle: '追尋大海的美味',
        description: '追尋大海的美味，感受旗魚的優雅，我們自家地呈獻旗魚丸，採用新鮮頂級的旗魚為原料，經過精心製作而成,每一口旗魚丸都散發著大海的深邃和旗魚的獨特風味！',
      },
    ],
  },
  {
    id: 7,
    hotSale: false,
    hotSaleNumber: 0,
    name: '花枝丸',
    price: 280,
    cover: '/shop/products/squid-ball-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/squid-ball-sub-1.jpg'],
        subTitle: '海洋的恩惠',
        description: '漫步在海的邊緣，品味大海的鮮美！我們誠摰地呈獻花枝丸，以新鮮優質的花枝為原料，細心打造而成。每一口花枝丸都蘊含著海洋的恩惠和花枝的豐富風味，是味蕾的極致享受！無論是燒烤、煎、炸或是涼拌，花枝丸都能為您的餐桌增添豐富的口感和美味。',
      },
    ],
  },
  {
    id: 8,
    hotSale: false,
    hotSaleNumber: 0,
    name: '旗魚鬆',
    price: 200,
    cover: '/shop/products/swordfish-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/swordfish-fiber-sub-1.jpg'],
        subTitle: '健康飲食的理想選擇',
        description: '旗魚鬆不僅可以作為主菜，更可以作為開胃菜、配菜或下酒菜，無論是搭配米飯，麵包還是沙拉，都能為您帶來一場美味的饗宴。此外，由於旗魚鬆富含豐富的營養成分，同時又低脂肪，高蛋白質，因此也是健康飲食的理想選擇。',
      },
    ],
  },
  {
    id: 9,
    hotSale: false,
    hotSaleNumber: 0,
    name: '鮪魚鬆',
    price: 200,
    cover: '/shop/products/tuna-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/tuna-fiber-sub-1.jpg'],
        subTitle: '海洋的鮮甜',
        description: '我們嚴選食材，將新鮮的鮪魚切割成細絲，再加入精心調配的香料和調味料，通過炒製的過程，將鮪魚的鮮美呈現得淋漓盝致讓您品味到海洋的鮮甜，我們以新鮮的鮪魚為原料，精心製作了這道獨特的美食-鮪魚鬆。',
      },
    ],
  },
  {
    id: 10,
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純旗魚鬆',
    price: 300,
    cover: '/shop/products/full-swordfish-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/full-swordfish-fiber-sub-1.jpg'],
        subTitle: '嚴格把關無添加防腐劑',
        description: '我們引以為傲的旗魚鬆，採用頂級的旗魚為原料，經過精心製作而成。旗魚肉質鮮嫩，口感絲滑，讓您一試難忘。100%,純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的口感，都能讓您沉浸在美食的享受之中，香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 11,
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純鮪魚鬆',
    price: 300,
    cover: '/shop/products/full-tuna-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/full-tuna-fiber-sub-1.jpg'],
        subTitle: '健康飲食的絕佳選擇',
        description: '鮪魚肉質鮮美，富含豐富的蛋白質和OMEGA-3脂肪酸是健康飲食的絕佳選擇，讓您品味到純正的海洋滋味，以繁複作工去除腥味，魚鬆口感細膩，100%純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的口感，都能讓您沉浸在美食的享受之中。香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 12,
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純鬼頭刀魚鬆',
    price: 380,
    cover: '/shop/products/full-mahi-fiber-cover.jpg',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/full-mahi-fiber-sub-1.jpg'],
        subTitle: '海洋的芬芳',
        description: '精選新鮮鬼頭刀魚，經過嚴格去鱗、去骨，再細心切割成細絲，確保每一口都能品噌到海鮮的鮮味，100%純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的回感，都能讓您沉浸在美食的享受之中。香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 13,
    hotSale: false,
    hotSaleNumber: 0,
    name: '飛魚卵香腸',
    price: 200,
    cover: '/shop/products/flyfish-sausage-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/flyfish-sausage-sub-1.jpg'],
        subTitle: '海的鮮美與土地的風味',
        description: '從海洋的深處 ，采撷出來的實藏，每一粒飛魚卵都蘊含著大海的味道，融合了海的鮮美與土地的風味。我們的飛魚卵香腸．不僅是一道料理，更是一場味覺的探險之旅，讓每一口都是對大自然的致敬，讓每一餐，都是一次美味的饗宴。飛魚卵香腸，細嚼之間，品味大海的恩腸。',
      },
    ],
  },
  {
    id: 14,
    hotSale: false,
    hotSaleNumber: 0,
    name: '黑鮪魚香腸',
    price: 200,
    cover: '/shop/products/tuna-sausage-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/tuna-sausage-sub-1.jpg'],
        subTitle: '大海的奥秘與鮮美',
        description: '來自深邃海底的黑鮪魚，凝聚著大海的奥秘與鮮美。我們精心挑選，巧妙調配，將黑鮪魚與香腸完結合，創造出獨特的風味,每一絲香氟都是對料理的尊嚴。讓我們的黑鮪魚香腸，帶您漫遊在大海的浪漫之中，享受味番的盛宴，品味生活的美好。',
      },
    ],
  },
  {
    id: 15,
    hotSale: false,
    hotSaleNumber: 0,
    name: '墨魚香腸',
    price: 200,
    cover: '/shop/products/cuttlefish-sausage-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/cuttlefish-sausage-sub-1.jpg'],
        subTitle: '享受無盡的美味之旅',
        description: '在深邃的海洋中，墨魚靜靜地閃爍著獨特的光芒，散發著神秘的魅力。我們將這份海洋之珍運用於料理，精心製作出墨魚香腸，每一口都蘊含著大海的深邃和神秘。墨魚的鮮美與香腸的豐潤完美結合，讓您的味雷沉醉其中，享受無盡的美味之旅。墨魚香腸是對大海的一份致敬，也是味覺的一場冒險。',
      },
    ],
  },
  {
    id: 16,
    hotSale: false,
    hotSaleNumber: 0,
    name: '花枝香腸',
    price: 200,
    cover: '/shop/products/squid-sausage-cover.jpg',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/squid-sausage-sub-1.jpg'],
        subTitle: '大海中的一朵美麗花朵',
        description: '在海的寬闊中，花枝舞動著綻放的色彩，如同大海中的一朵美麗花朵。我們將這份海洋之美凝聚於料理之中，精心打造花枝香腸，每一口都散發著花枝獨有的鮮甜與香氣。讓花枝的優雅與香腸的豐富融合，為您的味蕾帶來一場絢爛的美食盛宴。',
      },
    ],
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
    description: '小琉球海域的魚類資源豐富，魚類至少有631種，軟體動物約468種。珊瑚資源亦相當豐富，整座小琉球被隆起的珊瑚礁圍繞，色彩斑斕的魚兒悠游其間，十分適合進行浮潛活動。',
    images: '/about/04.svg',
  },
]

// 部門 Mapping
export const unitMapping = [
  {
    name: '所有訊息',
    value: 'all',
    key: 1,
    style: {
      backgroundColor: '#F8F9FA',
      borderColor: '#242A47',
      color: '#242A47',
    },
  },
  {
    name: '琉漁小舖',
    value: '1',
    key: 2,
    style: {
      backgroundColor: '#EFF8FF',
      borderColor: '#485EB8',
      color: '#485EB8',
    },
  },
  {
    name: '輔導股',
    value: '2',
    key: 3,
    style: {
      backgroundColor: '#FFF6EC',
      borderColor: '#F38B12',
      color: '#F38B12',
    },
  },
  {
    name: '會務股',
    value: '3',
    key: 4,
    style: {
      backgroundColor: '#EDFCF6',
      borderColor: '#36A375',
      color: '#36A375',
    },
  },
  {
    name: '推廣股',
    value: '4',
    key: 5,
    style: {
      backgroundColor: '#FEF2F2',
      borderColor: '#E16A6A',
      color: '#E16A6A',
    },
  },
  {
    name: '信用部',
    value: '5',
    key: 6,
    style: {
      backgroundColor: '#F5F1FF',
      borderColor: '#876ECF',
      color: '#876ECF',
    },
  },
]
