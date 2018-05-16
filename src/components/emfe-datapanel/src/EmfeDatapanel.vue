<template>
  <div class="emfe-datapanel" :class="datapanelName">
    <div class="emfe-datapanel-box">
      <div class="emfe-datapanel-title">
        <span class="emfe-datapanel-title-text">{{title}}</span>
        <emfe-tooltip className="emfe-datapanel" :styles="styles" :theme="theme" :placement="placement" v-if="icon || iconFlg" :type="icon || type">
          <emfe-icon v-if="icon || iconFlg" :type="icon || type" slot="render" className="emfe-datapanel-mark"></emfe-icon>
          <div class="emfe-datapanel-tip" :class="tipName" slot="tip">
            <slot name="tipText"></slot>
          </div>
        </emfe-tooltip>
      </div>
      <div class="emfe-datapanel-main">
        <span class="emfe-datapanel-main-content">{{contentText}}</span>
        <span class="emfe-datapanel-main-company" v-if="companyText">{{companyText}}</span>
        <span class="emfe-datapanel-main-link" @click="link" v-if='linkText'>{{linkText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeDatapanel',
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    contentText: {
      type: [String, Number],
      default: '',
    },
    companyText: {
      type: String,
      default: '',
    },
    iconFlg: {
      type: [String, Boolean],
    },
    icon: String,
    theme: {
      type: String,
      default: 'dark',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    type: {
      type: String,
      default: 'set',
    },
    linkText: {
      type: String,
      default: '',
    },
  },
  computed: {
    datapanelName() {
      return [
        {
          [`${this.className}-datapanel`]: !!this.className,
        },
      ];
    },
    tipName() {
      return [
        {
          [`${this.className}-tip`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    link() {
      this.$emit('link');
    },
  },
};
</script>
