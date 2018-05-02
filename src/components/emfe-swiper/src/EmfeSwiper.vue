<template>
  <div class="emfe-swiper" ref="swiper">
    <div class="emfe-swiper-group" ref="swiperGroup">
      <slot>
      </slot>
    </div>
    <div class="emfe-swiper-dots">
      <span class="emfe-swiper-dots-dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>
<script>
  import addClass from '../../../tools/addClass';
  /* eslint-disable */
  import BScroll from 'better-scroll';

  export default {
    name: 'slider',
    props: {
      loop: {
        type: Boolean,
        default: true,
      },
      autoPlay: {
        type: Boolean,
        default: false,
      },
      interval: {
        type: Number,
        default: 4000,
      },
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0,
      };
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth();
        this.initDots();
        this.initSlider();

        if (this.autoPlay) {
          this.play();
        }
      }, 20);

      window.addEventListener('resize', () => {
        if (!this.slider || !this.slider.enabled) {
          return;
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          if (this.slider.isInTransition) {
            this.onScrollEnd();
          } else {
            if (this.autoPlay) {
              this.play();
            }
          }
          this.refresh();
        }, 60);
      });
    },
    activated() {
      this.slider.enable();
      const pageIndex = this.slider.getCurrentPage().pageX;
      this.slider.goToPage(pageIndex, 0, 0);
      this.currentPageIndex = pageIndex;
      if (this.autoPlay) {
        this.play();
      }
    },
    deactivated() {
      this.slider.disable();
      clearTimeout(this.timer);
    },
    beforeDestroy() {
      this.slider.disable();
      clearTimeout(this.timer);
    },
    methods: {
      refresh() {
        if (this.slider) {
          this.setSliderWidth(true);
          this.slider.refresh();
        }
      },
      setSliderWidth(isResize) {
        this.children = this.$refs.swiperGroup.children;

        let width = 0;
        const sliderWidth = this.$refs.swiper.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          const child = this.children[i];
          addClass(child, 'emfe-swiper-group-item');

          child.style.width = `${sliderWidth}px`;
          width += sliderWidth;
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth;
        }
        this.$refs.swiperGroup.style.width = `${width}px`;
      },
      initSlider() {
        this.slider = new BScroll(this.$refs.swiper, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400,
          },
        });

        this.slider.on('scrollEnd', this.onScrollEnd);

        this.slider.on('touchend', () => {
          if (this.autoPlay) {
            this.play();
          }
        });

        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer);
          }
        });
      },
      onScrollEnd() {
        const pageIndex = this.slider.getCurrentPage().pageX;
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
          this.play();
        }
      },
      initDots() {
        this.dots = new Array(this.children.length);
      },
      play() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.slider.next();
        }, this.interval);
      },
    },
  };
</script>
