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
  name: 'select',
  props: {
    type: {
      type: String,
      default: '',
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
      this.initData();
      const c = e.target.className;
      this.flagCheck = c === 'inpcheck';
    },
    initData() {
      const data1 = [
        {
          id: 8,
          name: '888888',
        },
        {
          id: 88,
          name: '88888',
        },
      ];
      const data2 = [
        {
          id: 6,
          name: '666',
        },
        {
          id: 66,
          name: '6666666',
        },
      ];
      if (this.type === 'checkbox') {
        this.checkList = data1;
      }
      if (this.type === 'radio') {
        this.checkList = data2;
      }
    },
    close() {
      this.checkList = [];
      this.flagCheck = false;
    },
  },
};
</script>
