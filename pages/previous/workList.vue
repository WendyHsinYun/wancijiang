<template lang="pug">
Article
  template(v-slot:mainTitle)
    | {{ $t('articles.worklist.mainTitle') }}

  template(v-slot:customContent)
    v-col.d-flex.flex-column(cols="12")
      ul
        li.my-2(v-for='article in articles' :key="article.date") 
          span.text-body-1 {{ article.date }} 
          a.text-body-1(target="_blank" href="article.link") {{ article.text }}
          
</template>

<script setup>
const { t } = useI18n();

const articles = [
  {
    date: t('article1_year'),
    text: t('article1_name'),
    link: "https://www.sehseh.world/article/4795476",
  },
  {
    date: t('article2_year'),
    text: t('article2_name'),
    link: "https://www.sehseh.world/article/4734094",
  },  
  {
    date: t('article3_year'),
    text: t('article3_name'),
    link: "https://www.sehseh.world/article/4645198",
  },
  {
    date: t('article4_year'),
    text: t('article4_name'),
    link: "https://www.books.com.tw/products/0010936629",
  },  
  {
    date: t('article5_year'),
    text: t('article5_name'),
    link: "https://opinion.cw.com.tw/blog/profile/537/article/11596",
  },
  {
    date: t('article6_year'),
    text: t('article6_name'),
    link: "https://opinion.cw.com.tw/blog/profile/537/article/11577",
  },  
  {
    date: t('article7_year'),
    text: t('article7_name'),
    link: "https://opinion.cw.com.tw/blog/profile/537/article/11565",
  },
  {
    date: t('article8_year'),
    text: t('article8_name'),
    link: "https://opinion.cw.com.tw/blog/profile/537/article/11553",
  },  
  {
    date: t('article9_year'),
    text: t('article9_name'),
    link: "https://opinion.cw.com.tw/blog/profile/537/article/11547",
  },
  {
    date: t('article10_year'),
    text: t('article10_name'),
    link: "https://issues.ptsplus.tv/articles/886/",
  },  
  {
    date: t('article11_year'),
    text: t('article11_name'),
    link: "https://opinion.cw.com.tw/blog/profile/441/article/10072",
  },
  {
    date: t('article12_year'),
    text: t('article12_name'),
    link: "https://opinion.cw.com.tw/blog/profile/441/article/10067",
  },  
  {
    date: t('article13_year'),
    text: t('article13_name'),
    link: "https://visionproject.org.tw/story/1969",
  },
  {
    date: t('article14_year'),
    text: t('article14_name'),
    link: "https://visionproject.org.tw/story/1970",
  },
  {
    date: t('article15_year'),
    text: t('article15_name'),
    link: "",
  },
  {
    date: t('article16_year'),
    text: t('article16_name'),
    link: "https://opinion.cw.com.tw/blog/profile/52/article/7647",
  }
];

</script>

<i18n lang="yaml">
en:
  article1_year: 'June 9, 2023：'
  article1_name: 'Learning Chinese in Taiwan, Discussing a Summer Love Story: Her "Taipei Love Boat" Memories, published in "Wanderlust",'
  article2_year: 'February 17, 2023：'
  article2_name: 'A Taiwanese New Year for an Indonesian Caregiver: Doing Homework at the Employer''s Home, Karaoke in Donggang, published in "Wanderlust."'
  article3_year: 'December 6, 2022：'
  article3_name: 'Iranian Couple in Taiwan: Amini''s Death and the Complexity of Women''s Rights in Iran, published in "Wanderlust."'
  article4_year: 'October 5, 2022：'
  article4_name: 'Why Are Migrant Workers Always Live Streaming, published by Muma Culture Publishing in New Taipei City.'
  article5_year: 'November 10, 2021：'
  article5_name: 'Insights of a Hotel Public Relations: Being a Manager, Learning to Play a Dream with the Power of Gentleness, published in "CommonWealth Magazine Independent Review."'
  article6_year: 'November 6, 2021：'
  article6_name: 'Insights of a Hotel Public Relations: A Hotel, a Psychological Counseling Session with Drinks, published in "CommonWealth Magazine Independent Review."'
  article7_year: 'November 3, 2021：'
  article7_name: 'Insights of a Hotel Public Relations: Finding a Lonely Person, Like Finding Myself, published in "CommonWealth Magazine Independent Review."'
  article8_year: 'October 31, 2021：'
  article8_name: 'Confessions of the Homeless: Street Life is Like My Large Suitcase, Heavy but Can Carry a Lot, published in "CommonWealth Magazine Independent Review."'
  article9_year: 'October 28, 2021：'
  article9_name: 'Confessions of the Homeless: "For Me, Living on the Street is Like an Experiment," published in "CommonWealth Magazine Independent Review."'
  article10_year: 'January 5, 2021：'
  article10_name: 'Why is There an Association of Discrimination When Talking about the New Second Generation and New Immigrants? published in "Public Television Perspectives:Same or Different."'
  article11_year: 'October 29, 2020：'
  article11_name: 'Interview with the Winner of the 2020 Immigrant Worker Literature Award, Etik: Life in the Vocational Training Center, Who Would Choose Not to? published in "CommonWealth Magazine Independent Review."'
  article12_year: 'October 27, 2020：'
  article12_name: 'Interview with the Winner of the 2020 Immigrant Worker Literature Award, Tari: My Hometown Pugu, Where Women Are Like Diamonds, but Behind It is a Tale of Terror, published in "CommonWealth Magazine Independent Review."'
  article13_year: 'May 22, 2020：'
  article13_name: 'The Reasons We Sit Here Together: A Portrait of Migrant Workers at Taipei Station, published in "UDN Joint News Vision Project."'
  article14_year: 'March 9, 2020：'
  article14_name: 'Why Are Foreign Workers Always Live Streaming? In the World of Live Streaming, There is Still a Voice, published in "UDN Joint News Vision Project."'
  article15_year: 'April 1, 2019：'
  article15_name: 'Sunday Southeast Asia, published in "United Literature," (Issue 414:11-16), New Taipei City:Linking Publishing.'
  article16_year: 'January 8, 2019：'
  article16_name: 'On the First Day of 2019, I Was Elected as a "Fairy," published in "CommonWealth Magazine Independent Review."'

zh:
  article1_year: '2023.06.09，'
  article1_name: '〈到台灣學華語，再談一場夏日戀曲：她的「台北愛之船」回憶〉，《世界走走》。'
  article2_year: '2023.02.17，'
  article2_name: '〈一位印尼看護的台灣春節：在雇主家寫作業、去東港唱卡拉OK〉，《世界走走》。'
  article3_year: '2022.12.06，'
  article3_name: '〈在台伊朗夫妻：阿米尼之死與女權不是伊朗問題的全貌〉，《世界走走》。'
  article4_year: '2022.10.05，'
  article4_name: '《移工怎麼都在直播》，新北市：木馬文化出版。'
  article5_year: '2021.11.10，'
  article5_name: '〈【酒店公關的心聲】當一個經紀人，學會用溫柔的力量玩一場夢境〉，《天下雜誌獨立評論》。'
  article6_year: '2021.11.06，'
  article6_name: '〈【酒店公關的心聲】酒店，是一場有酒喝的心理諮商〉，《天下雜誌獨立評論》。'
  article7_year: '2021.11.03，'
  article7_name: '〈【酒店公關的心聲】找一個孤獨的人，就像在找我自己〉，《天下雜誌獨立評論》。'
  article8_year: '2021.10.31，'
  article8_name: '〈【無家者自白】街頭像我的大行李箱，很重，但可以裝很多〉，《天下雜誌獨立評論》。'
  article9_year: '2021.10.28，'
  article9_name: '〈【無家者自白】「對我來說，在街頭生活像是一種實驗」〉，《天下雜誌獨立評論》。'
  article10_year: '2021.01.05，'
  article10_name: '〈為什麼談到新二代、新住民，就會聯想到歧視呢？〉，《公視觀點同不同》。'
  article11_year: '2020.10.29，'
  article11_name: '〈【2020移民工文學獎得主專訪】Etik：在職訓中心裡的生活，哪有人會選擇不由？〉，《天下雜誌獨立評論》。'
  article12_year: '2020.10.27，'
  article12_name: '〈【2020移民工文學獎得主專訪】Tari：我的家鄉普古，女人猶若鑽石，但背後充斥著恐怖的童話〉，《天下雜誌獨立評論》。'
  article13_year: '2020.05.22 ，'
  article13_name: '〈我們一起坐在這裡的理由：台北車站移工群像〉，《UDN聯合報願景工程》。'
  article14_year: '2020.03.09，'
  article14_name: '〈外勞怎麼都在直播？—在直播的世界裡，還有聲音〉，《UDN聯合報願景工程》。'
  article15_year: '2019.04.01，'
  article15_name: '〈Sunday東南亞〉，《聯合文學》，（414期：11-16），新北市：聯經出版。'
  article16_year: '2019.01.08'
  article16_name: '〈我在2019年的第一天，選上了「仙女」〉，《天下雜誌獨立評論》。'
</i18n> 


<style lang="sass" scoped>
li
  position: relative
  line-height: 1.75
  list-style-type: none
  padding-left: 20px
  &::before
    content: '•' 
    color: $primaryText
    font-size: 14px
    position: absolute
    left: 0
    top: 3px

</style>