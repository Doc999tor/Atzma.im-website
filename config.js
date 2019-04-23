var config = {
  locale: 'en',
  modules: {
    why: [
		{
			name: 'Business Management',
			icon: '/dist/media/ic_business.svg'
		},
		{
			name: 'Appointments Calendar',
			icon: '/dist/media/ic_calendar.svg'
		},
		{
			name: 'SMS Notifications',
			icon: '/dist/media/ic_sms_notifications.svg'
		},
		{
			name: 'Client’s Subscriptions',
			icon: '/dist/media/ic_client_subscriptions.svg'
		},
		{
			name: 'Clients Management',
			icon: '/dist/media/ic_clients_management.svg'
		},
		{
			name: 'Tasks and Reminders',
			icon: '/dist/media/ic_tasks_reminders.svg'
		},
	],
	business_types: [
		{
			name: 'Hair Salons',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
			icon: '/dist/media/pic_mask.jpg'
		},
		{
			name: 'Massage Centers',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
			icon: '/dist/media/pic_mask_massage.jpg'
		},
		{
			name: 'Sports & Fitness',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
			icon: '/dist/media/pic_mask_sport.jpg'
		},
		{
			name: 'Hair Salons',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
			icon: '/dist/media/pic_mask.jpg'
		},
		{
			name: 'Hair Salons',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
			icon: '/dist/media/pic_mask.jpg'
		},
	]
},
		// {
		// 	name: "why",
		// 	content: [{ // * 6 items
		// 		name: "business_management",
		// 		icon: "business_management.svg",
		// 	}],
		// },
		// {
		// 	name: "showcases"
		// },
		// {
		// 	name: "business_types",
		// 	content: [{
		// 		name: "hair_salons",
		// 		picture: "hair_salons" // picture will render jpg and webp
		// 	}]
		// },
		// {
		// 	name: "feedback",
		// 	content: [{
		// 		id: 1,
		// 		customer_name: "Mary Hall",
		// 		rating: 5,
		// 		picture: "1",  // picture will render jpg and webp
		// 		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!",
		// 	}],
		// },
		/*"pricing"*/
	// ],
	urls: {
		social_networks: [{
			name: "facebook",
			url: "facebook",
			icon: 'facebook.svg',
		}],
		login: "/login",
		signup: "/signup",
		media: './dist/media/'
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
					text: "Business Management",
					alt: "Business Management",
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
					title: "Hair Salons",
					text: "Hair Salons",
					alt: "Hair Salons",
				}
			}
		},
		feedback: {
			main_title: "Feedback from our customers",
			subtitle: "Here you can leave your feedback about our product",
			leave_btn_label: "Leave Feedback",
		},
	},
}