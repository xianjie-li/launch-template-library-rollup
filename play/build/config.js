const path = require('path');

module.exports = {
  publicPath: './',  // 资源访问路径
  publicDirName: 'public',  // 集中存放静态资源的目录名
  gizp: true,
  analyzer: true,   // 包分析
  hash: true,   // 文件hash
  htmlAssetsHash: false,  // 打包时给html的引用资源打上hash
  dropConsole: true,    // 移除console
  sassOption: {
    // data: '@import "@/style/_base/index.scss";',
    precision: 3
  },
  proxy: {},
  extensions: ['.js', '.jsx'],
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@esm': path.resolve(__dirname, '../../esm'),
  },

  page: {
    loadAll: true,  // 是否使用所有匹配到的页面作为入口，当页面过多时建议关闭以提升性能
    pageList: [],   // loadAll为false时，手动指定需要作为入口的文件(不带后缀)
  },

  env: {
    dev: {
      BASE_URL: '/api/dev'
    },
    prod: {
      BASE_URL: '/api/prod'
    },
    test: {
      BASE_URL: '/api/test'
    }
  },
}