# library-rollup

> rollup配置， 用于开发react组件或library

## 默认入口
packages/index.js

<br/>

## 其他入口
要同时导出多个包时适用
packages/Xxx/index.js

<br/>

## style
此格式是为了兼容`babel-plugin-import`  
packages/Xxx/style/index.js  // 在这里引入其他样式文件
packages/Xxx/style/xxx.css  
packages/Xxx/style/xxx.scss  
> rollup的css分块能力较差，所以目前是统一打包所有css，然后分别移动各组件的style目录到输出目录的对应包下， 方便进行按需加载，如: /packages/Icon/style 打包后会被整个移动到 /lib/Icon/style、/esm/Icon/style,如果需要在css中引入文件或图片，请将图片放到assets中，然后css中通过../../引用

<br/>

## assets
资源目录，最后分别拷贝到对应的生成目录(esm/assets、lib/assets、dist/assets)中

<br/>

## 真题演练
play中包含了一套完善的webpack + react 开发配置，使用`npm run start`启动服务，通过 `@esm/Icon` 的方式引用编译出来的东西。

<br/>

## 输出
目前配置输出的包类型有iife、esm、commonjs。  
需要注意的是，如果非得要导iife或者umd包的话(不推荐), 调整配置文件中的external配置，声明需要外部化的包，并在output.globals中声明这些包的全局变量引入形式，如：
```js
// 字符串、正则
const externalList = [/^@babel\/runtime/, /^lodash/, 'react', 'classnames', 'prop-types'];

output: {
  globals: {  // 设置globals并不会达到external的效果，你仍然需在external中排除这些包
    'lodash/get': '_.get',
    'jquery': '$',
    'react': 'React',
  }
}

```
然后，修改output.name为你的包最后需要导出的全局变量名即可
