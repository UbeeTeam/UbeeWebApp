export const mockData = {
  // Профиль мастера
  master: {
    Master: {
      Id: 4,
      Name: 'Наталья Бочкарева',
      GenderId: 0,
      Rating: 3.4,
      IsFavorite: true,
      FeedBackCount: 46,
      AvatarSignedUrl: "https://yandex.ru/images/search?text=%D0%BB%D0%B8%D1%86%D0%BE+%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F+%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0&img_url=https%3A%2F%2Fruban.com%2Fstorage%2Fposts%2Fupeer.ir_215.jpg&pos=1&rpt=simage&stype=image&lr=43&parent-reqid=1718347868911929-14689240769874143629-balancer-l7leveler-kubr-yp-sas-44-BAL&source=serp",
      Description: "Я сертифицированный мастер по окраске и наращиванию ресничек. Создаю уникальный выразительный взгляд. Пока работаю 2,5-3 часа, поэтому низкая стоимость. Прорабатываю каждую ресничку и не оставляю склеек. Жду вас у себя в кабинете в уютной обстановке.",
      GeoLatitude: 0,
      GeoLongitude: 0,
      HasFreeTime: true,
      MasterActivities: [
        {
          Id: 0,
          ActivityTemplateId: 0,
          ActivityTemplateName: "string",
          ExperienceStartYear: 0,
          Experience: "string"
        }
      ],
      MasterServices: [
        {
          Id: 0,
          MasterActivityId: 0,
          Name: "string",
          Cost: 0,
          Duration: 0
        }
      ]
    }
  },

  // Портфолио мастера (картинки)
  Portfolios: [
    {
      Id: 0,
      SignedUrl: "string",
      Description: "string"
    }
  ],

  // Отзывы мастера
  Feedbacks: [
    {
      Id: 0,
      MasterId: "string",
      CustomerId: "string",
      CustomerName: "string",
      Comment: "string",
      Rate: 0,
      PublishDate: "string",
      MasterActivityIds: [
        0
      ]
    }
  ]


}