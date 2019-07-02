module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    // https://github.com/babel/babel/blob/master/packages/babel-preset-stage-0/README.md
    // Stage 3
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-syntax-dynamic-import',
    // hot-reload
    'react-hot-loader/babel',
  ]
};
