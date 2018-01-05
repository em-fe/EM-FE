<template>
  <div class="emfe-table-box" :class="[boxName, {'emfe-table-box-flex': flex}]">
    <div :class="[flexTableName, {'emfe-table-tablebox': flex}]">
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
    </div>
    <div class="emfe-table-fixbox" v-if="flex" :class="flexName">
      <div class="emfe-table-fixbox-item" v-for="(flexItem, flexIndex) in flexColumns">
        <div class="emfe-table-fixbox-item-title">
          <div class="emfe-table-fixbox-item-title-name" :class="flexItemName">
            {{flexItem.title}}
          </div>
        </div>
        <div class="emfe-table-fixbox-item-main">
          <div class="emfe-table-fixbox-item-main-name" v-for="(opationItem, opationIndex) in flexItem.opation" :class="flexItemName">
            {{opationItem.name}}
          </div>
        </div>
      </div>
    </div>
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
    flex: String,
    flexColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    flexData: {
      type: Array,
      default() {
        return [];
      },
    },
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
    flexName() {
      return this.flex ? `emfe-table-fixbox-${this.flex}` : '';
    },
    flexItemName() {
      return this.flex ? `emfe-table-fixbox-${this.flex}-item-name` : '';
    },
    flexTableName() {
      return this.flex ? `emfe-table-tablebox-${this.flex}` : '';
    },
  },
};
</script>
