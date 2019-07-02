import path from 'path';

/* 基础 */
import resolve from 'rollup-plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

/* css */
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

/* 性能 */
import { terser } from 'rollup-plugin-terser';

/* 构建 */
import re from 'rollup-plugin-re';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

/* friendly */
import visualizer from 'rollup-plugin-visualizer';
import progress from 'rollup-plugin-progress';

/* 工具 */
import _ from 'lodash';
import { margeConf, getCopyConf } from './util';
import entrys from '../entrys.json';

/* 排除的依赖列表，cjs和esm环境下使用peerDepsExternal自动抽离，umd环境需要手动指定 */
const externalList = [];
// const externalList = [/^@babel\/runtime/, /^lodash/, 'react', 'classnames', 'prop-types', 'react-dom'];

function external(id) {
  return externalList.some(v => {
    if (_.isRegExp(v) && v.test(id)) {
      return true;
    }

    return _.isString(v) && v.indexOf(id) === 0;

  });
}

const isDev = process.env.BUILD === 'development'

/* 基础配置 */
export const baseConfig = {
  external: external,
  plugins: [
    !isDev && clear({
      targets: [
        path.resolve(__dirname, '../dist'),
        path.resolve(__dirname, '../esm'),
        path.resolve(__dirname, '../lib'),
      ],
      // watch: true // default: false
    }),
    copy({
      targets: getCopyConf(entrys),
      // copyOnce: isDev
    }),
    commonjs(),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
      ],
    }),
    localResolve(),
    resolve(),
    visualizer({
      filename: 'stats.html',
    }),
    progress(),
  ],
};

function getUmdConfig(isMini) {
  return {
    input: 'packages/index.js',
    external: [],
    output: {
      format: 'iife',
      file: `dist/index${isMini ? '.min' : ''}.js`,
      name: 'Blink',
      // globals: {
      //   'lodash/get': '_.get'
      // }
    },
    plugins: [
      re({
        include: 'packages/**/*.(sa|sc|c)ss',
        replaces: {
          '../../aseets/': './assets/',
        },
      }),
      isMini && terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
      postcss({
        plugins: [autoprefixer, cssnano],
        extract: path.resolve(__dirname, `../dist/index${isMini ? '.min' : ''}.css`),
        extensions: ['.css', '.scss', '.sass'],
        minimize: isMini,
      }),
    ],
  };
}

export function getModuleConfig(type) {
  return {
    input: entrys,
    output: [
      {
        format: type,
        dir: type === 'cjs' ? 'lib' : 'esm',
        entryFileNames: '[name]/index.js',
        chunkFileNames: 'publicChunk/[name]-[hash].js',
        sourcemap: isDev ? 'inline' : false,
      },
    ],
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      // re({
      //   include: 'packages/**/*.(sa|sc|c)ss',
      //   replaces: {
      //     $aseets$: '../assets',
      //   },
      // }),
      postcss({
        plugins: [autoprefixer, cssnano],
        extract: path.resolve(__dirname, `../${type === 'cjs' ? 'lib' : 'esm'}/index/style/index.css`),
        extensions: ['.css', '.scss', '.sass'],
      }),
    ],
  };
}

export default [
  margeConf(baseConfig, getUmdConfig()),
  margeConf(baseConfig, getUmdConfig(true)),
  margeConf(baseConfig, getModuleConfig('cjs')),
  margeConf(baseConfig, getModuleConfig('esm')),
];
