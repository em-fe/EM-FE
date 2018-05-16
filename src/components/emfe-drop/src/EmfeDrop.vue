<template>
  <div class="emfe-drop" :class="className">
    <template v-for="(item, index) in datas">
      <div class="emfe-drop-hr" :class="[`${className}-drag`]" v-if="item.hrStatus" :style="{width: item.style.width}"></div>
      <span :class="[`${className}-drag`]" :key="index" :index="index" @mousedown.stop="down($event, index, item)" ref="hits" :style="item.style">{{item.title}}</span>
    </template>
    <div class="emfe-drop-hr" v-if="lastHrStatus"></div>
  </div>
</template>
<script>
import { getElementTop, getElementLeft } from '../../../tools/assist';
import _ from '../../../tools/lodash';
// 记录位置 x,y
const refPos = {
  y: 0,
  x: 0,
};
// // 占位 边框 1 px
const hrBorderSize = 1;
// 其他常量
const otherConstant = 0;

// 上一个虚拟框的索引
let lastHrIndex = -1;

// 每个拖拽的宽度
let dragWidth = -1;

export default {
  name: 'EmfeDrop',
  data() {
    return {
      datas: [],
      lastHrStatus: false, // 如果碰到最后一个最后一个分割线显示
      lastHit: -1,
      lastDrag: -1,
    };
  },
  props: {
    opationsData: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    swap: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    this.handleData();
  },
  methods: {
    handleData() {
      this.datas = [];
      this.opationsData.forEach((od, odIndex) => {
        const newOd = {
          title: od.title,
          style: {},
          hrStatus: false,
          index: odIndex,
        };
        this.datas.push(newOd);
      });
    },
    testHit(one, two) {
      let hit = false;
      const twoTop = getElementTop(two) - this.scrollTop;
      const twoBottom = twoTop + two.clientHeight;
      const oneTop = getElementTop(one) - this.scrollTop;
      const oneBottom = oneTop + one.clientHeight;

      const twoLeft = getElementLeft(two) - this.scrollLeft;
      const twoRight = twoLeft + two.clientWidth;
      const oneLeft = getElementLeft(one) - this.scrollLeft;
      const oneRight = oneLeft + one.clientWidth;
      if (oneTop <= twoBottom && oneBottom >= twoTop
      && oneLeft <= twoRight && oneRight >= twoLeft) {
        hit = true;
      }
      return hit;
    },
    down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.scrollLeft = document.body.scrollLeft;
      this.elTop = (e.target.offsetTop - otherConstant);
      this.elLeft = (e.target.offsetLeft - otherConstant);
      refPos.y = e.pageY;
      refPos.x = e.pageX;
      dragWidth = e.target.clientWidth + (hrBorderSize * 2);
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        width: `${dragWidth}px`,
        position: 'absolute',
        left: `${this.elLeft}px`,
        top: `${this.elTop}px`,
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move(e) {
      const { hits } = this.$refs;
      const { index, style } = this.datas[this.lastDrag];
      const disPosY = e.pageY - refPos.y;
      const disPosX = e.pageX - refPos.x;
      style.top = `${this.elTop + disPosY}px`;
      style.left = `${this.elLeft + disPosX}px`;
      hits.forEach((hit, hitIndex) => {
        if (hitIndex !== index) {
          const isHit = this.testHit(hits[index], hit);
          if (isHit) {
            this.getHitIndex(hitIndex);
            this.moveDragHr();
          }
        }
      });
      this.$emit('move', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      e.preventDefault();
      return false;
    },
    up() {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.swapData();
      // 之所以不用 this.datas[lastHrIndex].hrStatus = false
      // 是因为连续拖拽碰撞，会出问题，有的虚线不隐藏
      this.datas.forEach((data) => {
        data.hrStatus = false;
        data.style = {};
      });
      this.lastHrStatus = false;
      this.lastHit = -1;
      this.lastDrag = -1;
      lastHrIndex = -1;
      this.$emit('up');
    },
    getHitIndex(hitIndex) {
      this.lastHit = hitIndex;
    },
    // 移动拖拽的虚线框
    moveDragHr() {
      const hrIndex = this.lastDrag < this.lastHit ? 1 : 0;
      this.lastHrStatus = false;
      this.datas[this.lastDrag].hrStatus = false;
      if (lastHrIndex > -1 && lastHrIndex < this.datas.length) {
        this.datas[lastHrIndex].hrStatus = false;
      }
      lastHrIndex = this.lastHit + hrIndex;
      if (lastHrIndex < this.datas.length) {
        this.datas[lastHrIndex].hrStatus = true;
      } else {
        this.lastHrStatus = true;
      }
    },
    swapData() {
      if (this.lastHit > -1) {
        const { opationsData, datas, lastHit, lastDrag } = this;
        _.exchangeAttrValue(datas[lastDrag], datas[lastHit], 'index');
        _.swap(this.datas, this.lastHit, this.lastDrag);
        _.swap(opationsData, lastHit, lastDrag);
        this.$emit('swap', datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
        this.swap(datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
      }
    },
    plus(index) {
      const obj = {
        other: false,
        hrStatus: false,
        style: {},
      };
      this.datas.splice(index + 1, 0, obj);
      this.opationsData.splice(index + 1, 0, '');
      this.$emit('plus', this.datas[index], index);
    },
    minus(index, item) {
      if (!this.clickFlg && item.other) {
        this.clickFlg = true;
      }
      this.datas.splice(index, 1);
      this.opationsData.splice(index, 1);
      this.$emit('minus', this.datas[index], index);
    },
    otherPlus() {
      const obj = {
        hrStatus: false,
        other: true,
        style: {},
        noPlus: true,
      };
      if (this.clickFlg) {
        this.datas.splice(this.datas.length, 0, obj);
        this.opationsData.splice(this.datas.length, 0, '');
      }
      this.clickFlg = false;
      this.$emit('otherplus', this.datas[this.datas.length - 1], this.datas.length - 1);
    },
  },
  watch: {
    opationsData() {
      this.handleData();
    },
  },
};
</script>
