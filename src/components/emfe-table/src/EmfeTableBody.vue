 <template>
  <tr @click="jump(ind)" class="emfe-box-table-tr" :class="classTr">
    <template v-if="this.$parent.columns[0].type == 'selection'">
      <td class="emfe-box-table-tr-td" :class="classTd"><div><slot></slot></div></td>
    </template>
    <template>
      <td class="emfe-box-table-tr-td" :class="classTd" :rowspan="dataList[list.key].row ? rowSpan[list.key]:0"  v-for="(list , index) in dataSlice" v-if="dataList[list.key].text">
        <div>{{dataList[list.key].text}}</div>
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
        `${this.className}-table-body-tr`,
        {
          [`${this.$parent.classAdd}-tbody-tr`]: !!this.classAdd,
        },
      ];
    },
    classTd() {
      return [
        `${this.className}-table-body-tr-td`,
        {
          [`${this.$parent.classAdd}-tbody-tr-td`]: !!this.classAdd,
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
