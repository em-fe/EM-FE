<template>
  <div class="emfe-menu" :class="menuName" ref="menu">
    <div class="emfe-menu-main">
      <button class="emfe-menu-main-header" @click="menuToShort">
        <emfe-icon class="emfe-menu-main-sidebar" type="sidebar"></emfe-icon>
      </button>
      <ul class="emfe-menu-main-list">
        <li class="emfe-menu-main-item" v-for="(data, dataIndex) in datas">
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="tochildren(data, dataIndex)" v-if="data.routers">
            <emfe-tooltip placement="right" :disable="!menuShort">
              <emfe-icon class="emfe-menu-main-icon" :type="data.icon"  slot="render"></emfe-icon>
              <span slot="tip">{{ data.title }}</span>
            </emfe-tooltip>
            <span class="emfe-menu-main-text">{{ data.title }}</span>
          </a>
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="tochildren(data, dataIndex)" v-else>
            <emfe-tooltip placement="right" :disable="!menuShort">
              <emfe-icon class="emfe-menu-main-icon" :type="data.icon"  slot="render"></emfe-icon>
              <span slot="tip">{{ data.title }}</span>
            </emfe-tooltip>
            <span class="emfe-menu-main-text">{{ data.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="emfe-menu-minor" v-show="childrenDatas.length">
      <h3 class="emfe-menu-minor-header">{{ childrenTitle }}</h3>
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
</template>
<script>
import srceen from '../../../tools/screen';
import O from '../../../tools/o';

let childrenLast = -1; // 记录上一个点击的二级手风琴的索引
let childrentatus = false; // 记录二级是否打开
let screenMd = ''; // 屏幕是否大于992

export default {
  name: 'EmfeMenu',
  data() {
    return {
      childrenDatas: [],
      childrenIndex: -1,
      mainIndex: -1,
      childrenTitle: '',
      menuShort: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: Array,
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
    const resizeHandle = () => {
      const screenMdResize = srceen.screenMd();
      if (screenMd !== screenMdResize) {
        screenMd = screenMdResize;
        this.menuToShort('resize');
      }
    };

    resizeHandle();
    // 刷新的时候，检测导航选中
    this.testUrl();

    window.addEventListener('resize', resizeHandle);
  },
  methods: {
    testUrl() {
      const { fullPath, name } = this.$route;
      let item = {};
      let itemIndex = -1;

      this.datas.forEach((data, dataNum) => {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach((dataChild, dataChildIndex) => {
            // 如果二级导航有子节点
            if (O.hOwnProperty(dataChild, 'children')) {
              dataChild.children.forEach((dataGrandson) => {
                if (fullPath === dataGrandson.routers.path || name === dataGrandson.routers.name) {
                  // 打开二级导航的折叠
                  this.toogleChild(dataChildIndex);
                  item = data;
                  itemIndex = dataNum;
                }
              });
            } else if (fullPath === dataChild.routers.path || name === dataChild.routers.name) {
              item = data;
              itemIndex = dataNum;
            }
          });
        } else if (O.hOwnProperty(data, 'routers') && (fullPath === data.routers.path || name === data.routers.name)) {
          this.mainIndex = dataNum;
        }
      });
      if (itemIndex > -1) {
        this.menuMainClick(item, itemIndex);
      }
    },
    toogleChild(itemIndex) {
      const eqLast = itemIndex === childrenLast;
      this.childrenIndex = eqLast ? -1 : itemIndex;
      childrenLast = eqLast ? -1 : itemIndex;
    },
    tochildren(item, itemIndex) {
      if (O.hOwnProperty(item, 'routers') || O.hOwnProperty(item, 'url')) {
        this.mainIndex = itemIndex;
        this.childrenDatas = [];
        this.childrenIndex = -1;
        childrenLast = 0;
        childrentatus = false;
        this.$emit('short', this.menuShort, childrentatus);
      }

      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }

      if (O.hOwnProperty(item, 'children')) {
        this.menuMainClick(item, itemIndex);
      }
    },
    menuMainClick(item, itemIndex) {
      this.childrenDatas = item.children;
      this.childrenTitle = item.title;
      this.mainIndex = itemIndex;
      childrentatus = true;
      this.$emit('column', this.menuShort, childrentatus);
    },
    menuToShort(type) {
      if (type === 'resize') {
        this.menuShort = !screenMd;
      } else {
        this.menuShort = !this.menuShort;
      }
      this.$emit('short', this.menuShort, childrentatus);
    },
  },
};
</script>
