import { baseConfig, getModuleConfig } from './rollup.config';
import { margeConf } from './util';

export default {
  ...margeConf(baseConfig, getModuleConfig('esm')),
  watch: {
    chokidar: true,
    include: 'packages/**'
  },
  cache: true
};
