<template>
  <div class="emfe-bar" :class="barName">
    <h3 class="emfe-bar-header" @click="headerClick($event)">{{ title }}</h3>
    <div class="emfe-bar-iscroll">
      <ul class="emfe-bar-list">
        <template v-for="(childrenData, childrenDataIndex) in newDatas">
          <li class="emfe-bar-item" v-if="!childrenData.children">
            <span class="emfe-bar-link" :class="{'router-link-exact-active router-link-active': (activeBarUrl === childrenData.routers.path || activeBarUrl.indexOf(childrenData.routers.path.split('?')[0])!==-1),'emfe-bar-link-disabled': isDisabled}" v-if="!childrenData.url" @click="goPathOne(childrenData)">{{ childrenData.title }}</span>
            <a class="emfe-bar-link"  :class="{'router-link-exact-active router-link-active': (activeBarUrl === childrenData.url||activeBarUrl.indexOf(childrenData.url)!==-1)}" @click="goPath(child)" v-else>{{ childrenData.title }}</a>
         </li>
         <li class="emfe-bar-item" :class="{'emfe-bar-item-on': accordion ? childrenIndex == childrenDataIndex : minorStatus[childrenDataIndex]}" v-else>
           <span class="emfe-bar-btn" :class="{'emfe-bar-btn-disabled': isDisabled}" @click="toogleChild(childrenDataIndex)">{{ childrenData.title }}</span>
           <i class="emfe-bar-arrow" @click="toogleChild(childrenDataIndex)"></i>
           <emfe-transition name="gradual">
             <ul class="emfe-bar-childlist" v-show="accordion ? childrenIndex == childrenDataIndex : minorStatus[childrenDataIndex]">
               <li class="emfe-bar-childitem" v-for="child in childrenData.children">
                   <span class="emfe-bar-childlink" :class="{'router-link-exact-active router-link-active': (activeBarUrl === child.routers.path||activeBarUrl.indexOf(child.routers.path)!==-1),'emfe-bar-link-disabled': isDisabled}" @click="goPathOne(child)" v-if="!child.url">{{ child.title }}</span>
                  <span class="emfe-bar-childlink" :class="{'router-link-exact-active router-link-active': (activeBarUrl === child.url||activeBarUrl.indexOf(child.url)!==-1)}" @click="goPath(child)" v-else>{{ child.title }}</span>
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
import development from '../../../tools/development';

let childrenLast = -1; // 记录上一个点击的二级手风琴的索引

export default {
  name: 'EmfeBar',
  data() {
    return {
      Contant,
      childrenIndex: -1,
      isDisabled: this.disabled,
      newDatas: [],
      activeBarUrl: '',
      pathNoAuth: `${development[this.processEnv].member}error`,
      minorStatus: [], // 二级展开收起状态
      /* eslint-disable */
      domainName: {
        '控制台': `${development[this.processEnv].account}`,
        '报名': `${development[this.processEnv].activity}`,
        '票务': `${development[this.processEnv].event}`,
        '表单': `${development[this.processEnv].form}`,
        '店铺': `${development[this.processEnv].shop}`,
        '营销': `${development[this.processEnv].marketing}`,
        '会员': `${development[this.processEnv].member}`,
        'CRM': `${development[this.processEnv].crm}`,
        '数据': `${development[this.processEnv].data}`,
        '财务': `${development[this.processEnv].finance}`,
        '周边': `${development[this.processEnv].goods}`,
        '订单': `${development[this.processEnv].order}`,
      },
      /* eslint-enable */
    };
  },
  props: {
    processEnv: {
      type: String,
      default: 'development',
    },
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
    /* eslint-disable */
    // this.domainName = {
    //   '控制台': `${development[this.processEnv].account}`,
    //   '报名': `${development[this.processEnv].activity}`,
    //   '票务': `${development[this.processEnv].event}`,
    //   '表单': `${development[this.processEnv].form}`,
    //   '店铺': `${development[this.processEnv].shop}`,
    //   '营销': `${development[this.processEnv].marketing}`,
    //   '会员': `${development[this.processEnv].member}`,
    //   'CRM': `${development[this.processEnv].crm}`,
    //   '数据': `${development[this.processEnv].data}`,
    //   '财务': `${development[this.processEnv].finance}`,
    //   '周边': `${development[this.processEnv].goods}`,
    //   '订单': `${development[this.processEnv].order}`,
    // };
    /* eslint-enable */
    this.handle(this.datas);
    if (window.$cookie.get('ACTIVEBARURL')) {
      this.activeBarUrl = window.$cookie.get('ACTIVEBARURL');
    }
    // 营销 B 端调用两次问题
    if (window.$cookie.get('CURMENUNAME') === '表单' || window.$cookie.get('CURMENUNAME') === 'CRM'|| window.$cookie.get('CURMENUNAME') === '会员'){
      this.testUrl();
    }
    this.matchUrl();
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
      let m = -1;
      val.forEach((data, index) => {
        if (data.children) {
          data.children.forEach((sonItem) => {
            if (window.$cookie.get('CURMENUNAME') === '票务') {
              const n = window.location.href;
              if (sonItem.url && n.indexOf(sonItem.url) !== -1) {
                m = index;
              } else if (sonItem.routers && n.indexOf(sonItem.routers.path) !== -1) {
                m = index;
              }
            }
          });
        }
      });
      if (this.minorStatus.length !== 0) {
        this.minorStatus[m] = true;
      }
      // 修复会员定位导航错误
      this.testUrl();
      this.matchUrl();
    },
    goPath(val) {
      if (val.orgUrl) {
        window.$cookie.set('CURREFERRER', val.orgUrl); //获取无权限路径
      }
      this.matchUrl();
      if (val.url !== this.pathNoAuth) {
        window.$cookie.set('ACTIVEBARURL', val.url);
        this.activeBarUrl = val.url;
      }
      window.open(val.url);
    },
    goPathOne(val) {
      if (val.orgUrl) {
        window.$cookie.set('CURREFERRER', val.orgUrl); //获取无权限路径
      }
      this.matchUrl();
      const curName = decodeURIComponent(window.$cookie.get('CURMENUNAME'));
      let domainName = '';
      if (curName === '会员' || curName === 'CRM') {
        if (val.routers.productType === 'member') {
          domainName = this.domainName['会员'];
        } else if (val.routers.productType === 'CRM') {
          domainName = this.domainName.CRM;
        }
      } else {
        domainName = this.domainName[curName];
      }
      const valPath = val.routers.path.slice(1);
      window.location.href = `${domainName}${valPath}`;
        if (val.routers.path !== this.pathNoAuth) {
          window.$cookie.set('ACTIVEBARURL', val.routers.path);
          this.activeBarUrl = val.routers.path;
        }

    },
    matchUrl() {
      const {
        href,
      } = window.location;
      const m = decodeURIComponent(window.$cookie.get('CURMENUNAME'));
      const domainName = this.domainName[m];
      if (href.indexOf(domainName) === -1) {
        /* eslint-disable */
        for(let keyItem in this.domainName){
          if(href.indexOf(this.domainName[keyItem]) !== -1){
            if (keyItem ==='控制台' && m === '营销') {
              window.$cookie.set('CURMENUNAME', '营销');
              if (href !== this.pathNoAuth) {
                window.$cookie.set('ACTIVEBARURL', href);
                this.activeBarUrl = href;
              }
            } else if(keyItem ==='报名' && m === '票务') {
              window.$cookie.set('CURMENUNAME', '票务');
            } else {
              window.$cookie.set('CURMENUNAME', keyItem);
              if (href !== this.pathNoAuth) {
                window.$cookie.set('ACTIVEBARURL', href);
                this.activeBarUrl = href;
              }
            }
          }
        }
        /* eslint-enable */
      } else {
        window.$cookie.set('ACTIVEBARURL', href);
        this.activeBarUrl = href;
      }
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
    },
    toogleChild(itemIndex, value) {
      if (!this.isDisabled) {
        this.canTestUrl = false; // 刷新新页面触发一次就行
        const eqLast = itemIndex === childrenLast;
        this.childrenIndex = eqLast ? -1 : itemIndex;
        childrenLast = eqLast ? -1 : itemIndex;
        this.minorStatus.splice(itemIndex, 1, value || !this.minorStatus[itemIndex]);
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
        this.matchUrl();
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
