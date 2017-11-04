 <template>
  <tr @click="jump(ind)" class="emfe-box-table-tr" :class="[classTr, {'emfe-box-table-tr-disabled': dataList.disabled}]">
    <template>
      <td class="emfe-box-table-tr-td" :class="[classTd, {'emfe-box-table-tr-td-checked': checked === index}]" :rowspan="dataList[list.key].row ? rowSpan[list.key]:0"  v-for="(list , index) in dataSlice" :key="index" v-if="!dataList[list.key].hebing">
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
          <div class="emfe-box-table-tr-td-div" v-if="dataList[list.key].required">
            <span v-if="dataList[list.key].required" class="emfe-box-table-tr-td-div-required">*</span>
            {{dataList[list.key].text}}
          </div>
          <div v-else class="emfe-box-table-tr-td-div" v-html="dataList[list.key].text"></div>
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
      className: this.$parent.className,
      classAdd: this.$parent.classAdd,
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
    classTr() {
      return [
        {
          [`${this.$parent.classAdd}-tbody-tr`]: !!this.classAdd,
        },
      ];
    },
    classTd() {
      return [
        {
          [`${this.$parent.classAdd}-tbody-tr-td`]: !!this.classAdd,
          border: `${this.border}`,
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
    },
  },
};
</script>
