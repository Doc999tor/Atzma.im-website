var config = {
  locale: lang,
  isRTL: lang === 'he',
  modules: {
    hero: {},
    why: {
      internal_link: {
        name: 'why',
        url: 'why'
      },
      data: [
        {
          name: 'business',
          icon: 'ic_business.svg'
        },
        {
          name: 'subscriptions',
          icon: 'ic_client_subscriptions.svg'
        },
        {
          name: 'appointments',
          icon: 'ic_calendar.svg'
        },
        {
          name: 'management',
          icon: 'ic_clients_management.svg'
        },
        {
          name: 'notifications',
          icon: 'ic_sms_notifications.svg'
        },
        {
          name: 'reminders',
          icon: 'ic_tasks_reminders.svg'
        }
      ]
    },
    showcases: {
      internal_link: {
        name: 'showcases',
        url: 'showcases'
      }
    },
    business_types: {
      internal_link: {
        name: 'business_types',
        url: 'business_types'
      },
      data: [
        {
          name: 'hair_salons',
          icon: 'pic_mask'
        },
        {
          name: 'nail_and_makeup_artists',
          icon: 'nail_and_makeup_artists',
        },
        {
          name: 'installers_and_technicians',
          icon: 'installers_and_technicians',
        },
      ]
    },
    feedback: {
      internal_link: {
        name: 'feedback',
        url: 'feedback'
      },
      data: [
        {
          id: 1,
          customer_name: 'Mary Hall',
          rating: 3,
          picture: '1.jpg',  // picture will render jpg and webp
          picture_web: '1.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 2,
          customer_name: 'Emilia Clark',
          rating: 5,
          picture: '2.jpg',  // picture will render jpg and webp
          picture_web: '2.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 3,
          customer_name: 'Scarlett Johansson',
          rating: 5,
          picture: '3.jpg',  // picture will render jpg and webp
          picture_web: '3.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 4,
          customer_name: 'Mary Hall',
          rating: 5,
          picture: '1.jpg',  // picture will render jpg and webp
          picture_web: '1.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 5,
          customer_name: 'Mary Hall',
          rating: 5,
          picture: '1.jpg',  // picture will render jpg and webp
          picture_web: '1.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 6,
          customer_name: 'Mary Hall',
          rating: 5,
          picture: '1.jpg',  // picture will render jpg and webp
          picture_web: '1.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        },
        {
          id: 7,
          customer_name: 'Mary Hall',
          rating: 5,
          picture: '1.jpg',  // picture will render jpg and webp
          picture_web: '1.webp',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
        }
      ]
    },
    footer: {}
  },
  /* pricing: {} */
  urls: {
    social_networks: [
      { name: 'twitter', url: 'https://twitter', icon: 'ic_twitter.svg', },
      { name: 'facebook', url: 'https://facebook', icon: 'ic_facebook.svg', },
      { name: 'instagram', url: 'https://instagram', icon: 'ic_instagram.svg', }
    ],
    login: `/${lang}/login`,
    signup: `/${lang}/signup`,
    old_website: `/${lang}/text_website.html`,
    media: './dist/media/',
    media_clients: './dist/clients/',
    media_business_types: './dist/business_types/'
  },
}
