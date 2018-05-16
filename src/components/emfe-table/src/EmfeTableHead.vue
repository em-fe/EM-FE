<template>
  <thead class="emfe-table-head" :class="classHead">
    <tr class="emfe-table-head-tr" :class="classTr">
      <template>
	      <th class="emfe-table-head-tr-th" @click="jump(index)" :class="[classTh, {'emfe-table-head-tr-th-checked': checked === index}]" :key="index" v-for="(item , index) in this.$parent.columns">
	        <div class="emfe-table-head-tr-th-div">{{item.title}}</div>
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
      tableName: this.$parent.tableName,
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
          [`${this.$parent.tableName}-thead`]: !!this.tableName,
        },
      ];
    },
    classTr() {
      return [
        {
          [`${this.$parent.tableName}-thead-tr`]: !!this.tableName,
        },
      ];
    },
    classTh() {
      return [
        {
          [`${this.$parent.tableName}-thead-tr-th`]: !!this.tableName,
          'emfe-table-border': !!this.border,
        },
      ];
    },
  },
  methods: {
    jump(index) {
      this.$emit('thJump', index);
      this.$emit('click', index);
    },
  },
};
</script>
