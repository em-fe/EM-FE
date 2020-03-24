<template>
  <div :class="[selectName, {'emfe-select-selectBox': tip}]">
    <div class="emfe-select" :class="[{'emfe-select-selectBox-tipSelect': tip}, `emfe-select-${direction}`]" v-emfe-documentclick="closeFn">
      <input class="emfe-select-input" type="text" :class="[inputName, {'emfe-select-input-error': errOk}]" :value="checkVal" :disabled="newDisabled || (!this.datas.length && seleStu!=='newList')" readonly :placeholder="selectText" @click="inpcheck">
      <div class="emfe-select-error" :class="addErrorText" v-if="errOk"><slot name="error"></slot></div>
      <div v-if="flagCheck" class="emfe-select-flag" :class="`emfe-select-flag-${direction}`">
        <div class="emfe-select-custab" v-if="seleStu==='newList' || news">
          <input type="text" :placeholder="addText" class="emfe-select-input" v-model="newListVal">
          <span class="emfe-select-custab-btn" @click="newListBtn">保存</span>
        </div>
        <div class="emfe-select-custab" v-if="searchFlag">
          <input type="text" @input="search" :placeholder="searchText" class="emfe-select-input" v-model="searchVal">
        </div>
        <div v-if="checkList.length > 0" :class="{'emfe-select-flag-scroll': checkList.length > 5}">
          <label v-for="(item, itemIndex) in checkList" :class="{'emfe-select-label-disabled': item.disabled}" class="emfe-select-label" v-if="type==='checkbox'" :key="item.id">
            <span class="emfe-select-text">{{ item.name }}</span>
            <div class="emfe-select-checkout-box">
              <i class="emfe-select-checkout-inner" :class="{'emfe-select-checkout-inner-checked': item.checked}"></i>
              <input class="emfe-select-checkout-status" :disabled="item.disabled" type="checkbox" :key="item.id" @change="getdata(item, itemIndex)">
            </div>
          </label>
          <label v-for="(item, checkind) in checkList" :title="item.name" :key="checkind" class="emfe-select-label emfe-select-delabel" @click="spanTxt(item, checkind)" :disabled="item.disabled" v-if="type==='default'"><span class="emfe-select-label-text" :class="{'emfe-select-label-disabled': item.disabled}">{{ item.name }}</span></label>
          <div v-for="(item, checkindex) in checkList" :key="checkindex" class="emfe-select-label emfe-select-delabel" @click="spanTxt(item, checkindex)" :disabled="item.disabled" v-if="type==='icon'" :class="{'disabled': item.disabled}">
            <img class="emfe-select-icon" :src="item.icon" :alt="item.name">
            <span class="emfe-select-icon-piece">{{ item.name}}</span>
            <span class="emfe-select-icon-tel">{{ item.tel }}</span>
          </div>

          <div v-if="moreloading && checkList.length > 10" @click="moreClick" class="emfe-select-label-more">{{moreText}}</div>
        </div>
        <div class="emfe-select-flag-nothing" v-if="checkList.length === 0">
          暂无数据
        </div>
      </div>
    </div>
    <emfe-tooltip className="emfe-select" theme="light" :placement="placement" v-if="tip">
      <emfe-icon type="tishi" slot="render" className="emfe-select-tip"></emfe-icon>
      <div slot="tip" v-html="tip"></div>
    </emfe-tooltip>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import O from '../../../tools/o';

export default {
  name: 'Select',
  data() {
    return {
      opened: false, // 打开过
      checkList: [],
      flagCheck: false,
      checkVal: this.checkVals,
      newListVal: '',
      searchVal: '',
      newDisabled: this.disabled,
      checkedNow: -1,
    };
  },
  props: {
    type: {
      validator(value) {
        return _.has(value, ['default', 'checkbox', 'icon']);
      },
      default: 'default',
    },
    seleStu: {
      type: String,
      default: '',
    },
    news: Boolean, // 1.3.0 支持
    disabled: {
      type: Boolean,
      default: false,
    },
    datas: {
      type: Array,
      required: true,
    },
    addText: {
      type: String,
      default: '添加标签',
    },
    selectText: {
      type: [String, Number],
      default: '选择标签',
    },
    errOk: {
      type: [Boolean],
      default: false,
    },
    checkVals: {
      type: Array,
      default() {
        return [];
      },
    },
    className: String,
    direction: {
      validator(value) {
        return _.has(value, ['top', 'bottom']);
      },
      default: 'bottom',
    },
    getDefData: {
      type: Function,
      default: () => {},
    },
    change: {
      type: Function,
      default: () => {},
    },
    close: {
      type: Function,
      default: () => {},
    },
    addDataCheck: {
      type: Function,
      default: () => {},
    },
    addDataRadio: {
      type: Function,
      default: () => {},
    },
    add: { // 1.3.0 支持
      type: Function,
      default: () => {},
    },
    delopt: {
      type: Function,
      default: () => {},
    },
    checkedopt: {
      type: Function,
      default: () => {},
    },
    getAllData: {
      type: Function,
      default: () => {},
    },
    clickInput: {
      type: Function,
      default: () => {},
    },
    click: {
      type: Function,
      default: () => {},
    },
    tip: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'right',
    },
    moreloading: {
      type: Boolean,
      default: false,
    },
    searchFlag: {
      type: Boolean,
      default: false,
    },
    searchText: {
      type: String,
      default: '搜索',
    },
    moreText: {
      type: String,
      default: '加载更多',
    },
  },
  computed: {
    selectName() {
      return [
        {
          [`${this.className}-select`]: !!this.className,
        },
      ];
    },
    inputName() {
      return [
        {
          [`${this.className}-select-input`]: !!this.className,
        },
      ];
    },
    addErrorText() {
      return [
        {
          [`${this.className}-select-error`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    inpcheck() {
      this.checkList = this.datas;
      this.checkList.forEach((cl) => {
        if (!O.hOwnProperty(cl, 'checked')) {
          cl.checked = false;
        }
        if (this.checkVals.length > 0) {
          this.checkVals.forEach((cVal) => {
            if (cl.name === cVal) {
              cl.checked = true;
            }
          });
        }
      });
      // this.flagCheck = this.checkList.length > 0;
      this.flagCheck = !this.flagCheck;
      this.opened = !this.opened;
      this.clickInput();
      this.click();
      this.$emit('clickInput');
      this.$emit('click');
    },
    newListBtn() {
      const newdata = this.newListVal;
      this.$emit('addDataCheck', newdata, this.datas);
      this.$emit('addDataRadio', newdata, this.datas);
      this.$emit('add', newdata, this.datas);
      this.newListVal = '';
      this.addDataCheck(newdata, this.datas);
      this.addDataRadio(newdata, this.datas);
      this.add(newdata, this.datas);
    },
    search() {
      const keyWord = this.searchVal;
      const dataList = [];
      this.datas.forEach((item) => {
        if (item.name.indexOf(keyWord) >= 0) {
          dataList.push(item);
        }
      });
      this.checkList = dataList.slice(0);
      // this.$emit('search', keyWord, this.datas);
    },
    spanTxt(item, index) {
      if (item.disabled !== 'disabled' && !item.disabled) {
        this.checkVal = item.name;
        this.flagCheck = false;
        this.$emit('getDefData', this.checkVal, item, this.datas, index);
        this.$emit('change', this.checkVal, item, this.datas, index);
        this.getDefData(this.checkVal, item, this.datas, index);
        this.change(this.checkVal, item, this.datas, index);
      }
    },
    closeFn() {
      if (this.opened) {
        this.opened = false;
        this.checkList = [];
        this.flagCheck = false;
        this.close(this.checkVal);
      }
    },
    getdata(item, index) {
      const va = this.checkVal;
      const iNow = va.indexOf(item.name);
      const hasItem = iNow !== -1;
      item.checked = !hasItem;
      if (hasItem) {
        this.checkVals.splice(iNow, 1);
      } else {
        this.checkVals.push(item.name);
      }
      if (hasItem) {
        this.$emit('delopt', item.name, item, this.datas, index);
        this.delopt(item.name, item, this.datas, index);
      } else {
        this.$emit('checkedopt', item.name, item, this.datas, index);
        this.checkedopt(item.name, item, this.datas, index);
      }
      this.$emit('getAllData', va, item, this.datas, index);
      this.getAllData(va, item, this.datas, index);
      this.$emit('change', va, item, this.datas, index);
      this.change(va, item, this.datas, index);
    },
    moreClick() {
      this.$emit('moreLoading');
    },
  },
  watch: {
    checkVals(val, oldVal) {
      if (val !== oldVal) {
        this.checkVal = val;
      }
    },
    disabled(val, oldVal) {
      if (val !== oldVal) {
        this.newDisabled = val;
      }
    },
  },
};
</script>
