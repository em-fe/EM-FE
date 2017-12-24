<template>
  <div class="emfe-table-box" :class="[boxName]">
    <table v-if="columns.length" class="emfe-table" :class="[tableName]">
      <slot name="head"></slot>
      <tbody :class="tbodyName">
        <tr v-if="!data.length">
          <td class="emfe-table-tr-td emfe-table-nothing-td" :colspan="columns.length">
            <div class="emfe-table-nothing">{{nothingText}}</div>
          </td>
        </tr>
        <slot name="body" else></slot>
      </tbody>
    </table>
    <!-- <div class="emfe-table-nothing" v-if="!data.length">{{nothingText}}</div> -->
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
    nothingText: {
      type: String,
      default: '尚未收集到数据',
    },
    classAddName: {
      type: String,
      default: '',
    },
    className: String,
  },
  computed: {
    boxName() {
      return this.classAddName || this.className ? `${this.classAddName || this.className}-box` : '';
    },
    tableName() {
      return this.classAddName || this.className ? `${this.classAddName || this.className}-table` : '';
    },
    tbodyName() {
      return this.classAddName || this.className ? `${this.classAddName || this.className}-table-tbody` : '';
    },
  },
};
</script>
