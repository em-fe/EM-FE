<template>
  <div class="emfe-menu" :class="menuName" ref="menu">
    <div class="emfe-menu-main">
      <button class="emfe-menu-main-header" @click="menuToShort">
        <emfe-icon class="emfe-menu-main-sidebar" type="sidebar"></emfe-icon>
      </button>
      <ul class="emfe-menu-main-list">
        <li class="emfe-menu-main-item" v-for="(data, dataIndex) in datas">
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="toColumns(data, dataIndex)" v-if="data.routers">
            <emfe-tooltip placement="right" :disable="!menuShort">
              <emfe-icon class="emfe-menu-main-icon" :type="data.icon"  slot="render"></emfe-icon>
              <span slot="tip">{{ data.title }}</span>
            </emfe-tooltip>
            <span class="emfe-menu-main-text">{{ data.title }}</span>
          </a>
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainIndex === dataIndex}" @click="toColumns(data, dataIndex)" v-else>
            <emfe-tooltip placement="right" :disable="!menuShort">
              <emfe-icon class="emfe-menu-main-icon" :type="data.icon"  slot="render"></emfe-icon>
              <span slot="tip">{{ data.title }}</span>
            </emfe-tooltip>
            <span class="emfe-menu-main-text">{{ data.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="emfe-menu-minor" v-show="columnsDatas.length">
      <h3 class="emfe-menu-minor-header">{{ columnsTitle }}</h3>
      <ul class="emfe-menu-minor-list">
        <template v-for="(columnsData, columnsDataIndex) in columnsDatas">
          <li class="emfe-menu-minor-item" v-if="!columnsData.childs">
            <router-link :to="columnsData.routers" class="emfe-menu-minor-link">{{ columnsData.title }}</router-link>
          </li>
          <li class="emfe-menu-minor-item" :class="{'emfe-menu-minor-item-on': columnsIndex == columnsDataIndex}" v-else>
            <span href="javascript:;" class="emfe-menu-minor-btn" @click="toogleChild(columnsDataIndex)" >{{ columnsData.title }}</span>
            <i class="emfe-menu-minor-arrow"></i>
            <emfe-transition name="gradual">
              <ul class="emfe-menu-minor-childlist" v-show="columnsIndex == columnsDataIndex">
                <li class="emfe-menu-minor-childitem" v-for="child in columnsData.childs">
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

let columnsLast = 0; // 记录上一个点击的二级手风琴的索引
let columnStatus = false; // 记录二级是否打开
let screenMd = ''; // 屏幕是否大于992

export default {
  name: 'EmfeMenu',
  data() {
    return {
      columnsDatas: [],
      columnsIndex: 0,
      mainIndex: -1,
      columnsTitle: '',
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
    // 如果在有二级，有子级的时候刷新，获取页面参数
    const { column, main } = this.$route.query;
    if (column) {
      this.columnsIndex = column - 0;
      columnStatus = true;
    }
    if (main) {
      this.mainIndex = main - 0;
      // 启动
      this.toColumns(this.datas[this.mainIndex], this.mainIndex);
    }

    const resizeHandle = () => {
      const screenMdResize = srceen.screenMd();
      if (screenMd !== screenMdResize) {
        screenMd = screenMdResize;
        this.menuToShort('resize');
      }
    };

    resizeHandle();

    window.addEventListener('resize', resizeHandle);
  },
  methods: {
    toogleChild(itemIndex) {
      const eqLast = itemIndex === columnsLast;
      this.columnsIndex = eqLast ? 0 : itemIndex;
      columnsLast = eqLast ? 0 : itemIndex;
    },
    toColumns(item, itemIndex) {
      if (O.hOwnProperty(item, 'routers') || O.hOwnProperty(item, 'url')) {
        this.mainIndex = itemIndex;
        this.columnsDatas = [];
        this.columnsIndex = 0;
        columnsLast = 0;
        columnStatus = false;
        this.$emit('short', this.menuShort, columnStatus);
      }

      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }

      if (O.hOwnProperty(item, 'columns')) {
        this.columnsDatas = item.columns;
        this.columnsTitle = item.title;
        this.mainIndex = itemIndex;
        columnStatus = true;
        this.$emit('column', this.menuShort, columnStatus);
      }
    },
    menuToShort(type) {
      if (type === 'resize') {
        this.menuShort = !screenMd;
      } else {
        this.menuShort = !this.menuShort;
      }
      this.$emit('short', this.menuShort, columnStatus);
    },
  },
};
</script>
<style>
</style>
