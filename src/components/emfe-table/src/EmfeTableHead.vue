<template>
  <thead class="emfe-table-head" :class="classHead">
    <tr class="emfe-table-head-tr" :class="classTr">
      <template>
	      <th class="emfe-table-head-tr-th" @click="jump(index)" :class="[classTh, {'emfe-table-head-tr-th-checked': checked === index}]" :key="index" v-for="(item , index) in this.$parent.columns">
	        <div class="emfe-table-head-tr-th-div" v-if="!('slot' in item)">{{item.title}}</div>
            <slot name="a" v-if="item.slot==='a'"></slot>
            <slot name="b" v-if="item.slot==='b'"></slot>
            <slot name="c" v-if="item.slot==='c'"></slot>
            <slot name="d" v-if="item.slot==='d'"></slot>
            <slot name="e" v-if="item.slot==='e'"></slot>
            <slot name="f" v-if="item.slot==='f'"></slot>
            <slot name="g" v-if="item.slot==='g'"></slot>
            <slot name="h" v-if="item.slot==='h'"></slot>
            <slot name="i" v-if="item.slot==='i'"></slot>
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
          'emfe-table-border': !!this.border && this.border === 'true',
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
