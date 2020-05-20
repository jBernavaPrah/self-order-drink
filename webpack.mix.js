const mix = require('laravel-mix');

mix.webpackConfig({
    devtool: 'inline-source-map'
});

mix.ts('resources/ts/index.tsx', 'public/js')
    .extract(['react']);
mix.sourceMaps();


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.react('resources/js/app.js', 'public/js').sass('resources/sass/app.scss', 'public/css');
