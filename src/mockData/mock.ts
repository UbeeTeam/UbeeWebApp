export const mockData = {
  // Профиль мастера
    master: {
      Id: 4,
      Name: 'Наталья Бочкарева',
      GenderId: 0,
      Rating: 3.8,
      IsFavorite: true,
      FeedBackCount: 228,
      AvatarSignedUrl: "https://img.goodfon.ru/original/1680x1050/3/4e/anyuta-makiyazh-fon-portret.jpg",
      Description: "Я сертифицированный мастер по окраске и наращиванию ресничек. Создаю уникальный выразительный взгляд и четкий прикид. Пока работаю 2,5-3 часа, поэтому низкая стоимость. Прорабатываю каждую ресничку и не оставляю склеек. Жду вас у себя в кабинете в уютной обстановке.",
      GeoLatitude: 12.4924,
      GeoLongitude: 41.8902,
      HasFreeTime: true,
      MasterActivities: [
        {
          Id: 0,
          ActivityTemplateId: 0,
          ActivityTemplateName: "Ногтевой сервис",
          ExperienceStartYear: 5,
          Experience: "менее 5 лет"
        },
        {
          Id: 1,
          ActivityTemplateId: 1,
          ActivityTemplateName: "Ресницы",
          ExperienceStartYear: 3,
          Experience: "более 3 лет"
        }
      ],
      MasterServices: [
        {
          Id: 0,
          MasterActivityId: 1,
          Name: "Наращивание ресниц",
          Cost: 2000,
          Duration: 40
        },
        {
          Id: 1,
          MasterActivityId: 1,
          Name: "Двойной объём / 2D",
          Cost: 2500,
          Duration: 30
        },
        {
          Id: 3,
          MasterActivityId: 1,
          Name: "Тройной объём / 3D",
          Cost: 3500,
          Duration: 50
        },

      ]
    },

  // Портфолио мастера (картинки)
  Portfolios: [
    {
      Id: 0,
      SignedUrl: "https://i.artfile.ru/2560x1600_835577_[www.ArtFile.ru].jpg",
      Description: "string"
    },
    {
      Id: 1,
      SignedUrl: "https://wp-s.ru/wallpapers/9/10/497395245124617/osennij-pejzazh-doroga-v-gorax.jpg",
      Description: "string"
    },
    {
      Id: 2,
      SignedUrl: "https://get.wallhere.com/photo/trees-landscape-mountains-sunset-lake-nature-reflection-sunrise-evening-morning-wilderness-dusk-cloud-autumn-mountain-dawn-meadow-1920x1080-px-loch-computer-wallpaper-mountain-range-623342.jpg",
      Description: "string"
    },
    {
      Id: 3,
      SignedUrl: "https://s1.1zoom.ru/big7/367/Lake_Mountains_Sunrises_433183.jpg",
      Description: "string"
    },
    {
      Id: 4,
      SignedUrl: "https://img.razrisyika.ru/kart/64/252790-gornyy-peyzazh-36.jpg",
      Description: "string"
    },
    {
      Id: 5,
      SignedUrl: "https://www.funnyart.club/uploads/posts/2023-04/1682874368_funnyart-club-p-krasivie-peizazhi-prirodi-krasivo-13.jpg",
      Description: "string"
    },
    {
      Id: 6,
      SignedUrl: "https://img1.akspic.ru/attachments/crops/5/3/6/2/0/102635/102635-pejzazhi_gor-dikaya_mestnost-gora-gornyj_relef-nebo-2560x1440.jpg",
      Description: "string"
    },
    {
      Id: 7,
      SignedUrl: "https://img.razrisyika.ru/kart/64/252759-gornyy-peyzazh-5.jpg",
      Description: "string"
    },
  ],

  // Отзывы мастера
  Feedbacks: [
    {
      Id: 0,
      MasterId: "4",
      CustomerId: "23",
      CustomerName: "Валентина Петрова",
      Comment: "Мне понравилась работа мастера, все прошло быстро, свою работу сделала профессионально и качественно, как я и просила.",
      Rate: 4,
      PublishDate: "1718190883",
      MasterActivityIds: [
        0,1
      ]
    },
    {
      Id: 1,
      MasterId: "4",
      CustomerId: "24",
      CustomerName: "Людмила Васильевна",
      Comment: "Прошла маникюр и наращивание ресниц у мастера, и осталась в восторге! Руки золотые, маникюр аккуратный и безупречный, а ресницы выглядят естественно и прекрасно подчеркивают глаза. Очень довольна результатом!",
      Rate: 5,
      PublishDate: "1648293283",
      MasterActivityIds: [
        0
      ]
    },
    {
      Id: 1,
      MasterId: "4",
      CustomerId: "24",
      CustomerName: "Аркадий Петрович",
      Comment: "Очень приятно удивлена работой мастера по маникюру и наращиванию ресниц! Процедура прошла комфортно, все делалось профессионально и с аккуратностью. Теперь мои ногти и ресницы выглядят настоящими произведениями искусства. Рекомендую!",
      Rate: 2,
      PublishDate: "1718190883",
      MasterActivityIds: [
        1
      ]
    },
  ]


}