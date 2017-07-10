<template>
  <div class="emfe-color">
    <div class="emfe-color-btn" @click="toggle">
      <slot></slot>
    </div>
    <emfe-transition name="gradual">
      <div class="emfe-color-box" ref="colorbox" v-show="colorStatus" :style="colorBoxStyle">
        <emfe-drag className="emfe-color" limit="true" :dragEl="colorMove" :style="rgbStyle" :initialValue="-6" :borderSize="2" limitPosition="center" @drag="dragSB" @beforeDrag="beforeDragSB">
          <div class="emfe-color-inner" ref="color" :style="pointStyle"></div>
        </emfe-drag>
        <emfe-drag className="emfe-color-hue" :dragEl="hueMove" direction="vertical" limit="true" @drag="dragH" @beforeDrag="beforeDragH">
          <span class="emfe-color-hueMove" ref="hueMove" :style="hueStyle">
            <i class="emfe-color-left"></i>
            <i class="emfe-color-right"></i>
          </span>
        </emfe-drag>
        <div class="emfe-color-handle">
          <div class="emfe-color-show-color">
            <div class="emfe-color-new-color" :style="newColor"></div>
            <div class="emfe-color-current-color" style="background:blue;"></div>
          </div>
          <div class="emfe-color-field">
            <p class="emfe-color-title">R</p>
            <input type="tel" maxlength="3" size="3" class="emfe-color-inp" v-model="rgb.r" @input="rChange">
          </div>
          <div class="emfe-color-field">
            <p class="emfe-color-title">G</p>
            <input type="tel" maxlength="3" size="3" class="emfe-color-inp" v-model="rgb.g" @input="gChange">
          </div>
          <div class="emfe-color-field">
            <p class="emfe-color-title">B</p>
            <input type="tel" maxlength="3" size="3" class="emfe-color-inp" v-model="rgb.b" @input="bChange">
          </div>
          <div class="emfe-color-field">
            <p class="emfe-color-title">#</p>
            <input type="tel" maxlength="6" size="6" class="emfe-color-inp" v-model="hex" @input="hexChange">
          </div>
          <button class="emfe-color-sub">OK</button>
        </div>
      </div>
    </emfe-transition>
  </div>
</template>
<script>
import { getElementTop, getElementLeft } from '../../../tools/assist';
import Color from '../../../tools/color';
import EmfeDrag from '../../emfe-drag';

export default {
  name: 'EmfeColor',
  data() {
    return {
      colorStatus: true,
      hueMove: [],
      colorMove: [],
      hsb: {
        h: 0,
        s: 100,
        b: 100,
      },
      hsbBackground: {
        h: 0,
        s: 100,
        b: 100,
      },
      pointStyle: '',
      hueStyle: '',
      colorBoxStyle: 'opacity: 0;',
    };
  },
  props: {
    value: { // 默认的颜色
      type: String,
      default: 'ff0000',
    },
  },
  computed: {
    rgb() {
      return Color.hsbToRgb(this.hsb);
    },
    rgbBackground() {
      return Color.hsbToRgb(this.hsbBackground);
    },
    rgbStyle() {
      return `background-color: rgb(${this.rgbBackground.r}, ${this.rgbBackground.g}, ${this.rgbBackground.b})`;
    },
    hex() {
      return Color.rgbToHex(this.rgb);
    },
    newColor() {
      return `background: #${this.hex}`;
    },
  },
  beforeMount() {
    this.hsb = Color.rgbToHsb(Color.hexToRgb(this.value));
    this.hsbBackground = this.hsb;
  },
  mounted() {
    const { hueMove, color, colorbox } = this.$refs;
    const colorboxPadding = 8;
    this.hueMove.push(hueMove);
    this.colorMove.push(color);
    this.colorboxTop = getElementTop(colorbox);
    this.colorboxLeft = getElementLeft(colorbox);
    this.colorboxSize = colorbox.clientWidth - (colorboxPadding * 2);
    // 定位点
    this.colorComputed();
    setTimeout(() => {
      this.colorStatus = false;
    }, 0);
    setTimeout(() => {
      this.colorBoxStyle = 'opacity: 1;';
    }, 500);
  },
  methods: {
    beforeDragSB(e, left, top) {
      const sb = Color.getSB(this, left, top);
      this.hsb.s = sb.s;
      this.hsb.b = sb.b;
    },
    dragSB(e, left, top) {
      this.beforeDragSB(e, left, top);
    },
    beforeDragH(e, left, top) {
      this.hsb.h = Color.getH(this, top);
      this.hsbBackground.h = Color.getH(this, top);
    },
    dragH(e, left, top) {
      this.beforeDragH(e, left, top);
    },
    rChange(e) {
      const { value } = e.target;
      this.rgb.r = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    gChange(e) {
      const { value } = e.target;
      this.rgb.g = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    bChange(e) {
      const { value } = e.target;
      this.rgb.b = parseInt(value, 10);
      this.setPoint(this.rgb);
    },
    hexChange(e) {
      const { value } = e.target;
      this.setPoint(Color.hexToRgb(value));
    },
    setPoint(rgb) {
      this.hsb = Color.rgbToHsb(rgb);
      this.hsbBackground.h = this.hsb.h;
      this.colorComputed();
    },
    colorComputed() {
      // 定位点
      const sbComputed = Color.offsetSB(this, this.hsb);
      const hComputed = Color.offsetH(this, this.hsb);
      this.pointStyle = `left: ${sbComputed.left}px; top: ${sbComputed.top}px;`;
      this.hueStyle = `top: ${hComputed}px;`;
    },
    toggle() {
      this.colorStatus = !this.colorStatus;
    },
  },
  component: {
    EmfeDrag,
  },
};
</script>
