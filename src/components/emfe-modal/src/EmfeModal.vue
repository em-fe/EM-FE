<template>
  <div class="emfe-modal" v-if="show">
    <div class="emfe-modal-mask"></div>
    <div class="emfe-modal-wrap" :style="{width: `${width}px`}">
      <div class="emfe-modal-icon">
        <div class="emfe-modal-icon-close" @click="closeModal">X</div>
      </div>
      <div class="emfe-modal-header">
        <div class="emfe-modal-header-inner">{{ title }}</div>
      </div>
      <div class="emfe-modal-main">
        <slot name="modal-main"></slot>
      </div>
      <div class="emfe-modal-footer">
        <div class="emfe-modal-btn" @click="cancel">取消</div>
        <div class="emfe-modal-btn" @click="ok">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 800,
    },
    title: String,
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