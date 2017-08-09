<template>
  <div class="emfe-slide" :class="slideName">
    <div class="emfe-slide-main">
      <div class="emfe-slide-describe">{{slideLeft}}</div>
      <div class="emfe-slide-progress">
        <progress :value="moveValue" :max="maxPercent" class="emfe-slide-progress-bar" ref="slideBar"></progress>
        <emfe-drag className="emfe-slide-progress" limit="true" limitPosition="center" :dragDiyStyle="progress" direction="horizontal" @drag="drag">
          <span class="emfe-slide-progress-drag-left"></span>
          <span class="emfe-slide-progress-drag-right"></span>
        </emfe-drag>
      </div>
      <div class="emfe-slide-describe">{{slideRight}}</div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'emfe-slide';
export default {
  name: 'EmfeSlide',
  data() {
    return {
      progress: '',
      movePercent: '',
      moveValue: '',
      slideBarWidth: 0,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    percent: {
      type: Number,
      default: '',
    },
    maxPercent: {
      type: String,
      default: '',
    },
    slideWidth: String,
    slideLeft: {
      type: String,
      default: '',
    },
    slideRight: {
      type: String,
      default: '',
    },
  },
  computed: {
    slideName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
  },
  mounted() {
    const { slideBar } = this.$refs;
    this.slideBarWidth = this.slideWidth ? this.slideWidth : slideBar.clientWidth;
    const slideBarL = ((this.slideBarWidth / this.maxPercent) * this.percent) - 26;
    this.progress = `left: ${slideBarL}px`;
    this.movePercent = `${this.percent}%`;
    this.moveValue = this.percent;
    this.BarW = this.$children[0].$el.clientWidth;
  },
  methods: {
    drag(ev, left) {
      const iLeft = left + (this.BarW / 2);
      const iScale = iLeft / this.slideBarWidth;
      const moveLeft = Math.round(iScale * this.maxPercent);
      this.moveValue = moveLeft;
      this.movePercent = `${moveLeft}%`;
      this.$emit('change', moveLeft);
    },
  },
};
</script>
