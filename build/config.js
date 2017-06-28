const vue = require('rollup-plugin-vue2');
const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const stringTem = require('rollup-plugin-string');
const pkg = require('../package.json');

const version = process.env.VERSION || pkg.version

const banner =
  '/*!\n' +
  ' * EMUI.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' '+ pkg.author +'\n' +
  ' * Released under the MIT License.\n' +
  ' */'

const builds = {
  'default': {
    entry: 'src/index.js',
    dest: 'dist/emui.js',
    format: 'umd',
  },
  'default.min': {
    entry: 'src/index.js',
    dest: 'dist/emui.min.js',
    format: 'umd',
  },
  'amd': {
    entry: 'src/index.js',
    dest: 'dist/emui-amd.js',
    format: 'amd',
  },
  'cjs': {
    entry: 'src/index.js',
    dest: 'dist/emui-cjs.js',
    format: 'cjs',
  },
  'es': {
    entry: 'src/index.js',
    dest: 'dist/emui-esm.js',
    format: 'es',
  },
  'umd': {
    entry: 'src/index.js',
    dest: 'dist/emui-umd.js',
    format: 'umd',
  },
  'iife': {
    entry: 'src/index.js',
    dest: 'dist/emui-iife.js',
    format: 'iife',
    banner,
  },
  'amd.min': {
    entry: 'src/index.js',
    dest: 'dist/emui-amd.min.js',
    format: 'amd',
  },
  'cjs.min': {
    entry: 'src/index.js',
    dest: 'dist/emui-cjs.min.js',
    format: 'cjs',
  },
  'es.min': {
    entry: 'src/index.js',
    dest: 'dist/emui-esm.min.js',
    format: 'es',
  },
  'umd.min': {
    entry: 'src/index.js',
    dest: 'dist/emui-umd.min.js',
    format: 'umd',
  },
  'iife.min': {
    entry: 'src/index.js',
    dest: 'dist/emui-iife.min.js',
    format: 'iife',
    banner,
  },
};

function genConfig (opts) {
  const config = {
    entry: 'src/index.js',
    dest: opts.dest,
    format: opts.format,
    banner: banner,
    moduleName: 'emui',
    plugins: [
      replace({
        __VERSION__: version
      }),
      vue(),
      buble(),
      stringTem({
        // Required to be specified
        include: '**/*.html',
        // Undefined by default
        exclude: ['**/index.html']
      }),
    ]
  }

  return config
}

exports.getAllBuilds = () => Object.keys(builds).map(name => genConfig(builds[name]))
