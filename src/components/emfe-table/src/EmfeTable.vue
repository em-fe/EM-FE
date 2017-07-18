<template>
  <div class="emfe-box" >
    <div :class="className">
      <table v-if="columns.length" class="emfe-box-table" :class="classTable" :width="width">
        <slot name="head"></slot>
        <slot name="body"></slot>
      </table>
      <div class="emfe-box-nothing" v-if="!columns.length">没有数据</div>
    </div>
  </div>
</template>
<script>

const prefixCls = 'emfe-box';

export default {
  name: 'EmfeTable',
  data() {
    return {
      percen: (this.columns.length / 10) * 100,
      newObject: {},
    };
  },
  props: {
    type: {
      type: [String, Boolean],
      default: false,
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    className() {
      return this.type && this.columns.length > 0 ? `${prefixCls}-overflow` : `${prefixCls}-fixed`;
    },
    classTable() {
      return this.type && this.columns.length > 0 ? `${prefixCls}-overflow-table` : `${prefixCls}-fixed-table`;
    },
    width() {
      return this.type && this.columns.length > 10 ? `${this.percen}%` : '100%';
    },
  },
};
</script>

