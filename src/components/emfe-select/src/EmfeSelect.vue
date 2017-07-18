<template>
  <div class="emfe-select" v-emfe-documentclick="close">
    <input class="inpcheck" type="text" :value="checkVals" readonly placeholder="" @click="inpcheck">
    <div v-if="flagCheck" class="select-flag">
      <label v-for="item in checkList" class="inpcheck" v-if="type==='radio'">
        <input class="inpcheck" type="radio" v-model="checkVals" :value="item.name">{{ item.name }}
      </label>
      <label v-for="item in checkList" class="inpcheck" v-if="type==='checkbox'">
        <input class="inpcheck" type="checkbox" v-model="checkVals" :value="item.name">{{ item.name }}
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
    };
  },
  methods: {
    inpcheck(e) {
      this.checkList = this.datas;
      const c = e.target.className;
      this.flagCheck = c === 'inpcheck';
      this.$emit('add-save');
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};
</script>
