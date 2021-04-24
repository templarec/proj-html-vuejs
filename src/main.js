//proj-html-vuejs - 21/04/21
// Author: lorenzobernini
const app = new Vue({
	el: '#root',
	data: {
		//array background disponibili per il jumbo
		backgroundHeader: ["./assets/img/theme_slider1_bg-1.jpg", "./assets/img/theme_slider2_bg-1.jpg", "./assets/img/theme_slider3_bg-1.jpg"],
		//menu della navbar
		menu: [
			{
				titolo: "Home",
				items: [
					{
						text: "Driving School",
						url: "#"
					},
					{
						text: "High School",
						url: "#"
					},
					{
						text: "Kinder Garten",
						url: "#"
					},
					{
						text: "Header Video",
						url: "#"
					}
				]
			},
			{
				titolo: "Courses",
				items: [
					{
						text: "Our Courses",
						url: "#"
					},
					{
						text: "Single Course",
						url: "#"
					},
					{
						text: "Instructor Profile",
						url: "#"
					},
					{
						text: "Become A Teacher",
						url: "#"
					}
				]
			},
			{
				titolo: "About Us"
			},
			{
				titolo: "News",
				items: [
					{
						text: "EduPrime Blog",
						url: "#"
					},
					{
						text: "Single Post",
						url: "#"
					},
					{
						text: "Category Posts",
						url: "#"
					}
				]
			},
			{
				titolo: "Pages",
				items: [
					{
						text: "How it Works",
						url: "#"
					},
					{
						text: "Single Event",
						url: "#"
					},
					{
						text: "University Shop",
						url: "#"
					},
					{
						text: "Single Product",
						url: "#"
					}
				]
			},
			{
				titolo: "Contact"
			},
			{
				titolo: "Purchase"
			}
		],
		//background del jumbo corrente random
		currentBg: {},
		currentTab: 1,
		faculties: [
			{
				image: './assets/img/Gavel-Illustration-e1556884768193.png',
				titolo: 'Law Faculty',
				descrizione: 'Learning from world-leading academics and practitioners, ' +
					'you\'ll not only receive an outstanding grounding in the theory of law, ' +
					'but you will be able to understand how those principles are applied in practice ' +
					'through a range of student-led activities and competitions.'
			},
			{
				image: './assets/img/Economy.png',
				titolo: 'Economy',
				descrizione: 'Economics focuses on the behaviour and interactions of economic ' +
					'agents and how economies work. Microeconomics analyzes basic elements in the ' +
					'economy, including individual agents and markets, their interactions, and the ' +
					'outcomes of interactions, including unemployment of resource.'
			},
			{
				image: './assets/img/Medicine.png',
				titolo: 'Medicine',
				descrizione: 'Medicine is the science and practice of establishing the diagnosis,' +
					' prognosis, treatment, and prevention of disease. Medicine encompasses a' +
					' variety of health care practices evolved to maintain and restore health ' +
					'by the prevention and treatment of illness.'
			},
			{
				image: './assets/img/Computer-Science.png',
				titolo: 'Computer Science',
				descrizione: 'Computer science is the study of processes that interact with ' +
					'data and that can be represented as data in the form of programs. ' +
					'It enables the use of algorithms to manipulate, store, and communicate ' +
					'digital information. A computer scientist studies the theory of ' +
					'computation software systems.'
			},
			{
				image: './assets/img/Graphic-Design.png',
				titolo: 'Graphic Design',
				descrizione: 'Graphic design is the process of visual communication and ' +
					'problem-solving through the use of typography, photography and ' +
					'illustration. The field is considered a subset of visual communication ' +
					'and communication design, but sometimes the term ``graphic design`` ' +
					'is used synonymously.'
			}
		],
		partners: [
			{
				path: './assets/img/Partner-2.png',
				alt: 'Medals',
				url: '#'
			},
			{
				path: './assets/img/Partner-3.png',
				alt: 'Light Bulb',
				url: '#'
			},
			{
				path: './assets/img/Partner-4.png',
				alt: 'Stack Books',
				url: '#'
			},
			{
				path: './assets/img/Partner-5.png',
				alt: 'School Building',
				url: '#'
			},
			{
				path: './assets/img/Partner-6.png',
				alt: 'Handmade',
				url: '#'
			},
			{
				path: './assets/img/Partner-8.png',
				alt: 'Cup logo',
				url: '#'
			},
			{
				path: './assets/img/Partner-1.png',
				alt: 'paper plane',
				url: '#'
			},
			{
				path: './assets/img/Partner-7.png',
				alt: 'ABC Communications',
				url: '#'
			}
		],
		inputNewsletter: '',
		emailNewsletter: [],
		footerLinks1: [
			{
				text: 'Get EduPrime',
				url: ''
			},
			{
				text: 'Request a website',
				url: '#'
			},
			{
				text: 'Browse Themes',
				url: '#'
			},
			{
				text: 'Payments options',
				url: '#'
			},
			{
				text: 'Support System',
				url: '#'
			},
			{
				text: 'Checkout',
				url: '#'
			},
			{
				text: 'Purchase Theme',
				url: '#'
			},
		],
		footerLinks2: [
			{
				text: 'Networking',
				url: ''
			},
			{
				text: 'Purchase Theme',
				url: '#'
			},
			{
				text: 'Our Benefits',
				url: '#'
			},
			{
				text: 'Our Team',
				url: '#'
			},
			{
				text: 'Our Services',
				url: '#'
			},
			{
				text: 'Other Products',
				url: '#'
			},
			{
				text: 'My Account',
				url: '#'
			},
		],
		categorie: [
			{
				id: 0,
				desc: 'economy'
			},
			{
				id: 1,
				desc: 'design'
			},
			{
				id: 2,
				desc: 'coaching'
			},
			{
				id: 3,
				desc: 'business'
			},
			{
				id: 4,
				desc: 'medicine'
			},
			{
				id: 5,
				desc: 'law'
			},
			{
				id: 6,
				desc: 'fitness'
			},
		]

	},
	mounted() {
		//metto in current BG un background random
		let rand = Math.floor(Math.random() * 3);
		this.currentBg = {
			backgroundImage: `url('${this.backgroundHeader[rand]}')`
		};
	},
	computed: {

	},
	methods: {
		changeTab: function (numero) {
			this.currentTab = numero;
		},
		saveEmail: function () {
			this.emailNewsletter.push(this.inputNewsletter);

		}
	}
});
