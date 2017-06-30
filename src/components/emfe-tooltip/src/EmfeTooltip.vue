<template>
  <div class="emfe-tooltip" :class="tooltipName" @mouseenter="showPopper"
  @mouseleave="hidePopper">
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

let enterTimer = null;
let leaveTimer = null;

export default {
  name: 'EmfeTooltip',
  props: {
    className: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'dark',
    },
    arrowStatus: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: [Number, String],
      default: 16,
    },
    delay: {
      type: [Number, String],
      default: 0,
    },
    placement: {
      validator(value) {
        return _.has(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
      },
      default: 'top',
    },
  },
  data() {
    return {
      popperStyle: '',
      popperStatus: false,
      setStyled: true,
    };
  },
  computed: {
    tooltipName() {
      return `${this.className}-tooltip`;
    },
    slotName() {
      return `${this.className}-slot`;
    },
    popperName() {
      return [`${this.className}-popper`, `emfe-tooltip-${this.theme}-popper`];
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
      if (!this.setStyled) {
        return;
      }

      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }

      this.setStyled = false;

      const { reference, popper } = this.$refs;
      const bodyScrollTop = document.body.scrollTop;
      const bodyScrollLeft = document.body.scrollLeft;
      const bodyHeight = document.body.clientHeight;
      const bodyWidth = document.body.clientWidth;

      const referencePos = reference.getBoundingClientRect();
      const popperPos = popper.getBoundingClientRect();
      const { left, right, top, bottom, width, height } = referencePos;
      let iLeft = 0;
      let iTop = 0;

      if (this.placement.indexOf('left') > -1) {
        iLeft += left - popperPos.width - this.offsetDefault;
      } else if (this.placement.indexOf('right') > -1) {
        iLeft = right + this.offsetDefault;
      } else if (this.placement.indexOf('bottom') > -1) {
        iTop = bottom + this.offsetDefault;
      } else {
        iTop = top - popperPos.height - this.offsetDefault;
      }

      if (/left|right/g.test(this.placement)) {
        if (this.placement.indexOf('start') > -1) {
          iTop = top;
        } else if (this.placement.indexOf('end') > -1) {
          iTop = bottom - popperPos.height;
        } else {
          iTop = ((height - popperPos.height) / 2) + top;
        }
      }

      if (/bottom|top/g.test(this.placement)) {
        if (this.placement.indexOf('start') > -1) {
          iLeft = left;
        } else if (this.placement.indexOf('end') > -1) {
          iLeft = right - popperPos.width;
        } else {
          iLeft = ((width - popperPos.width) / 2) + left;
        }
      }

      iTop += bodyScrollTop;
      iLeft += bodyScrollLeft;

      if (iLeft + popperPos.width > bodyWidth) {
        iLeft = left;
      } else if (iLeft < 0) {
        iLeft = right + this.offsetDefault;
      }

      if (iTop + popperPos.height > bodyHeight) {
        const bottomOffset = /bottom/g.test(this.placement) ? height + this.offsetDefault : 0;
        iTop = (bottom + this.offsetDefault) - bottomOffset;
      } else if (iTop < 0) {
        iTop = 0;
      }

      this.popperStyle = `left: ${iLeft}px;top: ${iTop}px;`;
    },
    showPopper() {
      if (this.popperStatus) {
        clearTimeout(enterTimer);
        clearTimeout(leaveTimer);
      }
      enterTimer = setTimeout(() => {
        this.popperStatus = true;
      }, this.delayDefault);
    },
    hidePopper() {
      if (!this.popperStatus) {
        clearTimeout(enterTimer);
      }
      leaveTimer = setTimeout(() => {
        this.popperStatus = false;
      }, this.delayDefault);
      if (!this.popperStatus) {
        clearTimeout(leaveTimer);
      }
    },
  },
};
</script>
