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
					{text: "Driving School"},
					{text: "High School"},
					{text: "Kinder Garten"},
					{text: "Header Video"}
				]
			},
			{
				titolo: "Courses",
				items: [
					{text: "Our Courses"},
					{text: "Single Course"},
					{text: "Instructor Profile"},
					{text: "Become A Teacher"}
				]
			},
			{
				titolo: "About Us"
			},
			{
				titolo: "News",
				items: [
					{text: "EduPrime Blog"},
					{text: "Single Post"},
					{text: "Category Posts"}
				]
			},
			{
				titolo: "Pages",
				items: [
					{text: "How it Works"},
					{text: "Single Event"},
					{text: "University Shop"},
					{text: "Single Product"}
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
		currentBg: {}
	},
	mounted() {
		//metto in current BG un background random
		let rand = Math.floor(Math.random() * 3);
		this.currentBg = {
			backgroundImage: `url('${this.backgroundHeader[rand]}')`
		};
	},
	computed: {},
	methods: {}
});
