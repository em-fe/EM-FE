<template>
  <div class="emfe-select" v-emfe-documentclick="close">
    <input class="emfe-input-box-input" type="text" :value="checkVals" readonly placeholder="请选择标签" @click="inpcheck">
    <div v-if="flagCheck" class="emfe-select-flag">
      <div class="emfe-select-custab" v-if="seleStu==='newList'">
        <input type="text" placeholder="添加标签" class="emfe-input-box-input" v-model="newListVal"><span class="emfe-select-custab-btn" @click="newListBtn">保存</span>
      </div>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='radio'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-checkout-box-input" :disabled="item.disabled" type="radio" v-model="checkVals" :value="item.name" @change="getAllVal">
      </label>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='checkbox'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-checkout-box-input" :disabled="item.disabled" type="checkbox" v-model="checkVals" :value="item.name" @change="getAllVal">
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
  },
  data() {
    return {
      checkList: [],
      checkVals: [],
      flagCheck: false,
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
    },
    spanTxt(item) {
      if (item.disabled !== 'disabled') {
        this.checkVals = item.name;
        const vals = this.checkVals;
        alert(vals);
        this.$emit('getVal', vals);
      }
    },
    getAllVal() {
      const vals = this.checkVals;
      this.$emit('allVal', vals);
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};
</script>
