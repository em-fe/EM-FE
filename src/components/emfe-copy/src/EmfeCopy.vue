<template>
  <div class="emfe-copy" :class="copyName">
    <span :class="textName">{{text}}：</span>
    <input class="emfe-copy-input" :class="valueName" :value="copyValue" ref="copyInput" :readonly="read"/>
    <a class="emfe-copy-btn" :class="btnName" @click="copyHandle" :title="title">
      <emfe-icon type="fuzhi" class="emfe-copy-btn-icon" :class="iconName" @icon-click="copyHandle"></emfe-icon>
    </a>
  </div>
</template>
<script>
export default {
  name: 'EmfeCopy',
  props: {
    className: String,
    copyValue: String,
    read: {
      type: [String, Boolean],
      default: true,
    },
    text: {
      type: String,
      default: '表单页面',
    },
    title: {
      type: String,
      default: '复制网址',
    },
  },
  computed: {
    copyName() {
      return this.className ? `${this.className}-copy` : '';
    },
    textName() {
      return this.className ? `${this.className}-text` : '';
    },
    valueName() {
      return this.className ? `${this.className}-value` : '';
    },
    btnName() {
      return this.className ? `${this.className}-btn` : '';
    },
    iconName() {
      return this.className ? `${this.className}-icon` : '';
    },
  },
  methods: {
    copyHandle() {
      const { copyInput } = this.$refs;
      copyInput.select();
      try {
        if (document.execCommand('copy', false, null)) {
          document.execCommand('Copy');
          this.$emit('copySuccess');
          this.$emit('success');
        } else {
          this.$emit('copyFail');
          this.$emit('error');
        }
      } catch (err) {
        this.$emit('copyFail');
        this.$emit('error');
      }
      copyInput.blur();
    },
  },
};
</script>
