var config = {
  locale: 'en',
  isRTL: true,
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
    login: '/login',
    signup: '/signup',
    old_website: '/text_website.html',
    media: './dist/media/',
    media_clients: './dist/clients/',
    media_business_types: './dist/business_types/'
  },
  translations: {
    head: {
      title: 'title',
      description: 'description',
      keywords: 'keywords',
    },
    hero: {
      internal_link_name: 'HERO',
      main_logo: 'ATZMAIM',
      main_logo_label: 'ATZMAIM Logo',
      main_title: 'Manage Business Easily',
      log_in: 'Log in',
      sign_up: 'Sign Up',
      description: 'We’ve created for you an application with calendar,clients appointments, automated text reminders andother useful tools for managing your business easy',
      join_us: 'Join Now for Free',
      calendar_icon: 'Calendar picture'
    },
    why: {
      internal_link_name: 'WHY',
      content: {
        why_atmza: 'Why Atzmaim',
        why_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        business: 'Business Management',
        appointments: 'Appointments Calendar',
        notifications: 'SMS Notifications',
        subscriptions: 'Client’s Subscriptions',
        management: 'Client’s Management',
        reminders: 'Tasks and Reminders'
      }
    },
    showcases: {
      internal_link_name: 'SHOWCASES',
      main_title: 'App that makes business easy',
      learn_more: 'Learn More',
      description1: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua',
      description2: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua',
      icon_alt_text: 'Iphone icon'
    },
    business_types: {
      internal_link_name: 'BUSINESS TYPES',
      main_title: 'Business Types',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      content: {   // * 6 items
        hair_salons: {
          title: 'Hair Salons Title',
          text: 'Hair Salons Text',
          alt: 'Hair Salons Alt',
        },
        nail_and_makeup_artists: {
          title: 'nail_and_makeup_artists Title',
          text: 'nail_and_makeup_artists Text',
          alt: 'nail_and_makeup_artists Alt',
        },
        installers_and_technicians: {
          title: 'Installers and technicians Title',
          text: 'Installers and technicians Text',
          alt: 'Installers and technicians Alt',
        },
      }
    },
    feedback: {
      internal_link_name: 'FEEDBACK',
      alt_pic: 'User avatar',
      main_title: 'Feedback from our customers',
      subtitle: `Here you can leave your feedback about our
    product. Reviews are publishing instantly`,
      leave_btn_label: 'Leave Feedback'
    },
    footer: {
      copy_right: '{year} Atzmaim | All right reserved',
      old_website: 'old_website',
      social_networks: {
        facebook: 'https://atzma.im/facebook',
        twitter: 'https://atzma.im/twitter',
        instagram: 'https://atzma.im/instagram',
      },
    }
  }
}
