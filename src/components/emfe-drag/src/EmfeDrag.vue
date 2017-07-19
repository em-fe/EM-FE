<template>
  <div class="emfe-drag" :class="dragName" @mousedown.stop="down" @click.stop :style="dragStyle" ref="drag">
    <slot></slot>
  </div>
</template>
<script>
import { getStyle, getElementLeft, getElementTop } from '../../../tools/assist';
import _ from '../../../tools/lodash';

// 记录位置 x,y
const refPos = {
  x: 0,
  y: 0,
};

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
    limit: { // 限制范围
      type: [String, Boolean],
      default: false,
    },
    limitPosition: {
      validator(value) {
        return _.has(value, ['center', 'top']);
      },
      default: 'top',
    },
    dragEl: { // 父元素为限制，拖拽的元素
      type: Array,
    },
    initialValue: { // 初始值
      type: Number,
      default: 0,
    },
    direction: {
      validator(value) {
        return _.has(value, ['vertical', 'horizontal', 'all']);
      },
      default: 'all',
    },
    borderSize: {// 拖拽元素的边框 | 描边
      type: Number,
      default: 0,
    },
    dragDiyStyle: {
      type: String,
      default: '',
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
    this.parentLeft = getElementLeft(this.parent);
    this.parentTop = getElementTop(this.parent);
    this.parentWidth = this.parent.clientWidth;
    this.parentHeight = this.parent.clientHeight;
    this.elWidth = this.$el.clientWidth;
    this.elHeight = this.$el.clientHeight;
    this.elCenter = (this.elWidth / 2) + this.borderSize;
    this.elCenter = this.limitPosition === 'center' ? this.elCenter : 0;
    this.dragStyle = this.dragDiyStyle;
    setTimeout(() => {
      if (this.dragEl && this.dragEl.length > 0) {
        this.parent = this.dragEl[0].parentNode;
        this.parentLeft = getElementLeft(this.parent);
        this.parentTop = getElementTop(this.parent);
        this.parentWidth = this.parent.clientWidth;
        this.parentHeight = this.parent.clientHeight;
        this.elWidth = this.dragEl[0].clientWidth;
        this.elHeight = this.dragEl[0].clientHeight;
        this.elCenter = (this.elWidth / 2) + this.borderSize;
        this.elCenter = this.limitPosition === 'center' ? this.elCenter : 0;
        this.parentPaddingTop = parseInt(getStyle(this.parent, 'paddingTop'), 10);
        this.parentPaddingLeft = parseInt(getStyle(this.parent, 'paddingLeft'), 10);
      }
    }, 0);
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

      let downTop = e.clientY - this.parentTop;
      let downLeft = e.clientX - this.parentLeft;

      if (this.dragEl && this.dragEl.length > 0) {
        downTop -= this.parentPaddingTop;
        downTop += this.scrollTop;
        downTop += this.initialValue;
        downLeft -= this.parentPaddingLeft;
        downLeft += this.scrollLeft;
        downLeft += this.initialValue;
        this.dragEl.forEach((dragElement) => {
          if (this.direction === 'vertical') {
            dragElement.style.top = `${downTop}px`;
          } else if (this.direction === 'horizontal') {
            dragElement.style.left = `${downLeft}px`;
          } else {
            dragElement.style.left = `${downLeft}px`;
            dragElement.style.top = `${downTop}px`;
          }
        });
      }
      this.$emit('beforeDrag', e, downLeft, downTop);
    },
    move(e) {
      const disPosX = e.pageX - refPos.x;
      const disPosY = e.pageY - refPos.y;

      let elLeft = 0;
      let elTop = 0;

      if (this.dragEl && this.dragEl.length > 0) {
        elTop = e.clientY - this.parentTop;
        elTop -= this.parentPaddingTop;
        elTop += this.scrollTop;
        elTop += this.initialValue;
        elLeft = e.clientX - this.parentLeft;
        elLeft -= this.parentPaddingLeft;
        elLeft += this.scrollLeft;
        elLeft += this.initialValue;
      } else {
        elLeft = this.elLeft + disPosX;
        elTop = this.elTop + disPosY;
      }

      if (this.limit) {
        if (elLeft + this.elWidth > (this.parentWidth - this.borderSize) + this.elCenter) {
          elLeft = this.parentWidth - this.elWidth;
          elLeft += this.elCenter - this.borderSize;
        } else if (elLeft < this.borderSize - this.elCenter) {
          elLeft = this.borderSize - this.elCenter;
        }
        if (elTop + this.elHeight > (this.parentHeight - this.borderSize) + this.elCenter) {
          elTop = this.parentHeight - this.elHeight;
          elTop += this.elCenter - this.borderSize;
        } else if (elTop < this.borderSize - this.elCenter) {
          elTop = this.borderSize - this.elCenter;
        }
      }

      if (this.dragEl && this.dragEl.length > 0) {
        this.dragEl.forEach((dragElement) => {
          if (this.direction === 'vertical') {
            dragElement.style.top = `${elTop}px`;
          } else if (this.direction === 'horizontal') {
            dragElement.style.left = `${elLeft}px`;
          } else {
            dragElement.style.left = `${elLeft}px`;
            dragElement.style.top = `${elTop}px`;
          }
        });
      } else {
        this.dragStyle = `left: ${elLeft}px; top: ${elTop}px`;
        if (this.direction === 'vertical') {
          this.dragStyle = `top: ${elTop}px`;
        } else if (this.direction === 'horizontal') {
          this.dragStyle = `left: ${elLeft}px;`;
        }
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
    refPos.x = 0;
    refPos.y = 0;
  },
};
</script>
