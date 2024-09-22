<script lang="ts" setup>
import {
  Tabs,
} from '@/components/ui/tabs'

interface Optional {
  subTitle: string
  description: string
}

export interface Tab {
  name: string
  value: string
  content: {
    title: string
    value: (string | Optional)[]
  }[]
}

const tabs: Tab[] = [
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
          '協助辦理��員疾病防疫工作事宜',
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
            description: '新住民(中國籍)須取得旅行證發證日起滿四個月始得參加健保，並得依附配偶參加 健保。得攜帶 (1)影印本(旅行證)、(2)印章(本人或配偶)、(3)戶口名簿、(4)費用。 新住民(其他外籍)參加全民健保須取得外僑居留證或定居證發證日起滿四個月，並得依附配偶參加健保。得攜帶(1)影印本(定居證)、(2)印章(本人或配偶)、(3)戶口名簿、(4)費用。',
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
          '專案農業貸款(輔導漁業經營貸款、漁業週轉金貸款、農家綜合貸款、漁���貸款)  ',
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
</script>

<template>
  <div class="index bg-primary-50">
    <div class="container w-full px-6 pt-6 md:flex md:justify-between md:pt-[93px]">
      <div class="md:max-w-[500px]">
        <div class="space-y-2 md:space-y-5">
          <h1 class="serif text-3xl font-bold tracking-widest text-neutral-950 md:text-5xl">
            業務部門
          </h1>
          <p class="text-sm text-neutral-400 md:text-base">
            Departments
          </p>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtImg
          src="/department/banner-sm.svg"
          alt="aboutUsBanner"
          width="250"
          height="250"
          class="md:hidden"
        />

        <NuxtImg
          src="/about-us/banner.svg"
          alt="aboutUsBanner"
          width="500"
          height="500"
          class="hidden md:block"
        />
      </div>
    </div>

    <div class="bg-white py-10 md:py-[100px]">
      <div class="container w-full">
        <ClientOnly>
          <Tabs
            default-value="support"
          >
            <DepartmentTabTrigerList
              :tabs="tabs"
            />

            <!-- 輔導股 -->
            <DepartmentSupportContent
              :tabs="tabs"
            />

            <!-- 會務股 -->
            <DepartmentMeetingContent
              :tabs="tabs"
            />

            <!-- 推廣部 -->
            <DepartmentPromotionContent
              :tabs="tabs"
            />

            <!-- 信用部 -->
            <DepartmentCreditContent
              :tabs="tabs"
            />
          </Tabs>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
