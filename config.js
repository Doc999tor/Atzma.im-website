{
	modules: [
		{
			name: "hero"
		},
		{
			name: "why",
			content: [{ // * 6 items
				name: "business_management",
				icon: "business_management.svg",
			}],
		},
		{
			name: "showcases"
		},
		{
			name: "business_types",
			content: [{
				name: "hair_salons",
				picture: "hair_salons" // picture will render jpg and webp
			}]
		},
		{
			name: "feedback",
			content: [{
				id: 1,
				customer_name: "Mary Hall",
				rating: 5,
				picture: "1",  // picture will render jpg and webp
				text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, unde recusandae laudantium, laborum adipisci perferendis sequi id ex officia voluptate hic asperiores soluta fuga nulla est, excepturi? Harum, repellat, commodi!",
			}],
		},
		/*"pricing"*/
	],
	urls: {
		social_networks: [{
			name: "facebook",
			url: "facebook",
			icon: 'facebook.svg',
		}],
		login: "/login",
		signup: "/signup",
	},
	translations: {
		hero: {},
		why: {
			content: {
				business_management: {   // * 6 items
					text: "Business Management",
					alt: "Business Management",
				},
			}
		},
		showcases: {},
		business_types: {
			title: "Business Types",
			subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quia deserunt, inventore dolorum, laudantium sunt commodi architecto officia, maxime repudiandae reiciendis nostrum! Cupiditate sit error, quod molestiae nemo blanditiis delectus.",
			content: {
				hair_salons: {
					title: "Hair Salons",
					text: "Hair Salons",
					alt: "Hair Salons",
				}
			}
		},
		feedback: {
			title: "Feedback from our customers",
			subtitle: "Here you can leave your feedback about our product",
			leave_btn_label: "Leave Feedback",
		},
	},
}