<template>
  <div class="emfe-box">
    <table v-if="columns.length" class="emfe-box-table" :class="[classAdd]">
      <slot name="head"></slot>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
    <div class="emfe-box-nothing" v-if="!data.length">{{nothingText}}</div>
  </div>
</template>
<script>
export default {
  name: 'EmfeTable',
  data() {
    return {
      newObject: {},
    };
  },
  props: {
    hover: {
      type: [String, Boolean],
      default: false,
    },
    border: {
      type: String,
      default: '',
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
    nothingText: {
      type: String,
      default: '尚未收集到数据',
    },
    classAddName: {
      type: String,
      default: '',
    },
  },
  computed: {
    classAdd() {
      return this.classAddName ? `${this.classAddName}-table` : '';
    },
  },
};
</script>
