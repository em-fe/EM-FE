<template>
  <div class="emfe-tooltip" :class="tooltipName" :style="relativeStyle" @mouseenter="showPopper" @click='clickPopper' @mouseleave="hidePopper">
    <div class="emfe-tooltip-slot" :class="slotName" ref="reference">
      <slot name="render"></slot>
    </div>
    <transition name="fade" v-on:enter="enter" v-on:before-enter="beforeEnter" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave" v-on:after-leave="afterLeave">
      <div class="emfe-tooltip-popper" :class="popperName" :style="popperStyle" v-show="popperStatus" ref="popper">
        <i class="emfe-tooltip-arrow" :class="arrowPlacement" v-if="arrowStatus"></i>
        <slot name="tip"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import { getStyle, getElementTop, getElementLeft } from '../../../tools/assist';
import O from '../../../tools/o';

let enterTimer = null;
let leaveTimer = null;

const checkPosition = (self) => {
  let parentNodeHasPosition = false;
  let parentNodePosition = getStyle(self.$parent.$el, 'position');
  self.parentPositionHasFixed = parentNodePosition === 'fixed';
  self.parentPositionHasRelative = parentNodePosition === 'relative';
  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
  let parent = self.$el;
  // 循环查找父级有没有定位
  while (parent && parent.nodeName.toLocaleLowerCase() !== 'body') {
    parent = parent.parentNode;
    parentNodePosition = getStyle(parent, 'position');

    if (!parentNodeHasPosition) {
      parentNodeHasPosition = parentNodePosition !== 'static';
    }

    if (!self.parentPositionHasFixed) {
      self.parentPositionHasFixed = parentNodePosition === 'fixed';
    }

    if (!self.parentPositionHasRelative) {
      self.parentPositionHasRelative = parentNodePosition === 'relative';
    }
  }
  // 根据父级是否有固定定位判断悬浮窗是否有固定定位
  self.positionStyle = self.parentPositionHasFixed ? 'fixed' : 'absolute';
};

export default {
  name: 'EmfeTooltip',
  props: {
    className: {
      type: String,
      default: '',
    },
    theme: {
      validator(value) {
        return _.has(value, ['dark', 'light']);
      },
      default: 'dark',
    },
    arrowStatus: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: [Number, String],
      default: 8,
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    delay: {
      type: [Number, String],
      default: 100,
    },
    placement: {
      validator(value) {
        return _.has(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
      },
      default: 'top',
    },
    disable: {
      type: [Boolean, String],
      default: false,
    },
    types: {
      type: String,
      default: 'hover',
    },
  },
  data() {
    return {
      popperStyle: '',
      popperStatus: false,
      setStyled: true,
      relativeStyle: '',
    };
  },
  computed: {
    tooltipName() {
      return this.className ? `${this.className}-tooltip` : '';
    },
    slotName() {
      return this.className ? `${this.className}-slot` : '';
    },
    popperName() {
      return [{
        [`${this.className}-popper`]: !!this.className,
      }, `emfe-tooltip-${this.theme}-popper`];
    },
    arrowPlacement() {
      return [`emfe-tooltip-${this.theme}-arrow`, `emfe-tooltip-arrow-${this.placement}`, `emfe-tooltip-${this.theme}-arrow-${this.placement}`];
    },
  },
  created() {
    this.offsetDefault = this.offset - 0;
    this.delayDefault = this.delay - 0;
  },
  methods: {
    enter() {
      this.setPoperStyle();
    },
    beforeEnter() {
      this.$emit('before-show');
    },
    afterEnter() {
      this.$emit('after-show');
    },
    beforeLeave() {
      this.$emit('before-hide');
    },
    afterLeave() {
      this.$emit('after-hide');
    },
    setPoperStyle() {
      // 只设定一次位置
      if (!this.setStyled) {
        return;
      }

      if (O.empty(this.styles)) {
        this.setStyled = false;

        const { reference, popper } = this.$refs;
        const { scrollLeft, scrollTop } = document.body;
        const { innerWidth, innerHeight } = window;
        const popperPos = popper.getBoundingClientRect();
        const referencePos = reference.getBoundingClientRect();
        const { left, right, top, bottom, width, height } = referencePos;

        let popperLeft = 0;
        let popperTop = 0;
        // 定位检测
        checkPosition(this);
        // 如果父级没有定位
        if (this.placement.indexOf('left') > -1) {
          popperLeft = left - popperPos.width - this.offsetDefault;
        } else if (this.placement.indexOf('right') > -1) {
          popperLeft = right + this.offsetDefault;
        } else if (this.placement.indexOf('bottom') > -1) {
          popperTop = bottom + this.offsetDefault;
        } else {
          popperTop = top - popperPos.height - this.offsetDefault;
        }

        if (/left|right/g.test(this.placement)) {
          if (this.placement.indexOf('start') > -1) {
            popperTop = top;
          } else if (this.placement.indexOf('end') > -1) {
            popperTop = bottom - popperPos.height;
          } else {
            popperTop = ((height - popperPos.height) / 2) + top;
          }
        }

        if (/bottom|top/g.test(this.placement)) {
          if (this.placement.indexOf('start') > -1) {
            popperLeft = left;
          } else if (this.placement.indexOf('end') > -1) {
            popperLeft = right - popperPos.width;
          } else {
            popperLeft = ((width - popperPos.width) / 2) + left;
          }
        }
        // 如果没有固定定位，处理有滚动距离
        if (!this.parentPositionHasFixed) {
          popperTop += scrollTop;
          popperLeft += scrollLeft;
        }
        // 如果父级有相对定位，并且不存在固定定位
        if (this.parentPositionHasRelative && !this.parentPositionHasFixed) {
          const elTop = getElementTop(this.$el);
          const elParentTop = getElementTop(this.$el.parentNode);
          const elLeft = getElementLeft(this.$el);
          const elParentLeft = getElementLeft(this.$el.parentNode);

          popperTop = elTop - elParentTop;
          popperLeft = elLeft - elParentLeft;

          const popperRight = popperLeft + width;
          const popperBottom = popperTop + height;
          // 如果父级没有定位
          if (this.placement.indexOf('left') > -1) {
            popperLeft -= popperPos.width + this.offsetDefault;
          } else if (this.placement.indexOf('right') > -1) {
            popperLeft = popperRight + this.offsetDefault;
          } else if (this.placement.indexOf('bottom') > -1) {
            popperTop = popperBottom + this.offsetDefault;
          } else {
            popperTop -= popperPos.height + this.offsetDefault;
          }
          // 设置右边和左边
          if (/left-end|right-end/g.test(this.placement)) {
            popperTop = popperBottom - popperPos.height;
          } else if (/(left|right)$/g.test(this.placement)) {
            popperTop += (height - popperPos.height) / 2;
          }
          // 设置上面和下面
          if (/bottom-end|top-end/g.test(this.placement)) {
            popperLeft += width - popperPos.width;
          } else if (/(bottom|top)$/g.test(this.placement)) {
            popperLeft += (width - popperPos.width) / 2;
          }
        } else {
          // 如果没有定位，超出 document 高度处理
          if (popperLeft + popperPos.width > innerWidth) {
            popperLeft = left - popperPos.width - this.offsetDefault;
          } else if (popperLeft < 0) {
            popperLeft = right + this.offsetDefault;
          }

          if (popperTop + popperPos.height > innerHeight) {
            popperTop = popperTop - height - this.offsetDefault;
          } else if (popperTop < 0) {
            const bottomOffset = /bottom/g.test(this.placement) ? height + this.offsetDefault : 0;
            popperTop = (bottom + this.offsetDefault) - bottomOffset;
          }
        } // end 如果父级有相对定位，并且不存在固定定位

        this.popperStyle = `position: ${this.positionStyle}; left: ${popperLeft}px; top: ${popperTop}px;`;
      } else {
        this.popperStyle = this.styles;
      }
    },
    showPopper() {
      if (this.types === 'hover') {
        if (this.disable) {
          return;
        }
        if (this.popperStatus) {
          clearTimeout(enterTimer);
          clearTimeout(leaveTimer);
        }
        enterTimer = setTimeout(() => {
          this.popperStatus = true;
        }, this.delayDefault);
      }
    },
    hidePopper() {
      if (this.types === 'hover') {
        if (this.disable) {
          return;
        }
        if (!this.popperStatus) {
          clearTimeout(enterTimer);
        }
        leaveTimer = setTimeout(() => {
          this.popperStatus = false;
        }, this.delayDefault);
        if (!this.popperStatus) {
          clearTimeout(leaveTimer);
        }
      }
    },
    clickPopper() {
      if (this.types === 'click') {
        if (this.disable) {
          return;
        }
        if (this.popperStatus) {
          clearTimeout(enterTimer);
          clearTimeout(leaveTimer);
        }
        enterTimer = setTimeout(() => {
          this.popperStatus = true;
        }, this.delayDefault);
      }
      this.$emit('popper', this.clickHide);
    },
    clickHide() {
      if (this.types === 'click') {
        if (this.disable) {
          return;
        }
        if (!this.popperStatus) {
          clearTimeout(enterTimer);
        }
        leaveTimer = setTimeout(() => {
          this.popperStatus = false;
        }, this.delayDefault);
        if (!this.popperStatus) {
          clearTimeout(leaveTimer);
        }
      }
    },
  },
};
</script>
