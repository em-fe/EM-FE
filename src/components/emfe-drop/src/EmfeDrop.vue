<template>
  <emfe-drag :className="className" :dragDiyStyle="posStyle"  @drag="drag"><slot></slot></emfe-drag>
</template>
<script>
export default {
  name: 'EmfeDrop',
  props: {
    className: {
      type: String,
      default: '',
    },
    posStyle: {
      type: String,
      default: '',
    },
  },
  mounted() {
  },
  methods: {
    drag(e, left, top) {
      this.$el.style.zIndex = 99;
      this.disY = e.clientX - this.$el.offsetLeft;
      console.log(this.disY);
      console.log(left);
      console.log(top);
    },
  },
};
</script>
