var config = {
  locale: 'en',
  isRTL: false,
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
          id: 1,
          name: 'hair_salons',
          icon: 'pic_mask'
        },
        {
          id: 2,
          name: 'massage_centers',
          icon: 'pic_mask_massage'
        },
        {
          id: 3,
          name: 'sports_fitness',
          icon: 'pic_mask_sport'
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
  // {
  // 	name: 'why',
  // 	content: [{ // * 6 items
  // 		name: 'business_management',
  // 		icon: 'business_management.svg',
  // 	}],
  // },
  // {
  // 	name: 'showcases'
  // },
  // {
  // 	name: 'business_types',
  // 	content: [{
  // 		name: 'hair_salons',
  // 		picture: 'hair_salons' // picture will render jpg and webp
  // 	}]
  // },
  // {
  // 	name: 'feedback',
  // 	content: [{
  // 		id: 1,
  // 		customer_name: 'Mary Hall',
  // 		rating: 5,
  // 		picture: '1',  // picture will render jpg and webp
  // 		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!',
  // 	}],
  // },
  /*'pricing'*/
  // ],
  urls: {
    social_networks: [
      {name: 'twitter', url: 'twitter', icon: 'ic_twitter.svg', alt: 'Twitter'},
      {name: 'facebook', url: 'facebook', icon: 'ic_facebook.svg', alt: 'Facebook'},
      {name: 'instagram', url: 'instagram', icon: 'ic_instagram.svg', alt: 'Instagram'}
    ],
    login: '/login',
    signup: '/signup',
    media: './dist/media/',
    media_clients: './dist/clients/',
    media_business_types: './dist/business_types/'
  },
}
