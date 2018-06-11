<template>
  <div ref="scrollView" :style="wrapperStyle" :class="wrapperClass">
    <div ref="scroller" :style="scrollerStyle" :class="scrollerClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import IScroll from 'iscroll';

export default {
  name: 'EmfeIscroll',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    wrapperClass: {
      type: [Array, Object],
      default: () => {},
    },
    wrapperStyle: {
      type: Object,
      default: () => {},
    },
    scrollerClass: {
      type: [Array, Object],
      default: () => {},
    },
    scrollerStyle: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    registPullEvents() {
      const { iscroll } = this;
      iscroll.on('scrollEnd', (e) => {
        if (iscroll.y <= iscroll.maxScrollY) {
          this.$emit('pullUp', e, iscroll);
        } else if (iscroll.y >= 0) {
          this.$emit('pullDown', e, iscroll);
        }
      });
    },
    zoom() {
      this.$nextTick(() => this.iscroll.zoom.apply(this.iscroll, arguments));
    },
    goToPage() {
      this.$nextTick(() => this.iscroll.goToPage.apply(this.iscroll, arguments));
    },
    next() {
      this.$nextTick(() => this.iscroll.next.apply(this.iscroll, arguments));
    },
    prev() {
      this.$nextTick(() => this.iscroll.prev.apply(this.iscroll, arguments));
    },
    scrollToElement() {
      this.$nextTick(() => this.iscroll.scrollToElement.apply(this.iscroll, arguments));
    },
    scrollBy() {
      this.$nextTick(() => this.iscroll.scrollBy.apply(this.iscroll, arguments));
    },
    scrollTo() {
      this.$nextTick(() => this.iscroll.scrollTo.apply(this.iscroll, arguments));
    },
    refresh() {
      this.$nextTick(() => this.iscroll.refresh.apply(this.iscroll, arguments));
    },
    disable() {
      this.$nextTick(() => this.iscroll.disable.apply(this.iscroll, arguments));
    },
    enable() {
      this.$nextTick(() => this.iscroll.enable.apply(this.iscroll, arguments));
    },
  },
  beforeDestroy() {
    this.iscroll && this.iscroll.destroy();
    this.iscroll = null;
  },
  mounted() {
    const events = [
      'beforeScrollStart',
      'scrollCancel',
      'scrollStart',
      'scrollEnd',
      'scroll',
      'flick',
      'zoomStart',
      'zoomEnd',
    ];
    setTimeout(() => {
      let key;
      let value;
      const attributes = this.$refs.scrollView.attributes;
      this.$refs.scrollView.scrollTop = 0;
      for (key in attributes) {
        value = attributes[key];
        if (value instanceof global.Attr && value.name.indexOf('data-v-') > -1) {
          this.$refs.scroller.attributes.setNamedItem(document.createAttribute(value.name));
        }
      }
      try {
        global.location.hash && this.iscroll.scrollToElement(global.location.hash, 0);
      } catch (e) {
      }
    }, 0);
    this.$nextTick(() => {
      this.iscroll = new IScroll(this.$refs.scrollView, this.options);
      events.forEach((event) => {
        this.iscroll.on(event, () => this.$emit(event, this.iscroll));
      });
      this.registPullEvents();
    });
  },
};
/* eslint-disable */
</script>
