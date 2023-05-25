module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-custom-media'),
        require('postcss-mixins'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-nesting'),
        require('postcss-color-function'),
        require('postcss-clean'),
    ],
};
