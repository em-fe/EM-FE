<template>
  <thead class="emfe-box-table-head" :class="classHead">
    <tr class="emfe-box-table-head-tr" :class="classTr">
      <template v-if="this.$parent.columns[0].type == 'selection'">
        <th class="emfe-box-table-head-tr-th" :class="classTh"><slot></slot></th>
      </template>
      <template>
	      <th class="emfe-box-table-head-tr-th" :class="classTh" v-for="(item , index) in this.$parent.columns">
	        <div>{{item.title}}</div>
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
      className: this.$parent.className,
    };
  },
  computed: {
    classHead() {
      return `${this.className}-table-head`;
    },
    classTr() {
      return `${this.className}-table-head-tr`;
    },
    classTh() {
      return `${this.className}-table-head-tr-th`;
    },
  },
};
</script>
