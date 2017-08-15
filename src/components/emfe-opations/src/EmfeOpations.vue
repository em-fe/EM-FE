<template>
  <div class="emfe-opations" :class="opationsName">
    <template v-for="(item, index) in datas">
      <div class="emfe-opations-main" :key="index" :style="item.style" ref="hits">
        <i class="emfe-opations-icon emfe-opations-radio"></i>
        <emfe-input :placeholder="index === datas.length - 1 && !clickFlg ? otherPlaceholder : dataPlaceholder" v-model="opationsData[index]" className="emfe-opations"></emfe-input>
        <i class="emfe-opations-icon emfe-opations-plus" @click="plus(index)" v-show="!item.noPlus"
        :class="{'emfe-opations-margin-right': !minusFlg}"></i>
        <i class="emfe-opations-icon emfe-opations-minus" @click="minus(index)" v-show="item.text === otherPlaceholder || minusFlg"
        :class="{'emfe-opations-margin-left': item.noPlus}"></i>
        <i class="emfe-opations-icon emfe-opations-drag" @mousedown.stop="down($event, item)"></i>
      </div>
      <div class="emfe-opations-hr" v-if="item.hrStatus"></div>
    </template>
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

let lastHit = -1;
let lastDrag = -1;

export default {
  name: 'EmfeOpations',
  data() {
    return {
      clickFlg: !this.other,
      datas: [],
      hits: [],
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
      this.datas = [];
      this.hits = [];
      this.opationsData.forEach((od, odIndex) => {
        const newOd = {
          text: od,
        };
        newOd.style = {};
        newOd.hrStatus = false;
        newOd.index = odIndex;
        if (this.other && odIndex === this.opationsData.length - 1) {
          newOd.noPlus = true;
        }
        this.datas.push(newOd);
        this.hits.push(false);
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
    down(e, item) {
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
      this.item = item;
      this.$emit('down', this.item);
      return false;
    },
    move(e) {
      const { hits } = this.$refs;
      const { index, style } = this.item;
      const disPosY = e.pageY - refPos.y;
      style.top = `${this.elTop + disPosY}px`;

      hits.forEach((hit, hitIndex) => {
        if (hitIndex !== index) {
          const isHit = this.testHit(hits[index], hit);
          if (isHit) {
            if (!this.hits[hitIndex] && !this.hits[index]) {
              lastHit = hitIndex;
              lastDrag = index;
              this.hits[hitIndex] = true;
              this.hits[index] = true;
              this.item.index = hitIndex;
              this.datas[hitIndex].index = index;
              _.swap(this.datas, hitIndex, index);
              _.swap(this.opationsData, hitIndex, index);
              this.$emit('swap', this.item, hitIndex, index);
            }
          }
        }
      });
      // 当刚刚交换的两个元素，不在碰上的时候，允许检测
      if (lastHit !== -1) {
        const { offsetTop, clientHeight } = hits[lastHit];
        if (Math.abs(offsetTop - hits[lastDrag].offsetTop) > clientHeight + 4) {
          this.hits[lastHit] = false;
          this.hits[lastDrag] = false;
        }
      }
      this.$emit('move', this.item);
      e.preventDefault();
      return false;
    },
    up() {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.item.style = {};
      this.item.hrStatus = false;
      this.item = {};
      this.$emit('up');
    },
    plus(index) {
      const obj = {
        text: '',
        hrStatus: false,
        style: {},
      };
      this.datas.splice(index + 1, 0, obj);
      this.opationsData.splice(index + 1, 0, '');
      console.log(this.datas[index], index, 0);
      this.$emit('plus', this.datas[index], index);
    },
    minus(index) {
      if (!this.clickFlg && index === this.datas.length - 1) {
        this.clickFlg = true;
      }
      this.datas.splice(index, 1);
      this.opationsData.splice(index, 1);
      this.$emit('minus', this.datas[index], index);
    },
    otherPlus() {
      const obj = {
        text: '',
        hrStatus: false,
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
    other(val, oldVal) {
      if (val !== oldVal) {
        this.clickFlg = !val;
      }
    },
  },
};
</script>
