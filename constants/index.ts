import type { News } from '~/types'
import type { DepartmentJobs } from '~/pages/Departments.vue'

export const appName = '琉球區漁會'
export const appDescription = '小琉球是一座位於屏東縣西南方大海上的珊瑚礁島嶼。漁會以保障漁民權益，提高漁民知識、技能，增加漁民生產收益，改善漁民生活，促進漁業現代化，並謀其發展為宗旨。'
export const officialFacebookUrl = 'https://www.facebook.com/liuyu929000/'
export const ShopFacebookUrl = 'https://www.facebook.com/profile.php?id=61559380793880'
export const lineUrl = 'https://line.me/R/ti/p/@961vipno?ts=05281850&oat_content=u'

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
    name: '推廣股',
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
    title: '推廣股',
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
    link: 'http://www.rocnfa.org.tw/',
    image: '/contact-us/friendLink2.png',
  },
  {
    title: '農訓協會',
    link: 'https://www.ntifo.org.tw/ntifo_web/',
    image: '/contact-us/fa.png',
  },
  {
    title: '全國農業金庫',
    link: 'https://www.agribank.com.tw/',
    image: '/contact-us/friendLink3.png',
  },
  {
    title: '財團法人農業信用保證基金',
    link: 'https://www.acgf.org.tw/',
    image: '/contact-us/acgf.png',
  },
  {
    title: '財團法人農漁會南區資訊中心',
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
    link: 'https://www.fourh.org.tw/',
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

// 關於琉漁－沿革發展
export const historyCardList = [
  {
    number: '01',
    title: '漁會歷史',
    picture: '/about-us/history.png',
    pictureSm: '/about-us/history-sm.png',
    description: '琉球漁會成立初期',
    content: [
      {
        title: '民國十四年三月',
        description: '高雄州東港郡琉球庄漁業者獲准成立『琉球漁業組合』，會址設於琉球庄役場內。',
      },
      {
        title: '民國卅三年',
        description: '改制為『保證責任琉球漁業協同組合』。',
      },
      {
        title: '民國卅三年',
        description: '與林邊、佳冬、新園等地一同併入東港，成立東港漁業會，在琉球設辦事處。',
      },
      {
        title: '民國四十二年',
        description: '光復以後，地方人士為琉球漁業之發展及謀求漁民之福利，熱心籌劃聯繫，民國四十二年七月依照『台灣省各級漁會改進辦法』，成立『琉球區漁會』迄今。',
      },
    ],
  },
  {
    number: '02',
    title: '漁會現況',
    picture: '/about-us/now.jpg',
    pictureSm: '/about-us/now.jpg',
    description: '琉球漁會現址',
    content: [
      {
        title: '會員概況',
        description: '現有3500餘人。漁筏、舢舨及延繩釣漁船共計640餘艘。延繩釣漁船分別在國內沿近海及國外基地關島、帛琉、密棟、雅加達、檳城、新加坡、普吉島、斯里蘭卡等基地作業。國內沿近海作業漁船所捕撈魚貨有鮪、旗、沙魚等種類。本會因受環境地理影響無法設立魚市場，大多均駛往高雄及東港魚市場銷售。雖然本會無魚市場管理費收入，仍辦理各項漁業業務及福利措施，設立多方部門替漁友及鄉親服務，實現漁會設立宗旨。',
      },
    ],
  },
  {
    number: '03',
    title: '琉球一隅',
    picture: '',
    pictureSm: '',
    description: '',
    content: [],
  },
]
