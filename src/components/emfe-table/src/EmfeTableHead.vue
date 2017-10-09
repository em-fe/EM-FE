<template>
  <thead class="emfe-box-table-head" :class="classHead">
    <tr class="emfe-box-table-head-tr" :class="classTr">
      <template>
	      <th class="emfe-box-table-head-tr-th" @click="jump(index)" :class="[classTh, {'emfe-box-table-head-tr-th-checked': checked === index}]" v-for="(item , index) in this.$parent.columns">
	        <div class="emfe-box-table-head-tr-th-div">{{item.title}}</div>
	      </th>
      </template>
    </tr>
  </thead>
</template>
<script>
export default {
  name: 'EmfeTableHead',
  data() {
    return {
      classAdd: this.$parent.classAdd,
      border: this.$parent.border,
    };
  },
  props: {
    checked: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    classHead() {
      return [
        {
          [`${this.$parent.classAdd}-thead`]: !!this.classAdd,
        },
      ];
    },
    classTr() {
      return [
        {
          [`${this.$parent.classAdd}-thead-tr`]: !!this.classAdd,
        },
      ];
    },
    classTh() {
      return [
        {
          [`${this.$parent.classAdd}-thead-tr-th`]: !!this.classAdd,
          border: `${this.border}`,
        },
      ];
    },
  },
  methods: {
    jump(index) {
      this.$emit('thJump', index);
    },
  },
};
</script>
