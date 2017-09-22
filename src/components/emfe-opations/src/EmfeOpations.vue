<template>
  <div class="emfe-opations" :class="opationsName" ref="dragBox">
    <template v-for="(item, index) in datas">
      <div class="emfe-opations-hr" v-if="item.hrStatus"></div>
      <div class="emfe-opations-main" :key="index" :style="item.style" ref="hits">
        <i class="emfe-opations-icon emfe-opations-radio"></i>
        <emfe-input :placeholder="item.other && !clickFlg ? otherPlaceholder : dataPlaceholder" v-model="opationsData[index]" className="emfe-opations"></emfe-input>
        <i class="emfe-opations-icon emfe-opations-plus" @click="plus(index)" v-show="!item.noPlus"
        :class="{'emfe-opations-margin-right': !minusFlg}"></i>
        <i class="emfe-opations-icon emfe-opations-minus" @click="minus(index, item)" v-show="minusFlg"
        :class="{'emfe-opations-margin-left': item.noPlus}"></i>
        <i class="emfe-opations-icon emfe-opations-drag" @mousedown.stop="down($event, index, item)"></i>
      </div>
    </template>
    <div class="emfe-opations-hr" v-if="lastHrStatus"></div>
    <div class="emfe-opations-operation">
      <div class="emfe-opations-operation-other" @click="otherPlus" v-show="clickFlg">其他选项</div>
    </div>
  </div>
</template>
<script>
import { getElementTop } from '../../../tools/assist';
import _ from '../../../tools/lodash';
// 记录位置 x,y
const refPos = {
  y: 0,
};
// 距下边距 16 px
const itemMarginBottom = 16;
// 占位 边框 1 px
const hrBorderSize = 1;
// 其他常量
const otherConstant = (itemMarginBottom / 2) - hrBorderSize;
// 上一个虚拟框的索引
let lastHrIndex = -1;

export default {
  name: 'EmfeOpations',
  data() {
    return {
      clickFlg: !this.other,
      datas: [],
      lastHrStatus: false, // 如果碰到最后一个最后一个分割线显示
      lastHit: -1,
      lastDrag: -1,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    dataPlaceholder: {
      type: String,
      default: '选项',
    },
    otherPlaceholder: {
      type: String,
      default: '其他',
    },
    opationsData: {
      type: Array,
      required: true,
    },
    other: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    opationsName() {
      return [
        {
          [`${this.className}-opations`]: !!this.className,
        },
      ];
    },
    minusFlg() {
      return this.datas.length >= 2 + (this.clickFlg ? 0 : 1);
    },
  },
  mounted() {
    this.handleData();
  },
  methods: {
    handleData() {
      this.opationsData.forEach((od, odIndex) => {
        const newOd = {
          style: {},
          hrStatus: false,
          index: odIndex,
          other: odIndex === this.opationsData.length - 1,
          noPlus: this.other && odIndex === this.opationsData.length - 1,
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
      if (oneTop <= twoBottom && oneBottom >= twoTop) {
        hit = true;
      }
      return hit;
    },
    down(e, index, item) {
      this.scrollTop = document.body.scrollTop;
      this.elTop = (e.target.offsetTop - otherConstant);
      refPos.y = e.pageY;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      item.style = {
        position: 'absolute',
        left: 0,
        top: `${this.elTop}px`,
      };
      item.hrStatus = true;
      this.lastDrag = index;
      this.$emit('down', this.datas[this.lastDrag], this.opationsData[this.lastDrag]);
      return false;
    },
    move(e) {
      const { dragBox } = this.$refs;
      // 因为创建出来的元素 $refs 不更新，并不是自适应的
      const hits = dragBox.querySelectorAll('.emfe-opations-main');
      const { index, style } = this.datas[this.lastDrag];
      const disPosY = e.pageY - refPos.y;
      style.top = `${this.elTop + disPosY}px`;
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
        this.updataIndex();
        this.$emit('swap', datas[lastDrag], lastHit, lastDrag, opationsData[lastDrag]);
      }
    },
    plus(index) {
      const obj = {
        other: false,
        hrStatus: false,
        style: {},
        noPlus: false,
        index: index + 1,
      };
      this.datas.splice(index + 1, 0, obj);
      this.opationsData.splice(index + 1, 0, '');
      // 多次添加的时候 index 永远是点击的那个所以更新下 index
      this.updataIndex();
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
    updataIndex() {
      // 多次添加的时候 index 永远是点击的那个所以更新下 index
      this.datas.forEach((data, dIndex) => {
        data.index = dIndex;
      });
    },
  },
  watch: {
    other(val, oldVal) {
      if (val !== oldVal) {
        this.clickFlg = !val;
      }
    },
    opationsData(val, oldVal) {
      if (val !== oldVal) {
        this.handleData();
      }
    },
  },
};
</script>
