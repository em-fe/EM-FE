<template>
  <div class="emfe-bar" :class="barName">
    <h3 class="emfe-bar-header" @click="headerClick($event)">{{ title }}</h3>
    <div class="emfe-bar-iscroll">
      <ul class="emfe-bar-list">
        <template v-for="(childrenData, childrenDataIndex) in newDatas">
          <li class="emfe-bar-item" v-if="!childrenData.children">
            <router-link :to="childrenData.routers" class="emfe-bar-link" :class="{' emfe-bar-link-disabled': isDisabled}" v-if="!childrenData.url">{{ childrenData.title }}</router-link>
            <a class="emfe-bar-link" :href="childrenData.url" target="_blank" v-else>{{ childrenData.title }}</a>
          </li>
          <li class="emfe-bar-item" :class="{'emfe-bar-item-on': accordion ? childrenIndex == childrenDataIndex : minorStatus[childrenDataIndex]}" v-else>
            <span href="javascript:;" class="emfe-bar-btn" :class="{' emfe-bar-btn-disabled': isDisabled}" @click="toogleChild(childrenDataIndex)">{{ childrenData.title }}</span>
            <i class="emfe-bar-arrow" @click="toogleChild(childrenDataIndex)"></i>
            <emfe-transition name="gradual">
              <ul class="emfe-bar-childlist" v-show="accordion ? childrenIndex == childrenDataIndex : minorStatus[childrenDataIndex]">
                <li class="emfe-bar-childitem" v-for="child in childrenData.children">
                  <router-link :to="child.routers" class="emfe-bar-childlink" :class="{' emfe-bar-childlink-disabled': isDisabled}" v-if="!child.url">{{ child.title }}</router-link>
                  <a class="emfe-bar-childlink" :class="{'router-link-exact-active router-link-active': activeUrl === child.url}" :href="child.url" target="_blank" v-else>{{ child.title }}</a>
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
import Contant from '../../../contant';
import O from '../../../tools/o';

let childrenLast = -1; // 记录上一个点击的二级手风琴的索引

export default {
  name: 'EmfeBar',
  data() {
    return {
      Contant,
      childrenIndex: -1,
      isDisabled: this.disabled,
      newDatas: [],
      activeUrl: '',
      minorStatus: [], // 二级展开收起状态
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fullpath: {
      type: String,
      required: true,
    },
    className: String,
    disabled: Boolean,
    disableRex: String,
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    barName() {
      return this.className ? `${this.className}-bar` : '';
    },
  },
  mounted() {
    this.handle(this.datas);
    // 营销 B 端调用两次问题
    // this.testUrl();
  },
  methods: {
    handle(val) {
      this.newDatas = val;
      // 添加不是手风琴效果的二级展开状态
      this.minorStatus = [];
      val.forEach((data) => {
        if (data.children) {
          data.children.forEach(() => {
            this.minorStatus.push(false);
          });
        }
      });
      // 修复会员定位导航错误
      this.testUrl();
    },
    testUrl() {
      const { fullPath, name } = this.$route;
      const newFullPath = this.fullpath ? this.fullpath : fullPath;
      this.newDatas.forEach((data, dataNum) => {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach((dataChild) => {
            const inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || (
              O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'name') && name === dataChild.routers.name)) {
              // 打开二级导航的折叠
              // true 修复会员点击bar来回折叠
              this.toogleChild(dataNum, true);
            }
          });
        }
      });
      this.activeUrl = window.location.href;
    },
    toogleChild(itemIndex, value) {
      if (!this.isDisabled) {
        this.canTestUrl = false; // 刷新新页面触发一次就行
        const eqLast = itemIndex === childrenLast;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast = eqLast ? -1 : itemIndex;
        this.minorStatus.splice(itemIndex, 1, value ? value : !this.minorStatus[itemIndex]);
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
    headerClick(event) {
      this.$emit('click', event);
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
