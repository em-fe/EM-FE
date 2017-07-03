<template>
  <div class="emfe-menu" :class="menuName" ref="menu">
    <div class="emfe-menu-main">
      <button class="emfe-menu-main-header" @click="menuToShort">
        <emfe-icon class="emfe-menu-main-sidebar" type="sidebar"></emfe-icon>
      </button>
      <ul class="emfe-menu-main-list">
        <li class="emfe-menu-main-item" v-for="(data, dataIndex) in datas">
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainStatus === dataIndex}" @click="toColumns(data, dataIndex)" v-if="data.routers">
            <emfe-tooltip placement="right" :disable="!menuShort">
              <emfe-icon class="emfe-menu-main-icon" :type="data.icon"  slot="render"></emfe-icon>
              <span slot="tip">{{ data.title }}</span>
            </emfe-tooltip>
            <!-- <emfe-icon class="emfe-menu-main-icon" :type="data.icon"></emfe-icon> -->
            <span class="emfe-menu-main-text">{{ data.title }}</span>
          </a>
          <a href="javascript:;" class="emfe-menu-main-link" :class="{'emfe-menu-main-link-on': mainStatus === dataIndex}" @click="toColumns(data, dataIndex)" v-else>
            <!-- <emfe-icon class="emfe-menu-main-icon" :type="data.icon"></emfe-icon> -->
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
          <li class="emfe-menu-minor-item" :class="{'emfe-menu-minor-item-on': columnsStatus == columnsDataIndex}" v-else>
            <span href="javascript:;" class="emfe-menu-minor-btn" @click="toogleChild(columnsDataIndex)" >{{ columnsData.title }}</span>
            <i class="emfe-menu-minor-arrow"></i>
            <emfe-transition name="gradual">
              <ul class="emfe-menu-minor-childlist" v-show="columnsStatus == columnsDataIndex">
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
let columnsLast = 0;
// let mainIndex = 0;

export default {
  name: 'EmfeMenu',
  data() {
    return {
      // childStatus: false,
      columnsDatas: [],
      columnsStatus: 0,
      mainStatus: -1,
      columnsTitle: '',
      menuShort: false,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: [Object, Array],
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
      this.columnsStatus = column - 0;
    }
    if (main) {
      this.mainStatus = main - 0;
      // 启动
      this.toColumns(this.datas[this.mainStatus], this.mainStatus);
    }
  },
  methods: {
    toogleChild(itemIndex) {
      const eqLast = itemIndex === columnsLast;
      this.columnsStatus = eqLast ? 0 : itemIndex;
      columnsLast = eqLast ? 0 : itemIndex;
    },
    toColumns(item, itemIndex) {
      if (Object.prototype.hasOwnProperty.call(item, 'routers')) {
        this.mainStatus = itemIndex;
        this.columnsDatas = [];
        this.columnsStatus = 0;
        columnsLast = 0;
        this.$router.push(item.routers);
      }

      if (Object.prototype.hasOwnProperty.call(item, 'columns')) {
        this.columnsDatas = item.columns;
        this.columnsTitle = item.title;
        this.mainStatus = itemIndex;
        this.$emit('column', this.menuShort, this.columnsStatus);
      }
    },
    menuToShort() {
      this.menuShort = !this.menuShort;
      this.$emit('short', this.menuShort, this.columnsStatus);
    },
  },
};
</script>
<style>
</style>
