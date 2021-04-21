let mix = require('laravel-mix');
mix
	.sass('src/master.scss', 'assets/css/')
	.js('src/main.js', 'assets/js/')
	.options({
		processCssUrls: false
	});