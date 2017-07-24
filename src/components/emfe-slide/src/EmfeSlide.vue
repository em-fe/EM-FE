<template>
  <div class="emfe-slide" :class="slideName">
    <div class="emfe-slide-main">
      <div class="emfe-slide-describe">{{slideLeft}}</div>
      <div class="emfe-slide-progress" >
        <progress :value="moveValue" :max="maxPercent" class="emfe-slide-progress-bar" ref="slideBar"></progress>
        <emfe-drag className="emfe-slide-progress" limit="true" limitPosition="center" :dragDiyStyle="progress" direction="horizontal" @drag="drag">
          <span class="emfe-slide-progress-drag-left"></span>
          <span class="emfe-slide-progress-drag-right"></span>
        </emfe-drag>
      </div>
      <div class="emfe-slide-describe">{{slideRight}}</div>
    </div>
    <div>{{movePercent}}</div>
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
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    percent: {
      type: String,
      default: '',
    },
    maxPercent: {
      type: String,
      default: '',
    },
    slideWidth: {
      type: String,
      default: '476',
    },
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
  created() {
    const slideBarL = ((this.slideWidth / this.maxPercent) * this.percent) - 26;
    this.progress = `left: ${slideBarL}px`;
    this.movePercent = `${this.percent}%`;
    this.moveValue = this.percent;
  },
  mounted() {
    this.BarW = this.$children[0].$el.clientWidth;
  },
  methods: {
    drag(ev, left) {
      const moveLeft = Math.round(((left + (this.BarW / 2)) / this.slideWidth) * this.maxPercent);
      this.moveValue = moveLeft;
      this.progress = `left: ${moveLeft}px`;
      this.movePercent = `${moveLeft}%`;
      console.log(this.movePercent);
    },
  },
};
</script>
