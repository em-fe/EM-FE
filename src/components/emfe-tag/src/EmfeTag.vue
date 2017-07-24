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
    skin: {
      type: String,
      default: '',
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
  },
  data() {
    return {
      activeOk: this.active,
      className: this.$parent.className,
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
      this.$emit('tag', this.index);
    },
  },
};
</script>
