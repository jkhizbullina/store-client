const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: 'src/home/main.js',
    home: 'src/home/main.js',
    add_word: 'src/add_word/main.js',
    words_list: 'src/words_list/main.js'
  }
})