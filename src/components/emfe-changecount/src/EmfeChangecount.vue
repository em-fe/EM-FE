<template>
  <div class="emfe-changecount">
    <div v-for="(l,i) in countList" :style="{top: -currentIndex[i]+ 'px',left: i*15 + 'px'}" class="emfe-changecount-box">
      <span class="emfe-changecount-box-count" v-for="(item, index) in countArr">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmfeChangecount',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      countArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      copycountArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      countList: [],
      currentIndex: [],
      index: [0],
    };
  },
  created() {
    this.countList = this.count.toString().split('');
    for (let k = 0; k < this.countList.length; k++) {
      this.currentIndex.push(0);
    }
    setTimeout(() => {
      this.move();
    }, 50);
  },
  methods: {
    move() {
      this.time = [];
      this.currentIndex = [];
      this.countList = this.count.toString().split('');
      for (let k = 0; k < this.countList.length; k++) {
        for (let i = 0; i < this.countArr.length; i++) {
          if (this.countArr[i] === Number(this.countList[k])) {
            this.currentIndex.push(i * 28);
            break;
          }
        }
      }
    },
  },
  watch: {
    count(val, oldval) {
      if (val !== oldval) {
        this.count = val;
        this.copycountArr.forEach((item) => {
          this.countArr.push(item);
        });
        this.move();
      }
    },
  },
};
</script>
