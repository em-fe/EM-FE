<template>
  <thead class="emfe-box-table-head" :class="classHead">
    <tr class="emfe-box-table-head-tr" :class="classTr">
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
      classAdd: this.$parent.classAdd,
    };
  },
  computed: {
    classHead() {
      return [
        `${this.className}-table-head`,
        {
          [`${this.$parent.classAdd}-thead`]: !!this.classAdd,
        },
      ];
    },
    classTr() {
      return [
        `${this.className}-table-head-tr`,
        {
          [`${this.$parent.classAdd}-thead-tr`]: !!this.classAdd,
        },
      ];
    },
    classTh() {
      return [
        `${this.className}-table-head-tr-th`,
        {
          [`${this.$parent.classAdd}-thead-tr-th`]: !!this.classAdd,
        },
      ];
    },
  },
};
</script>
