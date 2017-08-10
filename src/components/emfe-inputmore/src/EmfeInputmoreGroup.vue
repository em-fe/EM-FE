<template>
  <div class="emfe-inputmore-group" :class="groupName">
    <emfe-inputmore :className="inputmoreName" v-for="(data, dataIndex) in loops"
    :placeholder="data.placeholder || placeholder" :icon="data.icon || icon" :type="data.type || type" :key="dataIndex" :index="dataIndex" v-model="data.num" @reduce="reduce" @plus="plus"></emfe-inputmore>
  </div>
</template>
<script>
export default {
  name: 'EmfeInputmoreGroup',
  data() {
    return {
      canDelete: true,
      isGroup: true,
      loops: this.datas,
      newLoops: this.new,
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
      required: true,
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
  },
  computed: {
    groupName() {
      return [
        {
          [`${this.className}-inputmore-group`]: !!this.className,
        },
      ];
    },
    inputmoreName() {
      const name = this.className ? ` ${this.className}` : '';
      return `emfe-inputmore-group${name}`;
    },
  },
  methods: {
    reduce(now, data, datas) {
      this.$emit('reduce', now, data, datas);
    },
    plus(now, data, datas) {
      this.$emit('plus', now, data, datas);
    },
  },
};
</script>
