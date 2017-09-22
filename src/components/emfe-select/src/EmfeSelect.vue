<template>
  <div class="emfe-select" :class="selectName" v-emfe-documentclick="closeFn">
    <input class="emfe-select-input" type="text" :class="[inputName, {'emfe-select-input-error': errOk}]" :value="checkVal" :disabled="newDisabled" readonly :placeholder="selectText" @click="inpcheck">
    <div class="emfe-select-error" :class="addErrorText" v-if="errOk"><slot name="error"></slot></div>
    <div v-if="flagCheck" class="emfe-select-flag">
      <div class="emfe-select-custab" v-if="seleStu==='newList'">
        <input type="text" :placeholder="addText" class="emfe-select-input" v-model="newListVal">
        <span class="emfe-select-custab-btn" @click="newListBtn">保存</span>
      </div>
      <div class="emfe-select-flag-scroll">
        <label v-for="(item, itemIndex) in checkList" :class="{'emfe-select-label-disabled': item.disabled}" class="emfe-select-label" v-if="type==='checkbox'" :key="item.id">
          <span class="emfe-select-text">{{ item.name }}</span>
          <div class="emfe-select-checkout-box">
            <i class="emfe-select-checkout-inner" :class="{'emfe-select-checkout-inner-checked': item.checked}"></i>
            <input class="emfe-select-checkout-status" :disabled="item.disabled" type="checkbox" :key="item.id" @change="getdata(item)">
          </div>
        </label>
        <label v-for="item in checkList" class="emfe-select-label emfe-select-delabel" @click="spanTxt(item)" :disabled="item.disabled" v-if="type==='default'"><span :class="{'emfe-select-label-disabled': item.disabled}">{{ item.name }}</span></label>
        <div v-for="item in checkList" class="emfe-select-label emfe-select-delabel" @click="spanTxt(item)" :disabled="item.disabled" v-if="type==='icon'" :class="{'disabled': item.disabled}">
          <img class="emfe-select-icon" :src="item.icon" :alt="item.name">
          <span class="emfe-select-icon-piece">{{ item.name}}</span>
          <span class="emfe-select-icon-tel">{{ item.tel }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import O from '../../../tools/o';

export default {
  name: 'Select',
  data() {
    return {
      checkList: [],
      flagCheck: false,
      checkVal: this.checkVals,
      newListVal: '',
      newDisabled: this.disabled,
      checkedNow: -1,
    };
  },
  props: {
    type: {
      validator(value) {
        return _.has(value, ['default', 'checkbox', 'icon']);
      },
    },
    seleStu: {
      type: String,
      default: '',
    },
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
      type: String,
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
    getDefData: Function,
    close: Function,
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
      this.flagCheck = this.checkList.length > 0;
    },
    newListBtn() {
      const newdata = this.newListVal;
      this.$emit('addDataCheck', newdata, this.datas);
      this.$emit('addDataRadio', newdata, this.datas);
      this.newListVal = '';
    },
    spanTxt(item) {
      if (item.disabled !== 'disabled') {
        this.checkVal = item.name;
        this.flagCheck = false;
        this.$emit('getDefData', this.checkVal, item, this.datas);
        if (this.getDefData) {
          this.getDefData(this.checkVal, item, this.datas);
        }
      }
    },
    closeFn() {
      this.checkList = [];
      this.flagCheck = false;
      if (this.close) {
        this.close();
      }
    },
    getdata(item) {
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
        this.$emit('delopt', item.name, item, this.datas);
      } else {
        this.$emit('checkedopt', item.name, item, this.datas);
      }
      this.$emit('getAllData', va, item);
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
