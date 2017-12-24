 <template>
  <tr @click="jump(ind)" class="emfe-table-tr" :class="[classTr, unHover, {'emfe-table-tr-disabled': dataList.disabled}]">
    <template>
      <td class="emfe-table-tr-td" :class="[classTd, {'emfe-table-tr-td-checked': checked === index}]" :rowspan="dataList[list.key].row ? rowSpan[list.key]: ''"  v-for="(list , index) in dataSlice" :key="index" v-if="!dataList[list.key].hebing">
        <slot name="a" v-if="dataList[list.key].slot==='a'"></slot>
        <slot name="b" v-if="dataList[list.key].slot==='b'"></slot>
        <slot name="c" v-if="dataList[list.key].slot==='c'"></slot>
        <slot name="d" v-if="dataList[list.key].slot==='d'"></slot>
        <slot name="e" v-if="dataList[list.key].slot==='e'"></slot>
        <slot name="f" v-if="dataList[list.key].slot==='f'"></slot>
        <slot name="g" v-if="dataList[list.key].slot==='g'"></slot>
        <slot name="h" v-if="dataList[list.key].slot==='h'"></slot>
        <slot name="i" v-if="dataList[list.key].slot==='i'"></slot>
        <div v-if='!dataList[list.key].slot'>
          <div class="emfe-table-tr-td-div" :class="divName" v-if="dataList[list.key].required">
            <span v-if="dataList[list.key].required" class="emfe-table-tr-td-div-required" :class="requiredName">*</span>
            <span v-html="dataList[list.key].text"></span>
          </div>
          <div v-else :style="{'color': dataList[list.key].color}" class="emfe-table-tr-td-div" :class="divName" v-html="dataList[list.key].text"></div>
        </div>
      </td>
    </template>
  </tr>
</template>
<script>
export default {
  name: 'EmfeTableBody',
  data() {
    return {
      tableName: this.$parent.tableName,
      column: this.$parent.columns,
      data: this.$parent.data,
      border: this.$parent.border,
      current: 0,
      columnCopy: [],
    };
  },
  props: {
    dataList: {
      type: Object,
      default() {
        return {};
      },
    },
    ind: {
      type: Number,
      default: 0,
    },
    checked: {
      type: Number,
      default: -1,
    },
  },
  computed: {
    dataSlice() {
      if (this.$parent.columns[0].type === 'selection') {
        return this.column.slice(1, this.column.length);
      }
      return this.column;
    },
    unHover() {
      return [
        {
          'emfe-table-tr-hover': !!this.$parent.hover,
        },
      ];
    },
    classTr() {
      return [
        {
          [`${this.$parent.tableName}-tbody-tr`]: !!this.tableName,
        },
        'emfe-table-border-bottom',
      ];
    },
    classTd() {
      return [
        {
          [`${this.$parent.tableName}-tbody-tr-td`]: !!this.tableName,
          'emfe-table-border': !!this.border,
        },
      ];
    },
    divName() {
      return [
        {
          [`${this.$parent.tableName}-tr-td-div`]: !!this.tableName,
        },
      ];
    },
    requiredName() {
      return [
        {
          [`${this.$parent.tableName}-table-tr-td-div-required`]: !!this.tableName,
        },
      ];
    },
    rowSpan() {
      for (let o = 0; o < this.column.length; o++) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i][this.column[o].key].row) {
            this.current++;
            this.$parent.newObject[this.column[o].key] = this.current;
          }
        }
      }
      const arrList = Object.keys(this.$parent.newObject);
      for (let j = arrList.length; j > 0; j--) {
        const li = this.$parent.newObject[arrList[j]] - this.$parent.newObject[arrList[j - 1]];
        this.$parent.newObject[arrList[j]] = li;
      }
      return this.$parent.newObject;
    },
  },
  methods: {
    jump(i) {
      this.$emit('jump', i);
      this.$emit('click', i);
    },
  },
};
</script>
