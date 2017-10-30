<template>
   <div class="emfe-pagination">
    <ul>
      <li class="emfe-pagination-item" :class="{disabled: curPageOn == 1}" @click="prevPage" v-if="pageCount > 1">上一页</li>
      <li class="emfe-pagination-item" :class="{'emfe-pagination-item-on': curPageOn == 1}" @click="page(1)">1</li>
      <li class="emfe-pagination-item" v-show="curPageOn > 5 && pageCount > 10">...</li>
      <li class="emfe-pagination-item" :class="{'emfe-pagination-item-on': curPageOn == index+offset}" v-for="(item,index) in middlePages" @click="page(index+offset)">{{index+offset}}</li>
      <li class="emfe-pagination-item" v-show="curPageOn < bigLimit && pageCount > 10">...</li>
      <li class="emfe-pagination-item" :class="{'emfe-pagination-item-on': curPageOn == pageCount}" @click="page(pageCount)" v-if="pageCount > 1">{{pageCount}}</li>
      <li class="emfe-pagination-item" :class="{disabled: curPageOn == pageCount}" @click="nextPage" v-if="pageCount > 1">下一页</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pageCount: {
      type: Number,
      default: 1,
    },
    curPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      curPageOn: this.curPage,
    };
  },
  computed: {
    middlePages() {
      let num;
      if (this.pageCount <= 2) {
        num = 0;
      } else if (this.pageCount > 2 && this.pageCount <= 10) {
        num = this.pageCount - 2;
      } else {
        num = this.curPageOn > 999 ? 2 : 5;
      }
      return num;
    },
    bigLimit() {
      return this.middlePages > 5 ? this.pageCount - 6 : this.pageCount - 3;
    },
    offset() {
      let curNum;
      if (this.curPageOn <= 5) {
        curNum = 2;
      } else if (this.curPageOn >= this.bigLimit) {
        curNum = this.bigLimit - 2;
      } else {
        curNum = this.middlePages > 5 ? this.curPageOn - 3 : this.curPageOn - 2;
      }
      return curNum;
    },
  },
  methods: {
    page(indexPage) {
      this.$emit('togglePage', indexPage);
      this.curPageOn = indexPage;
    },
    prevPage() {
      if (this.curPageOn !== 1) {
        this.page(this.curPageOn - 1);
      }
    },
    nextPage() {
      if (this.curPageOn !== this.pageCount) {
        this.page(this.curPageOn + 1);
      }
    },
  },
  watch: {
    pageCount() {
      this.curPageOn = this.curPage;
    },
  },
};
</script>
