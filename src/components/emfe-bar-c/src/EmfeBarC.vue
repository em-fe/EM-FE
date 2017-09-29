<template>
  <div class="emfe-bar-c" :class="barName">
    <ul class="emfe-bar-c-list">
      <template v-for="(childrenData, childrenDataIndex) in datas">
        <li class="emfe-bar-c-item" v-if="!childrenData.children">
          <router-link :to="childrenData.routers" class="emfe-bar-c-link" :class="{' emfe-bar-c-link-disabled': isDisabled}">{{ childrenData.title }}</router-link>
        </li>
        <li class="emfe-bar-c-item" :class="{'emfe-bar-c-item-on': childrenIndex == childrenDataIndex}" v-else>
          <span href="javascript:;" class="emfe-bar-c-btn" :class="{' emfe-bar-c-btn-disabled': isDisabled}" @click="toogleChild(childrenDataIndex)" >{{ childrenData.title }}</span>
          <i class="emfe-bar-c-arrow"></i>
          <emfe-transition name="gradual">
            <ul class="emfe-bar-c-childlist" v-show="barStatus[childrenDataIndex]"><!-- childrenIndex == childrenDataIndex -->
              <li class="emfe-bar-c-childitem" v-for="child in childrenData.children">
                <a :href="child.routers.url" v-if="child.routers.url" class="emfe-bar-c-childlink" :class="{' emfe-bar-c-childlink-disabled': isDisabled}">{{ child.title }}</a>
                <router-link v-else :to="child.routers" class="emfe-bar-c-childlink" :class="{' emfe-bar-c-childlink-disabled': isDisabled}">{{ child.title }}</router-link>
              </li>
            </ul>
          </emfe-transition>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import O from '../../../tools/o';

let childrenLast = -1; // 记录上一个点击的二级手风琴的索引

export default {
  name: 'EmfeBarC',
  data() {
    return {
      childrenIndex: -1,
      isDisabled: this.disabled,
      barStatus: [],
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    fullpath: {
      type: String,
      required: true,
    },
    className: String,
    disabled: Boolean,
    disableRex: String,
  },
  computed: {
    barName() {
      return this.className ? `${this.className}-bar` : '';
    },
  },
  mounted() {
    this.testUrl();
    this.handle();
  },
  methods: {
    handle() {
      this.datas.forEach((data) => {
        this.barStatus.push(true);
      });
    },
    testUrl() {
      const { fullPath, name } = this.$route;

      const newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.datas.forEach((data, dataNum) => {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach((dataChild) => {
            const inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            // if (inChildFullPath || name === dataChild.routers.name) {
            //   // 打开二级导航的折叠
            //   this.toogleChild(dataNum);
            // }
          });
        }
      });
    },
    toogleChild(itemIndex) {
      if (!this.isDisabled) {
        console.log(this.barStatus[itemIndex]);
        this.barStatus.splice(itemIndex, 1, !this.barStatus[itemIndex])
        // const eqLast = itemIndex === childrenLast;
        // this.childrenIndex = eqLast ? -1 : itemIndex;
        // childrenLast = eqLast ? -1 : itemIndex;
      }
    },
    tochildren(item) {
      if (O.hOwnProperty(item, 'routers')) {
        this.$router.push(item.routers);
      }

      if (O.hOwnProperty(item, 'url')) {
        window.open(item.url);
      }
    },
  },
  watch: {
    fullpath(val, oldVal) {
      if (val !== oldVal) {
        this.testUrl();
      }
    },
    $route(val, oldVal) {
      if (val.name !== oldVal.name) {
        this.isDisabled = val.path.indexOf(this.disableRex) > -1;
      }
    },
    disabled(val, oldVal) {
      if (val !== oldVal) {
        this.isDisabled = this.disabled;
      }
    },
  },
};
</script>
