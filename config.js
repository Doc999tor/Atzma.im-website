var config = {
  locale: 'en',
  isRTL: false,
  modules: {
    why: [
      {
        name: 'Business Management',
        icon: 'ic_business.svg'
      },
      {
        name: 'Appointments Calendar',
        icon: 'ic_calendar.svg'
      },
      {
        name: 'SMS Notifications',
        icon: 'ic_sms_notifications.svg'
      },
      {
        name: 'Client’s Subscriptions',
        icon: 'ic_client_subscriptions.svg'
      },
      {
        name: 'Clients Management',
        icon: 'ic_clients_management.svg'
      },
      {
        name: 'Tasks and Reminders',
        icon: 'ic_tasks_reminders.svg'
      },
    ],
    business_types: [
      {
        id: 1,
        name: 'Hair Salons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask.jpg',
        icon_web: 'pic_mask.webp'
      },
      {
        id: 2,
        name: 'Massage Centers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask_massage.jpg',
        icon_web: 'pic_mask_massage.webp'
      },
      {
        id: 3,
        name: 'Sports & Fitness',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask_sport.jpg',
        icon_web: 'pic_mask_sport.webp'
      },
      {
        id: 4,
        name: 'Hair Salons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask.jpg',
        icon_web: 'pic_mask.webp'
      },
      {
        id: 5,
        name: 'Hair Salons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask.jpg',
        icon_web: 'pic_mask.webp'
      },
      {
        id: 6,
        name: 'Massage Centers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask_massage.jpg',
        icon_web: 'pic_mask_massage.webp'
      },
      {
        id: 7,
        name: 'Massage Centers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        icon: 'pic_mask_massage.jpg',
        icon_web: 'pic_mask_massage.webp'
      },
    ],
    feedback: [
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
      },
    ],
    navigation: [
      {name: 'Home', url: '#hero'},
      {name: 'Why Atzmaim', url: '#why'},
      {name: 'Showcase', url: '#showcases'},
      {name: 'Business Types', url: '#business-types'},
      {name: 'Customers', url: '#feedback'}
      // {name: 'Pricing', url: '#'}
    ]
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
      {name: 'twitter', url: 'twitter', icon: 'ic_twitter.svg'},
      {name: 'facebook', url: 'facebook', icon: 'ic_facebook.svg'},
      {name: 'instagram', url: 'instagram', icon: 'ic_instagram.svg'}
    ],
    login: '/login',
    signup: '/signup',
    media: './dist/media/',
    media_clients: './dist/clients/'
  },
  translations: {
    navigation: {
      why_us: 'Why Atzmaim',
      showcase: 'Showcase',
      business_types: 'Business Types',
      customers: 'Customers',
      pricing: 'Pricing',
      home: 'HOME',
      features: 'FEATURES',
      about: 'ABOUT US',
      support: 'SUPPORT',
      contact: 'CONTACT US',
      footer_info: '©2019 Atzmaim  |  All rights reserved'
    },
    hero: {
      main_logo: 'ATZMAIM',
      main_title: 'Manage Business Easily',
      log_in: 'Log in',
      sign_up: 'Sign Up',
      description: 'We’ve created for you an application with calendar,clients appointments, automated text reminders andother useful tools for managing your business easy',
      join_us: 'Join Now for Free'
    },
    why: {
      content: {
        why_atmza: 'Why Atzmaim',
        why_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        business_management: {   // * 6 items
          text: 'Business Management',
          alt: 'Business Management',
        },
      }
    },
    showcases: {
      main_title: 'App that makes business easy',
      learn_more: 'Learn More',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua'
    },
    business_types: {
      main_title: 'Business Types',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      content: {
        hair_salons: {
          title: 'Hair Salons',
          text: 'Hair Salons',
          alt: 'Hair Salons',
        }
      }
    },
    feedback: {
      alt_pic: 'User avatar',
      main_title: 'Feedback from our customers',
      subtitle: `Here you can leave your feedback about our
			product. Reviews are publishing instantly`,
      leave_btn_label: 'Leave Feedback',
    },
  },
}