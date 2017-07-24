<template>
  <div class="emfe-bar">
    <h3 class="emfe-bar-header">{{ title }}</h3>
    <ul class="emfe-bar-list">
      <template v-for="(childrenData, childrenDataIndex) in datas">
        <li class="emfe-bar-item" v-if="!childrenData.children">
          <router-link :to="childrenData.routers" class="emfe-bar-link">{{ childrenData.title }}</router-link>
        </li>
        <li class="emfe-bar-item" :class="{'emfe-bar-item-on': childrenIndex == childrenDataIndex}" v-else>
          <span href="javascript:;" class="emfe-bar-btn" @click="toogleChild(childrenDataIndex)" >{{ childrenData.title }}</span>
          <i class="emfe-bar-arrow"></i>
          <emfe-transition name="gradual">
            <ul class="emfe-bar-childlist" v-show="childrenIndex == childrenDataIndex">
              <li class="emfe-bar-childitem" v-for="child in childrenData.children">
                <router-link :to="child.routers" class="emfe-bar-childlink">{{ child.title }}</router-link>
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
  name: 'EmfeBar',
  data() {
    return {
      childrenIndex: -1,
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
  },
  methods: {
    testUrl() {
      const { fullPath, name } = this.$route;

      const newFullPath = this.fullpath ? this.fullpath : fullPath;

      this.datas.forEach((data, dataNum) => {
        // 如果一级导航有子节点
        if (O.hOwnProperty(data, 'children')) {
          data.children.forEach((dataChild) => {
            const inChildFullPath = O.hOwnProperty(dataChild, 'routers') && O.hOwnProperty(dataChild.routers, 'path') && newFullPath.indexOf(dataChild.routers.path) > -1;
            if (inChildFullPath || name === dataChild.routers.name) {
              // 打开二级导航的折叠
              this.toogleChild(dataNum);
            }
          });
        }
      });
    },
    toogleChild(itemIndex) {
      const eqLast = itemIndex === childrenLast;
      this.childrenIndex = eqLast ? -1 : itemIndex;
      childrenLast = eqLast ? -1 : itemIndex;
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
  },
};
</script>
