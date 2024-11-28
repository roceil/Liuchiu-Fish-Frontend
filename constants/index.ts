import type { News, Product } from '~/types'
import type { DepartmentJobs } from '~/pages/Departments.vue'

export const appName = '琉球區漁會｜'
export const appDescription = '小琉球是一座位於屏東縣西南方大海上的珊瑚礁島嶼。漁會以保障漁民權益，提高漁民知識、技能，增加漁民生產收益，改善漁民生活，促進漁業現代化，並謀其發展為宗旨。'
export const facebookUrl = 'https://www.facebook.com/liuyu929000/'
export const lineUrl = 'https://line.me/R/ti/p/@961vipno?ts=05281850&oat_content=u'

// 商品列表，用於渲染 ProductCard
export const productsList: Product[] = [
  {
    id: 'MAHI001',
    hotSale: true,
    hotSaleNumber: 1,
    name: '鬼頭刀魚鬆',
    price: 200,
    cover: '/shop/products/mahi-fiber-cover.png',
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
    id: 'MAHI002',
    hotSale: true,
    hotSaleNumber: 2,
    name: '鬼頭刀魚酥條(原味/辣味)',
    price: 110,
    cover: '/shop/products/mahi-crackers-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/mahi-crackers-sub-1.png'],
        subTitle: '追劇好夥伴',
        description: '經過精心挑選的魚肉製成，並採用獨特的製作工藝，保證了口感的酥脆和品質的可靠性，是三五好友聚會及沙發追劇好夥伴。',
      },
    ],
  },
  {
    id: 'MAHI003',
    hotSale: true,
    hotSaleNumber: 3,
    name: '鬼頭刀魚乾(辣味/辣味)',
    price: 110,
    cover: '/shop/products/mahi-dry-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/mahi-dry-sub-1.png'],
        subTitle: '大海的獨特風味',
        description: '經過多層繁雜的工序洗淨、抹鹽、反覆日曬，徐徐海風吹撫，為鬼頭刀熟魚乾增添大海的獨特風味。',
      },
    ],
  },
  {
    id: 'MAHI004',
    hotSale: false,
    hotSaleNumber: 0,
    name: '鬼頭刀糙米捲',
    price: 130,
    cover: '/shop/products/mahi-rice-roll-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/mahi-rice-roll-sub-1.png'],
        subTitle: '大海的全新風味',
        description: '糙米的纖維和營養與鬼頭刀的蛋白質和維生素相得益彰，外層包裹著新鮮鬼頭刀魚鬆，加上起司風味可可磚夾心，鬼頭刀糙米捲將傳統的糙米捲與獨特的鬼頭刀食材結合在一起，創造出一種別開生面的味覺體驗。鬼頭刀肉質香美，口感豐富，為糙米捲注入了新的風味。',
      },
    ],
  },
  {
    id: 'MAHI005',
    hotSale: false,
    hotSaleNumber: 0,
    name: '鬼頭刀魚丸',
    price: 200,
    cover: '/shop/products/mahi-fish-ball-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/mahi-fish-ball-sub-1.png'],
        subTitle: '海洋的鮮味',
        description: '探索海洋的鮮味，感受小琉球的恩賜！我們自豪地呈獻小琉球鬼頭刀魚丸，採用頂級鬼頭刀魚為原料，精心製作而成，每一口鬼頭刀魚丸都蘊含著大海的澎湃力量與鮮美風味！',
      },
    ],
  },
  {
    id: 'SWFS001',
    hotSale: false,
    hotSaleNumber: 0,
    name: '旗魚丸',
    price: 200,
    cover: '/shop/products/swordfish-ball-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/swordfish-ball-sub-1.png'],
        subTitle: '追尋大海的美味',
        description: '追尋大海的美味，感受旗魚的優雅，我們自家地呈獻旗魚丸，採用新鮮頂級的旗魚為原料，經過精心製作而成,每一口旗魚丸都散發著大海的深邃和旗魚的獨特風味！',
      },
    ],
  },
  {
    id: 'SWFS002',
    hotSale: false,
    hotSaleNumber: 0,
    name: '旗魚鬆',
    price: 200,
    cover: '/shop/products/swordfish-fiber-cover.png',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/swordfish-fiber-sub-1.png'],
        subTitle: '健康飲食的理想選擇',
        description: '旗魚鬆不僅可以作為主菜，更可以作為開胃菜、配菜或下酒菜，無論是搭配米飯，麵包還是沙拉，都能為您帶來一場美味的饗宴。此外，由於旗魚鬆富含豐富的營養成分，同時又低脂肪，高蛋白質，因此也是健康飲食的理想選擇。',
      },
    ],
  },
  {
    id: 'TF001',
    hotSale: false,
    hotSaleNumber: 0,
    name: '鮪魚鬆',
    price: 200,
    cover: '/shop/products/tuna-fiber-cover.png',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/tuna-fiber-sub-1.png'],
        subTitle: '海洋的鮮甜',
        description: '我們嚴選食材，將新鮮的鮪魚切割成細絲，再加入精心調配的香料和調味料，通過炒製的過程，將鮪魚的鮮美呈現得淋漓盝致讓您品味到海洋的鮮甜，我們以新鮮的鮪魚為原料，精心製作了這道獨特的美食-鮪魚鬆。',
      },
    ],
  },
  {
    id: 'SQUID001',
    hotSale: false,
    hotSaleNumber: 0,
    name: '花枝丸',
    price: 280,
    cover: '/shop/products/squid-ball-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/squid-ball-sub-1.png'],
        subTitle: '海洋的恩惠',
        description: '漫步在海的邊緣，品味大海的鮮美！我們誠摰地呈獻花枝丸，以新鮮優質的花枝為原料，細心打造而成。每一口花枝丸都蘊含著海洋的恩惠和花枝的豐富風味，是味蕾的極致享受！無論是燒烤、煎、炸或是涼拌，花枝丸都能為您的餐桌增添豐富的口感和美味。',
      },
    ],
  },
  {
    id: 'SWFS003',
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純旗魚鬆',
    price: 300,
    cover: '/shop/products/swordfish-full-fiber-cover.png',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/swordfish-full-fiber-sub-1.png'],
        subTitle: '嚴格把關無添加防腐劑',
        description: '我們引以為傲的旗魚鬆，採用頂級的旗魚為原料，經過精心製作而成。旗魚肉質鮮嫩，口感絲滑，讓您一試難忘。100%,純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的口感，都能讓您沉浸在美食的享受之中，香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 'TF002',
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純鮪魚鬆',
    price: 300,
    cover: '/shop/products/tuna-full-fiber-cover.png',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/tuna-full-fiber-sub-1.png'],
        subTitle: '健康飲食的絕佳選擇',
        description: '鮪魚肉質鮮美，富含豐富的蛋白質和OMEGA-3脂肪酸是健康飲食的絕佳選擇，讓您品味到純正的海洋滋味，以繁複作工去除腥味，魚鬆口感細膩，100%純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的口感，都能讓您沉浸在美食的享受之中。香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 'MAHI006',
    hotSale: false,
    hotSaleNumber: 0,
    name: '100% 純鬼頭刀魚鬆',
    price: 380,
    cover: '/shop/products/mahi-full-fiber-cover.png',
    unit: '罐',
    intro: [
      {
        subImage: ['/shop/products/mahi-full-fiber-sub-1.png'],
        subTitle: '海洋的芬芳',
        description: '精選新鮮鬼頭刀魚，經過嚴格去鱗、去骨，再細心切割成細絲，確保每一口都能品噌到海鮮的鮮味，100%純魚鬆不添加碗豆粉，每一口魚鬆都散發著海洋的芬芳。無論是濃郁的魚香味還是鬆軟的回感，都能讓您沉浸在美食的享受之中。香酥美味，營養加倍，堅持品質，嚴格把關無添加防腐劑。',
      },
    ],
  },
  {
    id: 'SSG001',
    hotSale: false,
    hotSaleNumber: 0,
    name: '飛魚卵香腸',
    price: 200,
    cover: '/shop/products/sausage-flyfish-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/sausage-flyfish-sub-1.png'],
        subTitle: '海的鮮美與土地的風味',
        description: '從海洋的深處 ，采撷出來的實藏，每一粒飛魚卵都蘊含著大海的味道，融合了海的鮮美與土地的風味。我們的飛魚卵香腸．不僅是一道料理，更是一場味覺的探險之旅，讓每一口都是對大自然的致敬，讓每一餐，都是一次美味的饗宴。飛魚卵香腸，細嚼之間，品味大海的恩腸。',
      },
    ],
  },
  {
    id: 'SSG002',
    hotSale: false,
    hotSaleNumber: 0,
    name: '黑鮪魚香腸',
    price: 200,
    cover: '/shop/products/sausage-tuna-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/sausage-tuna-sub-1.png'],
        subTitle: '大海的奥秘與鮮美',
        description: '來自深邃海底的黑鮪魚，凝聚著大海的奥秘與鮮美。我們精心挑選，巧妙調配，將黑鮪魚與香腸完結合，創造出獨特的風味,每一絲香氟都是對料理的尊嚴。讓我們的黑鮪魚香腸，帶您漫遊在大海的浪漫之中，享受味番的盛宴，品味生活的美好。',
      },
    ],
  },
  {
    id: 'SSG003',
    hotSale: false,
    hotSaleNumber: 0,
    name: '墨魚香腸',
    price: 200,
    cover: '/shop/products/sausage-cuttlefish-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/sausage-cuttlefish-sub-1.png'],
        subTitle: '享受無盡的美味之旅',
        description: '在深邃的海洋中，墨魚靜靜地閃爍著獨特的光芒，散發著神秘的魅力。我們將這份海洋之珍運用於料理，精心製作出墨魚香腸，每一口都蘊含著大海的深邃和神秘。墨魚的鮮美與香腸的豐潤完美結合，讓您的味雷沉醉其中，享受無盡的美味之旅。墨魚香腸是對大海的一份致敬，也是味覺的一場冒險。',
      },
    ],
  },
  {
    id: 'SSG004',
    hotSale: false,
    hotSaleNumber: 0,
    name: '花枝香腸',
    price: 200,
    cover: '/shop/products/sausage-squid-cover.png',
    unit: '包',
    intro: [
      {
        subImage: ['/shop/products/sausage-squid-sub-1.png'],
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

// 業務部門－各部門執掌
export const departmentJobs: DepartmentJobs[] = [
  {
    name: '輔導股',
    value: 'support',
    content: [
      {
        title: '漁船筏管理',
        value: [
          '協助辦理漁船筏設籍及報關簿換發',
          '協助辦理申請漁業執照換發',
          '協助辦理申請小船執照和監理執照換發',
          '協助辦理申請漁船筏定期檢查',
          '協助辦理申請漁船筏汰建和改造、繼承及買賣過戶',
          '協助辦理申請老舊漁船收購',
          '協助辦理申請黑鮪魚捕撈作業許可',
          '協助辦理申請遠洋漁業作業許可證',
          '協助辦理申請各洋區作業許可',
          '協助辦理填報沿近海漁船卸魚聲明',
          '協助辦理娛樂漁船相關事宜',
        ],
      },
      {
        title: '漁船筏員管理',
        value: [
          '協助辦理基本安全訓練報名',
          '協助辦理申請漁船船員手冊核發及換(補)發',
          '協助辦理申請船員僱用、解僱及登錄事宜',
          '協助辦理申請非我國籍船員證核發及換(補)發',
          '協助辦理申請境外非我國籍船員簽證、僱、解僱及登錄事宜',
        ],
      },
      {
        title: '漁船幹部船員訓練',
        value: [
          '協助辦理幹部船員訓練報名',
          '協助辦理申請幹部船員證照核發及換(補)發',
          '協助辦理申請歐盟衛生評鑑及訓練',
        ],
      },
      {
        title: '漁船(民)海難(被扣)',
        value: [
          '協助辦理申請漁船(民)海難慰問金',
          '協助辦理申請漁民被扣家屬慰問金',
          '協助辦理申請屏東縣漁民海難救助金',
          '協助辦理申請漁船海難救助金',
          '協助辦理申請救難漁船獎勵金',
          '協助辦理申請漁民救難獎勵金',
          '協助辦理申請漁民海難子女獎助學金',
          '協助辦理申請漁船無故遭外國政府裁處罰金(鍰)或擔保金之救濟金',
          '協助辦理申請國外遭難(被扣)遣返保險金、補助金、墊借款',
          '協助辦理申請漁船海上作業拾得人體浮屍補貼金',
          '協助辦理遠洋漁船協助海上急難事件及搜救獎勵',
        ],
      },
      {
        title: '漁船筏儀器設備',
        value: [
          '協助辦理申請航行紀錄器(VDR)安裝及換裝',
          '協助辦理申請漁船船位回報器(VMS) 裝補助費及繳納通訊費',
          '協助辦理漁船船位回報器(VMS)開機及關機',
          '協助辦理申請漁獲回報器(e-logbook) 安裝補助費',
          '協助辦理申請漁船筏主(副)機馬力安裝及變更和免稅證明簽證',
          '協助辦理申請漁船筏購買救生衣補助費',
          '協助辦理申請漁船筏裝置 AIS 船舶自動識別器補助費',
        ],
      },
      {
        title: '漁船筏保險',
        value: [
          '協助辦理申請 20 噸以下漁船筏參加產物保險及出險理賠',
          '協助辦理申請漁船筏產物保險費補助款',
        ],
      },
      {
        title: '漁業相關福利及補助',
        value: [
          '協助辦理申請漁民子弟水產獎學金',
          '協助辦理申請鼓勵國人上船工作獎勵金',
          '協助辦理申請漁船筏汽油補貼款',
        ],
      },
      {
        title: '其他相關協助事項',
        value: [
          '協助辦理政府宣導漁業政令及法規和漁船海上航安、實彈射擊等漁業相關公告事項',
          '協助辦理申請漁船民參與祭祀活動事宜',
          '協助辦理漁業糾紛調解',
          '協助辦理漁船海上緊急通報事件',
          '協助辦理風災漁業災情查',
          '協助辦理爭取設置漁業公共設施及維護',
          '協助辦理船員疾病防疫工作事宜',
          '協助辦理漁民教育組織訓練事宜',
          '協助辦理蒐集中小型鮪延繩釣漁船遠洋漁獲數據資料計畫事宜',
          '協助辦理招募觀察員事宜',
          '協助辦理漁港管理事宜',
          '協助辦理漁業年報調查事宜',
        ],
      },
    ],
  },
  {
    name: '會務股',
    value: 'meeting',
    content: [
      {
        title: '總務',
        value: [
          '本會內部會務',
          '會員代表會',
          '理監事會議',
          '漁船保險等業務',
        ],
      },
      {
        title: '受理漁民申請入、出會',
        value: [
          {
            subTitle: '甲類會員',
            description: '遠洋、近海漁船需每年實際從事漁業勞動之三個月證明，已 加入本會為甲類會員屆滿 15 年以上,且年滿 50 歲者，每年須從事漁業勞動最低一百 次之海上勞動經歷證明文件。',
          },
          {
            subTitle: '乙類會員',
            description: '依漁會法第十五條第二款規定辦理',
          },
          {
            subTitle: '贊助會員',
            description: '依漁會法第十五條第三款規定辦理',
          },
        ],
      },
      {
        title: '勞工保險',
        value: [
          {
            subTitle: '辦理會員保險',
            description: '凡本會甲類會員均得以申請參加勞工保險，如有生育、退休、傷病、失能、失蹤、 死亡、老漁津貼等之保險事項，均代為向勞保局申請給付保險金。',
          },
          {
            subTitle: '辦理漁民職業災害保險',
            description: '退休後從事漁業工作之本會甲類會員，得攜身分證及印章，親自至漁會申請職業災 害保險，如因漁業工作導致傷病、失能及死亡等事項，均代為向勞保局申請給付保 險金。',
          },
        ],
      },
      {
        title: '全民健保',
        value: [
          {
            subTitle: '受理會員及眷屬申辦健保業務',
            description: '',
          },
          {
            subTitle: '辦理漁民職業災害保險',
            description: '新住民(陸籍)須取得旅行證發證日起滿四個月始得參加健保，並得依附配偶參加 健保。得攜帶 (1)影印本(旅行證)、(2)印章(本人或配偶)、(3)戶口名簿、(4)費用。 新住民(其他外籍)參加全民健保須取得外僑居留證或定居證發證日起滿四個月，並得依附配偶參加健保。得攜帶(1)影印本(定居證)、(2)印章(本人或配偶)、(3)戶口名簿、(4)費用。',
          },
          {
            subTitle: '辦理農漁民子女獎勵金',
            description: '一年兩次、大學一級上學期可以辦理。',
          },
          {
            subTitle: '調整投保薪資',
            description: '每年有實際從事漁業工作,欲調薪之本會甲類會員，得攜身分證及 印章，親自至漁會辦理。',
          },
        ],
      },
    ],
  },
  {
    name: '推廣部',
    value: 'promotion',
    content: [
      {
        title: '業務簡介',
        value: [
          '辦理漁事業務，成立漁事班,每年辦理漁市觀摩活動。',
          '每年辦理區漁會漁民節慶祝大會，推薦全國模範漁民',
          '管理娛樂漁船相關事宜',
          '宣導政府相關政令',
          '琉球沿岸漁業資源保育',
          '海上廢棄物通報',
          '漁民海上糾紛',
          '休閒漁業',
          '自願性休漁獎勵申請',
          {
            subTitle: '家政推廣',
            description: '遠洋、近海漁船需每年實際從事漁業勞動之三個月證明，已 加入本會為甲類會員屆滿 15 年以上,且年滿 50 歲者，每年須從事漁業勞動最低一百 次之海上勞動經歷證明文件。',
          },
          {
            subTitle: '四建推廣',
            description: '漁村青少年發展計畫,與琉球當地國中、國小青少年辦理四件活動，宣導食魚教 育、海洋永續及資源保育等。',
          },
        ],
      },
    ],
  },
  {
    name: '信用部',
    value: 'credit',
    content: [
      {
        title: '存款業務',
        value: [
          '支票存款 ',
          '活期存款 ',
          '員工活期儲蓄存款  ',
          '定期存款：1 個月期、3 個月期、6 個月期 ',
          '定期儲蓄存款（一年期）',
        ],
      },
      {
        title: '放款業務',
        value: [
          '擔保放款',
          '無擔保放款',
          '專案農業貸款(輔導漁業經營貸款、漁業週轉金貸款、農家綜合貸款、漁機貸款)  ',
          '青年安居貸款',
        ],
      },
      {
        title: '委託辦理業務',
        value: [
          '代收第六類健保費',
          '代收國稅:地方稅款(房屋稅、地價稅、牌照稅、營業稅、綜所稅)',
          '代辦台灣產物保險:意外險、旅平險、火險、地震險、保障型壽險、終身醫療險、公司汽車保險、汽機車強制險、個人傷害險',
          '外幣買賣 (美金、日幣、人民幣)',
        ],
      },
      {
        title: '其他業務',
        value: [
          '台灣行動支付(台灣pay)、一卡通iPASSMONEY',
          '配合財團法人農漁會南區資訊中心辦理。CD/ATM(轉帳)及各項代辦業務。',
          'ATM 自動櫃員機據點: 琉球區漁會 1F、東琉交通船售票處、7-11 花瓶岩門市(設有存款功能)、7-11 白燈塔門市(設有存款功能)',
        ],
      },
    ],
  },
]

// 關於琉漁－歷年獲獎
export const awardsHistoryList = [
  [{
    title: '113 年第十八屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }, {
    title: '112 年第十七屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '112 年海宴水產精品入圍',
    description: [
      '小琉球純魚鬆禮盒組(鬼頭刀、旗魚、鮪魚純魚鬆)',
    ],
  }, {
    title: '112 年度漁村青少年技藝傳承推廣教育計畫(南區)',
    description: [
      '食農教育作業組影片競賽-第三名',
    ],
  }, {
    title: '111 年第十六屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '111 年度獲頒農業部漁業署',
    description: [
      '優等漁會',
    ],
  }],
  [{
    title: '110 年第十五屆農金獎',
    description: [
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '109 年度漁村技藝培育推廣教育計畫(南區)',
    description: [
      '漁村在地食材料理競賽-第二名',
    ],
  }, {
    title: '109 年度漁村青少年技藝傳承推廣教育計畫(南區)',
    description: [
      '食農教育及漁業技藝競賽-優等',
    ],
  }, {
    title: '109 年第十四屆農金獎',
    description: [
      '漁會金融服務獎-甲等獎',
    ],
  }, {
    title: '108年第十三屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }],
  [{
    title: '107年第十二屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }, {
    title: '106年第十一屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '105年第十屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
    ],
  }, {
    title: '104年第九屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎戊組-優等獎',
      '農業金融偏鄉服務獎入圍佳作',
    ],
  }, {
    title: '103年榮獲海洋奧斯卡',
    description: [
      '漁業資源永續面向',
      '兼顧漁業資源永續及經濟利用合理進行漁業��理',
    ],
  }],
  [{
    title: '103年第八屆農金獎',
    description: [
      '營運卓越獎戊組入圍',
    ],
  }, {
    title: '102年第七屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
      '農業信用保證業務績效獎-優等獎',
    ],
  }, {
    title: '101年第六屆農金獎',
    description: [
      '漁會金融服務獎-優等獎',
    ],
  }, {
    title: '100年第五屆農金獎',
    description: [
      '漁會金融服務獎-特優獎',
      '營運卓越獎丙組-優等獎',
      '農業信用保證業務績效獎-優等獎',
    ],
  }, {
    title: '100年海宴水產精品',
    description: [
      '小琉球魚鬆禮盒（鬼頭刀、旗魚、鮪魚魚鬆）',
    ],
  }],
  [{
    title: '100年第三屆十大魅力漁港',
    description: [
      '奔向大海-小琉球漁港',
    ],
  }, {
    title: '99 年第二屆十大魅力漁港',
    description: [
      '樂活休閒-小琉球漁港',
    ],
  }, {
    title: '99 年度漁事推廣成果評鑑',
    description: [
      '第二名',
    ],
  }, {
    title: '98 年第三屆農金獎',
    description: [
      '營運卓越獎丙組-特優獎',
    ],
  }, {
    title: '95 年農金獎農漁會信用部經營績效競賽',
    description: [
      '信用業務營運卓越獎',
    ],
  }],
  [{
    title: '94 年農金獎農漁會信用部經營績效競賽',
    description: [
      '信用業務營運績效優良獎',
      '資產品質管理績效獎',
    ],
  }, {
    title: '93 年度農漁會信用部農貸服務績效暨降低逾放比競賽',
    description: [
      '農貸服務績效獎',
      '營運績效傑出獎',
    ],
  }],
]

// 便民服務－聯絡資訊
export const contactData = [
  {
    title: '會務股',
    contactPhone: [
      {
        phone: '(08)861-1245',
        icon: 'mdi-light:phone',
      },
      {
        phone: '(08)861-3312',
        icon: 'teenyicons:print-outline',
      },
    ],
  },
  {
    title: '輔導股',
    contactPhone: [
      {
        phone: '(08)861-1709',
        icon: 'mdi-light:phone',
      },
      {
        phone: '(08)861-2394',
        icon: 'teenyicons:print-outline',
      },
    ],
  },
  {
    title: '推廣部',
    contactPhone: [
      {
        phone: '(08)861-4470',
        icon: 'mdi-light:phone',
      },
      {
        phone: '(08)861-4469',
        icon: 'teenyicons:print-outline',
      },
    ],
  },
  {
    title: '信用部',
    contactPhone: [
      {
        phone: '(08)861-2512',
        icon: 'mdi-light:phone',
      },
      {
        phone: '(08)861-1180',
        icon: 'mdi-light:phone',
      },
      {
        phone: '(08)861-1473',
        icon: 'teenyicons:print-outline',
      },
    ],
  },
]

// 便民服務－友站連結
export const friendLink = [
  // 跑馬燈前 8 個公部門
  {
    title: '農業部',
    link: 'https://www.moa.gov.tw/',
    image: '/contact-us/moa.png',
  },
  {
    title: '農業部漁業署',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink1.png',
  },
  {
    title: '海洋委員會海洋保育署',
    link: 'https://www.oca.gov.tw/ch/index.jsp',
    image: '/contact-us/oca.png',
  },
  {
    title: '海洋委員會海巡署南部分署',
    link: 'https://www.cga.gov.tw/GipOpen/wSite/mp?mp=9991',
    image: '/contact-us/SBCGAOAC.png',
  },
  {
    title: '屏東縣政府',
    link: 'https://www.pthg.gov.tw/Default.aspx',
    image: '/contact-us/pingtung_gov.png',
  },
  {
    title: '琉球鄉公所',
    link: 'https://www.pthg.gov.tw/liuchiu/Default.aspx',
    image: '/contact-us/liuqiu_office.png',
  },
  {
    title: '屏東縣海洋及漁業事務管理所',
    link: 'https://www.pthg.gov.tw/pt-mfam/Default.aspx',
    image: '/contact-us/pingtung_fisher_management.png',
  },
  {
    title: '大鵬灣國家風景區管理處',
    link: 'https://admin.taiwan.net.tw/dbnsa/',
    image: '/contact-us/dapeng_bay.png',
  },

  // 跑馬燈－民間單位
  {
    title: '中華民國全國漁會',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink2.png',
  },
  {
    title: '農訓協會',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/fa.png',
  },
  {
    title: '全國農業金庫',
    link: 'https://www.fa.gov.tw/',
    image: '/contact-us/friendLink3.png',
  },
  {
    title: '財團法人農業信用保證基金',
    link: 'https://www.acgf.org.tw/',
    image: '/contact-us/acgf.png',
  },
  {
    title: '南農中心',
    link: 'https://www.fast.org.tw/',
    image: '/contact-us/friendLink4.png',
  },
  {
    title: '漁業廣播電台',
    link: 'https://www.frs.gov.tw/',
    image: '/contact-us/frs.png',
  },
  {
    title: '中華民國四健協會',
    link: 'https://www.4h.org.tw/',
    image: '/contact-us/4h_org.png',
  },
  {
    title: '臺灣鮪延繩釣協會',
    link: 'https://www.ttl.org.tw/',
    image: '/contact-us/ttl.png',
  },
  {
    title: '勞保局E化服務',
    link: 'https://edesk.bli.gov.tw/me/#/home',
    image: '/contact-us/edesk.png',
  },
]
