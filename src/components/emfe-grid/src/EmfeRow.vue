<template>
  <div :class="classList" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';

const prefixCls = 'emfe-row';

export default {
  name: 'EmfeRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
    basin: {
      type: [Number, String],
      default: 0,
    },
    type: {
      validator(value) {
        return _.has(value, ['flex']);
      },
    },
    align: {
      validator(value) {
        return _.has(value, ['top', 'middle', 'bottom']);
      },
    },
    justify: {
      validator(value) {
        return _.has(value, ['start', 'end', 'center', 'space-around', 'space-between']);
      },
    },
    className: String,
  },
  computed: {
    classList() {
      return [
        {
          [`${prefixCls}`]: !this.type,
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-${this.align}`]: !!this.type && !!this.align,
          [`${prefixCls}-${this.justify}`]: !!this.type && !!this.justify,
          [`${this.className}`]: !!this.className,
        },
      ];
    },
    rowStyle() {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      const gapGutter = this.gutter / 2;
      const gapBasin = this.basin / 2;
      const gutter = gapGutter > 0 ? `margin-left: -${gapGutter}px;margin-right: -${gapGutter}px;` : '';
      const basin = gapBasin > 0 ? `margin-top: -${gapBasin}px;margin-bottom: -${gapBasin}px;` : '';
      return `${gutter}${basin}`;
    },
  },
};
</script>
