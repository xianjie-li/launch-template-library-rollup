import _ from 'lodash';
const isDev = process.env.BUILD === 'development';

/**
 *  合并两份配置，规则：
 *  数组: push
 *  对象: 覆盖
 *  */
export const margeConf = (_base, _target) => {
  let base = _.cloneDeep(_base);
  let target = _.cloneDeep(_target);

  for (let key in _target) {
    if (target[key]) {
      if (base[key] && Array.isArray(base[key]) && Array.isArray(target[key])) {
        base[key].push(...target[key]);
      } else {
        base[key] = target[key];
      }
    }
  }

  return base;
};

export const getCopyConf = entrys => {
  console.log(process.env.BUILD);

  /* 基础配置 */
  let copyTaget = [
    isDev
      ? { src: 'packages/assets', dest: ['esm'] }
      : { src: 'packages/assets', dest: ['lib', 'esm', 'dist'] },
    { src: 'packages/Style', dest: ['lib', 'esm'] } 
  ];

  Object.entries(entrys).forEach(([k, v]) => {
    if (k !== 'index') {
      copyTaget.push(
        isDev
          ? { src: `packages/${k}/style`, dest: [`esm/${k}`] }
          : { src: `packages/${k}/style`, dest: [`lib/${k}`, `esm/${k}`] }
      );
    }
  });

  return copyTaget;
};
