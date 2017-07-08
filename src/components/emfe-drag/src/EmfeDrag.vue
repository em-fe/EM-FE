<template>
  <div class="emfe-drag" :class="dragName" @mousedown="down" :style="dragStyle" ref="drag">
    <slot></slot>
  </div>
</template>
<script>
import { getStyle } from '../../../tools/assist';

// 记录位置 x,y
const refPos = {};
// 有 2px 的边框
const borderSize = 2;

export default {
  name: 'EmfeDrag',
  data() {
    return {
      dragStyle: '',
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    limit: {
      type: [String, Boolean],
      default: false,
    },
    dragEl: {
      type: [String, Array],
      default: '',
    },
    initialValue: { // 初始值
      type: [String, Number],
      default: 0,
    },
  },
  computed: {
    dragName() {
      return this.className ? `${this.className}-drag` : '';
    },
  },
  // 子组件 created 获取不到，所以用 mounted
  mounted() {
    this.parent = this.$el.parentNode;
    this.parentLeft = this.parent.offsetLeft;
    this.parentTop = this.parent.offsetTop;
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
    this.elWidth = this.$el.clientWidth;
    this.elHeight = this.$el.clientHeight;
    this.elCenter = (this.elWidth / 2) + borderSize;
    if (this.dragEl) {
      this.parentPaddingTop = parseInt(getStyle(this.parent, 'paddingTop'), 10);
      this.parentPaddingLeft = parseInt(getStyle(this.parent, 'paddingLeft'), 10);
      console.log(borderSize);
    }
  },
  methods: {
    down(e) {
      this.scrollTop = document.body.scrollTop;
      this.scrollLeft = document.body.scrollLeft;
      this.elLeft = this.$el.offsetLeft;
      this.elTop = this.$el.offsetTop;
      refPos.x = e.pageX;
      refPos.y = e.pageY;
      document.addEventListener('mousemove', this.move, false);
      document.addEventListener('mouseup', this.up, false);
      console.log(111, this.dragEl);
      if (this.dragEl) {
        console.log(1, e.clientY, this.parentTop, this.parentPaddingTop);
        console.log(2, this.scrollTop, this.initialValue);
        let downTop = e.clientY - this.parentTop;
        downTop -= this.parentPaddingTop;
        downTop += this.scrollTop;
        downTop += this.initialValue - 0;
        let downLeft = e.clientY - this.parentLeft;
        downLeft -= this.parentPaddingLeft;
        downLeft += this.scrollLeft;
        downLeft += this.initialValue - 0;

        this.dragEl.forEach((dragElement) => {
          console.log(0, downLeft);
          dragElement.style.left = `${downLeft}px`;
          dragElement.style.top = `${downTop}px`;
        });
      }
      this.$emit('beforeDrag', e);
    },
    move(e) {
      const disPosX = e.pageX - refPos.x;
      const disPosY = e.pageY - refPos.y;

      let elLeft = this.elLeft + disPosX;
      let elTop = this.elTop + disPosY;

      if (this.limit) {
        if (elLeft + this.elWidth > (this.parentWidth - borderSize) + this.elCenter) {
          elLeft = this.parentWidth - this.elWidth;
          elLeft += this.elCenter - borderSize;
        } else if (elLeft < borderSize - this.elCenter) {
          elLeft = borderSize - this.elCenter;
        }
        if (elTop + this.elHeight > (this.parentHeight - borderSize) + this.elCenter) {
          elTop = this.parentHeight - this.elHeight;
          elTop += this.elCenter - borderSize;
        } else if (elTop < borderSize - this.elCenter) {
          elTop = borderSize - this.elCenter;
        }
      }

      if (this.dragEl) {
        let downTop = e.clientY - this.parentTop;
        downTop -= this.parentPaddingTop;
        downTop += this.scrollTop;
        downTop += this.initialValue - 0;
        let downLeft = e.clientX - this.parentLeft;
        downLeft -= this.parentPaddingLeft;
        downLeft += this.scrollLeft;
        downLeft += this.initialValue - 0;
        this.dragEl.forEach((dragElement) => {
          console.log(334, downLeft);
          dragElement.style.left = `${downLeft}px`;
          dragElement.style.top = `${downTop}px`;
        });
      } else {
        this.dragStyle = `left: ${elLeft}px; top: ${elTop}px`;
      }
      this.$emit('drag', e, elLeft, elTop);
    },
    up(e) {
      document.removeEventListener('mousemove', this.move, false);
      document.removeEventListener('mouseup', this.up, false);
      this.$emit('afterDrag', e);
    },
  },
  beforeDestroy() {
    console.log('dstory');
  },
};
</script>
