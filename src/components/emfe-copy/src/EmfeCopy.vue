<template>
  <div class="emfe-copy" :class="copyName">
    <span :class="textName">表单页面：</span>
    <input :class="valueName" :value="copyValue" ref="copyInput" :readonly="read"/>
    <button class="emfe-copy-btn" :class="btnName" @click="copyHandle">
      <emfe-icon type="stick" :class="iconName" @icon-click="copyHandle"></emfe-icon>
    </button>
  </div>
</template>
<script>
export default {
  name: 'EmfeCopy',
  props: {
    className: String,
    copyValue: String,
    read: [String, Boolean],
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
        } else {
          this.$emit('copyFail');
        }
      } catch (err) {
        this.$emit('copyFail');
      }
      copyInput.blur();
    },
  },
};
</script>
