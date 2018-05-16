<template>
  <div class="emfe-changecount" :class="changecountName">
    <div v-for="(l,i) in countList" :style="{transform: `translate3d(0, ${-currentIndex[i]}px, 0)`, 'transition-duration': `${time}s`}" class="emfe-changecount-box" :class="boxName">
      <span class="emfe-changecount-box-count" v-for="(item, index) in countArr" :class="countName">{{item}}</span>
    </div>
  </div>
</template>

<script>
const itemHeight = 28; // 数字的高度

export default {
  name: 'EmfeChangecount',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: 0.3,
    },
    className: String,
  },
  computed: {
    changecountName() {
      return this.className ? `${this.className}-changecount` : '';
    },
    boxName() {
      return this.className ? `${this.className}-changecount-box` : '';
    },
    countName() {
      return this.className ? `${this.className}-changecount-box-count` : '';
    },
  },
  data() {
    return {
      countArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      countList: [],
      currentIndex: [],
    };
  },
  created() {
    this.init();
    this.move();
  },
  methods: {
    // 初始化
    init() {
      this.countList = this.count.toString().split('');
      this.countList.forEach(() => this.currentIndex.push(0));
    },
    // 动起来
    move() {
      setTimeout(() => {
        this.currentIndex = [];

        for (let k = 0; k < this.countList.length; k++) {
          this.currentIndex.push(this.countList[k] * itemHeight);
        }
      }, 0);
    },
  },
  watch: {
    count(val, oldval) {
      if (val !== oldval) {
        this.count = val;
        this.init();
        this.move();
      }
    },
  },
};
</script>
