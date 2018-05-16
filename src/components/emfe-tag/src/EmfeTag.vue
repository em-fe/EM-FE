<template>
  <div class='emfe-tag' :class="classList" @click="activeClass">
    <emfe-icon v-if="type" :type="type" className="icon-page"></emfe-icon>
    <slot></slot>
    <span v-if="!!skin"></span>
  </div>
</template>
<script>
const prefixCls = 'emfe-tag';
export default {
  name: 'EmfeTag',
  props: {
    disable: {
      type: [String, Boolean],
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    active: {
      type: [Boolean, String],
      default: false,
    },
    index: {
      type: [String, Number],
      required: true,
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      activeOk: this.active,
      className: this.$parent.className,
      addName: this.$parent.addClass,
      skin: this.$parent.skin,
    };
  },
  computed: {
    classList() {
      return [
        {
          [`${prefixCls}-${this.className}-disable`]: this.disable,
          [`${prefixCls}-${this.className}`]: !this.disable,
          [`${prefixCls}-${this.className}-active`]: this.activeOk && !this.skin,
          [`${prefixCls}-${this.className}-${this.skin}`]: !!this.skin,
          [`${prefixCls}-${this.className}-${this.skin}-active`]: this.activeOk && !!this.skin,
          [`${this.addName}-tag`]: !!this.addName,
        },
      ];
    },
  },
  methods: {
    activeClass() {
      if (this.disable) {
        return;
      }
      this.$parent.getIndex(this.index);
      this.$emit('tag', this.index, this.activeOk);
      this.$emit('click', this.index, this.activeOk);
      this.click(this.index, this.activeOk);
    },
  },
  watch: {
    active(val, oldVal) {
      if (val !== oldVal) {
        this.activeOk = this.active;
      }
    },
  },
};
</script>
