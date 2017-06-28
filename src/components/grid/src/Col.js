const prefixCls = 'col';

export default {
  name: 'Col',
  props: {
    span: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
    className: String,
    order: [Number, String],
    offset: [Number, String],
    pull: [Number, String],
    push: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      const { _componentTag } = parent.$options;

      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    basin() {
      let parent = this.$parent;
      const { _componentTag } = parent.$options;

      while (parent && _componentTag === 'row') {
        parent = parent.$parent;
      }

      return parent ? parent.basin : 0;
    },
  },
  render(h) {
    const classList = [];
    const style = {};

    if (this.gutter) {
      if (this.gutter > 48) {
        this.gutter = 48;
      }
      style.paddingLeft = `${this.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    if (this.basin) {
      if (this.basin > 48) {
        this.basin = 48;
      }
      style.paddingTop = `${this.basin / 2}px`;
      style.paddingBottom = style.paddingTop;
    }
    // 处理排版参数
    ['span', 'offset', 'pull', 'push', 'order'].forEach((prop) => {
      if (this[prop]) {
        const className1 = `${prefixCls}-${prop}-${this[prop]}`;
        const className2 = `${prefixCls}-${this[prop]}`;
        const className = prop !== 'span' ? className1 : className2;
        classList.push(className);
      }
    });
    // 处理自适应参数
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      const loopPrefix = `${prefixCls}-${size}-`;
      if (typeof this[size] === 'number') {
        classList.push(`${loopPrefix}${this[size]}`);
      } else if (typeof this[size] === 'object') {
        const props = this[size];
        Object.keys(props).forEach((prop) => {
          const className1 = `${loopPrefix}${prop}-${props[prop]}`;
          const className2 = `${loopPrefix}${props[prop]}`;
          const className = prop !== 'span' ? className1 : className2;
          classList.push(className);
        });
      }
    });

    classList.push(this.className);

    return h(this.tag, {
      class: [prefixCls, classList],
      style,
    }, this.$slots.default);
  },
};
