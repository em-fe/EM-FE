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
        <div class="emfe-modal-btn emfe-modal-btn-cancel" @click="cancel">取消</div>
        <div class="emfe-modal-btn emfe-modal-btn-ok" @click="ok">确定</div>
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
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
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