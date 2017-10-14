<template>
  <div class="emfe-menu" :class="menuName" ref="menu">
    <div class="emfe-menu-main">
      <button class="emfe-menu-main-header" @click="menuToShort">
        <emfe-icon class="emfe-menu-main-sidebar" type="cedaohangshouqi" @icon-click="menuToShort" v-if="menuShort"></emfe-icon>
        <emfe-icon class="emfe-menu-main-sidebar" type="cedaohangzhankai" @icon-click="menuToShort" v-else></emfe-icon>
      </button>
      <div class="emfe-menu-iscroll">
        <ul class="emfe-menu-main-list">
          <li class="emfe-menu-main-item" v-for="(data, dataIndex) in newDatas">
            <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="tochildren(data)" v-if="data.routers">
              <emfe-tooltip className="emfe-menu" placement="right" :disable="!menuShort">
                <emfe-icon class="emfe-menu-main-icon" :type="data.icon" slot="render" @icon-click="tochildren(data)"></emfe-icon>
                <span slot="tip">{{ data.title }}</span>
              </emfe-tooltip>
              <span class="emfe-menu-main-text">{{ data.title }}</span>
            </a>
            <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="tochildren(data)" v-else>
              <emfe-tooltip className="emfe-menu" placement="right" :disable="!menuShort">
                <emfe-icon class="emfe-menu-main-icon" :type="data.icon" slot="render" @icon-click="tochildren(data)"></emfe-icon>
                <span slot="tip">{{ data.title }}</span>
              </emfe-tooltip>
              <span class="emfe-menu-main-text">{{ data.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="emfe-menu-minor" v-show="childrentatus">
      <h3 class="emfe-menu-minor-header">{{ childrenTitle }}</h3>
      <div class="emfe-menu-minor-iscroll">
        <ul class="emfe-menu-minor-list">
          <template v-for="(childrenData, childrenDataIndex) in childrenDatas">
            <li class="emfe-menu-minor-item" v-if="!childrenData.children">
              <router-link :to="childrenData.routers" class="emfe-menu-minor-link">{{ childrenData.title }}</router-link>
            </li>
            <li class="emfe-menu-minor-item" :class="{'emfe-menu-minor-item-on': childrenIndex == childrenDataIndex}" v-else>
              <span href="javascript:;" class="emfe-menu-minor-btn" @click="toogleChild(childrenDataIndex)" >{{ childrenData.title }}</span>
              <i class="emfe-menu-minor-arrow"></i>
              <emfe-transition name="gradual">
                <ul class="emfe-menu-minor-childlist" v-show="childrenIndex == childrenDataIndex">
                  <li class="emfe-menu-minor-childitem" v-for="child in childrenData.children">
                    <router-link :to="child.routers" class="emfe-menu-minor-childlink">{{ child.title }}</router-link>
                  </li>
                </ul>
              </emfe-transition>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Contant from '../../../contant';
import srceen from '../../../tools/screen';
import O from '../../../tools/o';

let childrenLast = -1; // 记录上一个点击的二级手风琴的索引
let screenMd = ''; // 屏幕是否大于992

export default {
  name: 'EmfeMenu',
  data() {
    return {
      Contant,
      childrenDatas: [],
      newDatas: [],
      childrenIndex: -1,
      mainIndex: -1,
      childrenTitle: '',
      menuShort: false,
      childrentatus: false, // 记录二级是否打开
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: Array,
    fullpath: {
      type: String,
      default: '',
    },
  },
  computed: {
    menuName() {
      return [
        {
          'emfe-menu-on': this.menuShort,
          [`${this.className}-menu`]: !!this.className,
        },
      ];
    },
  },
  created() {
    this.handle(this.datas);
    const resizeHandle = () => {
      const screenMdResize = srceen.screenMd();
      if (screenMd !== screenMdResize) {
        screenMd = screenMdResize;
        this.menuToShort('resize');
      } else {
        screenMd = '';
      }
    };

    resizeHandle();

    window.addEventListener('resize', resizeHandle);
  },
  methods: {
    handle(val) {
      this.newDatas = val;
    },
    testUrl() {
      const { fullPath, name } = this.$route;
      let item = {};
      let itemIndex = -1;

      const newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.newDatas.forEach((data, dataNum) => {
        const newDataFullPath = O.hOwnProperty(data, 'routers') && O.hOwnProperty(data.routers, 'path') && newFullPath.indexOf(data.routers.path) > -1;
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach((dataChild, dataChildIndex) => {
            const inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            // 如果二级导航有子节点
            if (O.hOwnProperty(dataChild, 'children')) {
              dataChild.children.forEach((dataGrandson) => {
                const inGrandsonFullPath = O.hOwnProperty(dataGrandson, 'routers') && O.hOwnProperty(dataGrandson.routers, 'path') && newFullPath.indexOf(dataGrandson.routers.path) > -1;
                if (inGrandsonFullPath || name === dataGrandson.routers.name) {
                  // 打开二级导航的折叠
                  this.toogleChild(dataChildIndex);
                  item = data;
                  itemIndex = dataNum;
                }
              });
            } else if (inChildFullPath || name === dataChild.routers.name) {
              item = data;
              itemIndex = dataNum;
            }
          });
        } else if (O.hOwnProperty(data, 'routers') && (newDataFullPath || name === data.routers.name)) {
          this.mainIndex = dataNum;
        }
      });
      if (itemIndex > -1) {
        this.mainIndex = itemIndex;
        this.menuMainClick(item);
      }
    },
    toogleChild(itemIndex) {
      const eqLast = itemIndex === childrenLast;
      this.childrenIndex = eqLast ? -1 : itemIndex;
      childrenLast = eqLast ? -1 : itemIndex;
    },
    tochildren(item) {
      if (O.hOwnProperty(item, 'routers') || O.hOwnProperty(item, 'url')) {
        this.childrenIndex = -1;
        childrenLast = -1;
        this.$emit('short', this.menuShort, this.childrentatus);
      }

      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }

      if (O.hOwnProperty(item, 'children')) {
        // this.menuMainClick(item, itemIndex);
        // 默认跳转
        this.tochildren(item.children[0]);
      }
    },
    menuMainClick(item) {
      this.childrenDatas = item.children;
      this.childrenTitle = item.title;
      this.childrentatus = true;
      this.$emit('column', this.menuShort, this.childrentatus);
    },
    menuToShort(type) {
      if (type === 'resize') {
        this.menuShort = !screenMd;
      } else {
        this.menuShort = !this.menuShort;
      }
      this.$emit('short', this.menuShort, this.childrentatus);
    },
  },
  watch: {
    fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    datas(val, oldVal) {
      if (val !== oldVal) {
        this.handle(val);
      }
    },
  },
};
</script>
