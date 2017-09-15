<template>
  <div class="emfe-modal-c" v-if="show">
    <div class="emfe-modal-c-mask"></div>
    <div class="emfe-modal-c-wrap" :style="{width: `${width}px`}">
      <div class="emfe-modal-c-header">
        <div class="emfe-modal-c-header-inner">{{ title }}</div>
        <div class="emfe-modal-c-header-close" @click="closeModal">＋</div>
      </div>
      <div class="emfe-modal-c-main" :class="mainName">
        <slot name="modal-main"></slot>
      </div>
      <div class="emfe-modal-c-footer">
        <div class="emfe-modal-c-btn emfe-modal-c-btn-cancel" @click="cancel" v-if="cancelFlg">{{cancelText}}</div>
        <div class="emfe-modal-c-btn emfe-modal-c-btn-ok" @click="ok" v-if="okFlg">{{okText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeModalC',
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
    cancelFlg: {
      type: [String, Boolean],
      default: true,
    },
    okFlg: {
      type: [String, Boolean],
      default: true,
    },
  },
  computed: {
    mainName() {
      return [
        {
          [`${this.className}-modal-main`]: !!this.className,
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