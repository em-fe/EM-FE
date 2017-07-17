 <template>
  <tr @click="jump(ind)" class="emfe-box-table-tr" :class="classTr">
    <template v-if="this.$parent.columns[0].type == 'selection'">
      <td class="emfe-box-table-tr-td" :class="classTd"><div><slot></slot></div></td>
    </template>
    <template>
      <td class="emfe-box-table-tr-td" :class="classTd" :rowspan="dataList[list.key].row ? rowSpan[list.key]:0"  v-for="(list , index) in column" v-if='!dataList[list.key].text==""'>
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
      column: this.$parent.columns,
      data: this.$parent.data,
      num: 0,
      arr: [],
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
    classTr() {
      return `${this.className}-table-body-tr`;
    },
    classTd() {
      return `${this.className}-table-body-tr-td`;
    },
    rowSpan() {
      for (let o = 0; o < this.column.length; o++) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i][this.column[o].key].row) {
            this.num++;
            this.$parent.newObject[this.column[o].key] = this.num;
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
