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
      SignedUrl: "https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fs1.1zoom.ru%2Fbig3%2F76%2F356720-admin.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 1,
      SignedUrl: "https://yandex.ru/images/search?pos=1&from=tabbar&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8c%2F09%2Fae%2F8c09ae6305cc3a920c996dff7a8c3c98.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 2,
      SignedUrl: "https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F11%2Fd8%2Fc6%2F11d8c6e216d07ffa4fa17b8a0e9ec187.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 3,
      SignedUrl: "https://yandex.ru/images/search?pos=3&from=tabbar&img_url=https%3A%2F%2Fimg.goodfon.com%2Foriginal%2F4500x2971%2Fc%2F1b%2Fozero-gory-les-zakat-derevya.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 4,
      SignedUrl: "https://yandex.ru/images/search?pos=5&from=tabbar&img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F76%2F34%2F54%2F763454db829c433f3ef728766bc7b7ef.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 5,
      SignedUrl: "https://yandex.ru/images/search?pos=9&from=tabbar&img_url=https%3A%2F%2Fwww.funnyart.club%2Fuploads%2Fposts%2F2023-04%2F1682874315_funnyart-club-p-krasivie-peizazhi-prirodi-krasivo-1.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 6,
      SignedUrl: "https://yandex.ru/images/search?pos=18&from=tabbar&img_url=https%3A%2F%2Fs2.best-wallpaper.net%2Fwallpaper%2F2560x1920%2F1501%2FGrand-Teton-National-Park-Wyoming-USA-trees-mountains-lake_2560x1920.jpg&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
      Description: "string"
    },
    {
      Id: 7,
      SignedUrl: "https://yandex.ru/images/search?pos=19&from=tabbar&img_url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-ydo%2F4362967%2F2a0000017e1c6b0a7d5a72b5b0a778cdeac3%2Fdiploma&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8&rpt=simage&lr=43",
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