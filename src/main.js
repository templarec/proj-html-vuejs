//proj-html-vuejs - 21/04/21
// Author: lorenzobernini
/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		menu: [
			{
				titolo: "Home",
				items: ["Driving School", "High School", "Kinder Garten", "Header Video"]
			},
			{
				titolo: "Courses",
				items: ["Our Courses", "Single Course", "Instructor Profile", "Become A Teacher"]
			},
			{
				titolo: "About Us"
			},
			{
				titolo: "News",
				items: ["EduPrime Blog", "Single Post", "Category Posts"]
			},
			{
				titolo: "Pages",
				items: ["How It Works", "Single Event", "University Shop", "Single Product"]
			},
			{
				titolo: "Contact"
			},
			{
				titolo: "Purchase"
			}
		]
	},
	computed: {},
	methods: {}
});