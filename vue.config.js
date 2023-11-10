const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: 'src/get_token/main.js',
    get_token: 'src/get_token/main.js',
    new_good: 'src/new_good/main.js',
    goods: 'src/goods/main.js'
  }
})