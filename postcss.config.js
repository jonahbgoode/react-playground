module.exports = {
    plugins: [
        // require('postcss-smart-import')({ /* ...options */ }),
        // require('precss')({ /* ...options */ }),
        require('autoprefixer')(),
        require('postcss-object-fit-images')
    ]
};