const path = require('path');
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    /*
    * Поумолчанию вывод осуществляется в ./dist/main.js
    * но можно изменить вывод, добавиви опцию output
    * */
    // output: {
    //     filename: "bundle.js",
    //     path: path.join(__dirname, "./build")
    // }
};