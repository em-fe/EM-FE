<template>
  <div class="emfe-select" v-emfe-documentclick="close">
    <input class="emfe-select-btn" type="text" :value="checkVals" readonly placeholder="" @click="inpcheck">
    <div v-if="flagCheck" class="emfe-select-flag">
      <div v-if="seleStu==='newList'">
        <div class="emfe-select-custab">
          <input type="text" class="emfe-select-custab-inp" v-model="newListVal"><span class="emfe-select-custab-btn" @click="newListBtn">确定</span>
        </div>
      </div>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='radio'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-select-inpcheck" type="radio" v-model="checkVals" :value="item.name">
      </label>
      <label v-for="item in checkList" class="emfe-select-label" v-if="type==='checkbox'">
        <span class="emfe-select-text">{{ item.name }}</span><input class="emfe-select-inpcheck" type="checkbox" v-model="checkVals" :value="item.name">
      </label>
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
      this.$emit('addData', newdata);
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};
</script>
