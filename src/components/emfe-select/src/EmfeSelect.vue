<template>
  <div class="emfe-select" v-emfe-documentclick="close">
    <input class="emfe-input-box-input" type="text" :value="checkVal" readonly :placeholder="selectText" @click="inpcheck">
    <div v-if="flagCheck" class="emfe-select-flag">
      <div class="emfe-select-custab" v-if="seleStu==='newList'">
        <input type="text" :placeholder="addText" class="emfe-input-box-input" v-model="newListVal"><span class="emfe-select-custab-btn" @click="newListBtn">保存</span>
      </div>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='checkbox'" :key="item.id">
        <span class="emfe-select-text">{{ item.name }}</span>
        <input class="emfe-checkout-box-input" :disabled="item.disabled" type="checkbox" v-model="checkVal" :value="item.name" :key="item.id" @change="getdata">
      </label>
      <label v-for="item in checkList" class="emfe-select-label emfe-select-delabel" @click="spanTxt(item)" :disabled="item.disabled" v-if="type==='default'"><span :class="{'disabled': item.disabled}">{{ item.name }}</span></label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Select',
  props: {
    type: {
      type: String,
      default: '',
    },
    seleStu: {
      type: String,
      default: '',
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
    checkVals: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      checkList: [],
      flagCheck: false,
      checkVal: this.checkVals,
      newListVal: '',
    };
  },
  methods: {
    inpcheck() {
      this.checkList = this.datas;
      this.flagCheck = this.checkList.length > 0;
    },
    newListBtn() {
      const newdata = this.newListVal;
      this.$emit('addDataCheck', newdata);
      this.$emit('addDataRadio', newdata);
      // this.checkVal.push(newdata);
      this.newListVal = '';
      // const va = this.checkVal;
      // this.$emit('getAllData', va);
      // console.log(va);
    },
    spanTxt(item) {
      if (item.disabled !== 'disabled') {
        this.checkVal = item.name;
        // console.log(this.checkVals);
        this.$emit('getDefData', this.checkVal);
      }
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
    getdata() {
      const va = this.checkVal;
      // console.log(va);
      this.$emit('getAllData', va);
    },
  },
};
</script>
