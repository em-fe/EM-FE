<template>
  <div class="emfe-inputmore-group" :class="groupName">
    <div class="emfe-inputmore-group-wrap" :className="wrapName" v-for="(data, dataIndex) in loops" @click="moreClick(dataIndex)">
      <emfe-inputmore :className="inputmoreName" :placeholder="data.placeholder || placeholder" :icon="data.icon || icon" :type="data.type || type" :key="dataIndex" :index="dataIndex" v-model="data.num" @reduce="reduce" @plus="plus" @input="input"></emfe-inputmore>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeInputmoreGroup',
  data() {
    let loops = null;
    const isObject = this.datas.every(data => !Array.isArray(data));
    if (isObject) {
      loops = [];
      this.datas.forEach((data) => {
        loops.push({
          num: data,
        });
      });
    } else {
      loops = this.datas;
    }
    return {
      canDelete: true,
      isGroup: true,
      isObject,
      loops,
      newLoops: this.new,
      index: 0,
    };
  },
  props: {
    className: String,
    datas: {
      type: Array,
      required: true,
    },
    placeholder: String,
    new: {
      type: Object,
    },
    type: String,
    icon: String,
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: 1,
    },
    inputHandle: Function,
    plusHandle: Function,
    reduceHandle: Function,
  },
  computed: {
    groupName() {
      return [
        {
          [`${this.className}-inputmore-group`]: !!this.className,
        },
      ];
    },
    wrapName() {
      return [
        {
          [`${this.className}-inputmore-group-wrap`]: !!this.className,
        },
      ];
    },
    inputmoreName() {
      const name = this.className ? ` ${this.className}` : '';
      return `emfe-inputmore-group${name}`;
    },
  },
  methods: {
    moreClick(index) {
      this.index = index;
    },
    reduce(now, data, datas) {
      if (this.reduceHandle) {
        this.reduceHandle(now, data, datas, this.index);
      }
      this.$emit('reduce', now, data, datas, this.index);
    },
    plus(now, data, datas) {
      if (this.plusHandle) {
        this.plusHandle(now, data, datas, this.index);
      }
      this.$emit('plus', now, data, datas, this.index);
    },
    input(now) {
      if (this.inputHandle) {
        this.inputHandle(now, this.index);
      }
      this.$emit('input', now, this.index);
    },
  },
};
</script>
