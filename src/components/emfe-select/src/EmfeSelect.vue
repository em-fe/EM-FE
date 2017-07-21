<template>
  <div class="emfe-select" v-emfe-documentclick="close">
    <input class="emfe-input-box-input" type="text" :value="checkVals" readonly placeholder="请选择标签" @click="inpcheck">
    <div v-if="flagCheck" class="emfe-select-flag">
      <div class="emfe-select-custab" v-if="seleStu==='newList'">
        <input type="text" placeholder="添加标签" class="emfe-input-box-input" v-model="newListVal"><span class="emfe-select-custab-btn" @click="newListBtn">保存</span>
      </div>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='radio'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-checkout-box-input" :disabled="item.disabled" type="radio" v-model="checkVals" :value="item.name">
      </label>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='checkbox'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-checkout-box-input" :disabled="item.disabled" type="checkbox" v-model="checkVals" :value="item.name">
      </label>
      <label v-for="item in checkList" class="emfe-select-label emfe-select-delabel" v-on:click="spanTxt" :disabled="item.disabled" v-if="type==='default'">{{ item.name }}</label>
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
    spanTxt(e) {
      this.checkVals = e.target.innerHTML;
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};
</script>
