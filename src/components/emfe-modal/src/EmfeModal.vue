<template>
  <div class="emfe-modal" v-if="show">
    <div class="emfe-modal-mask"></div>
    <div class="emfe-modal-wrap" :style="{width: `${width}px`}">
      <div class="emfe-modal-header">
        <div class="emfe-modal-header-inner">{{ title }}</div>
        <div class="emfe-modal-header-close" @click="closeModal">＋</div>
      </div>
      <div class="emfe-modal-main">
        <slot name="modal-main" :class="mainName"></slot>
      </div>
      <div class="emfe-modal-footer">
        <div class="emfe-modal-btn emfe-modal-btn-cancel" @click="cancel">{{btnLeft}}</div>
        <div class="emfe-modal-btn emfe-modal-btn-ok" @click="ok">{{btnRight}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'emfe-modal';
export default {
  name: 'EmfeModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 440,
    },
    title: String,
    className: {
      type: String,
      default: '',
    },
    btnRight: {
      type: String,
      default: '确定',
    },
    btnLeft: {
      type: String,
      default: '取消',
    },
  },
  computed: {
    mainName() {
      return [
        {
          [`${prefixCls}-main-${this.className}`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
      this.$emit('ok');
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>