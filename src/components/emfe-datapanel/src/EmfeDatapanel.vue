<template>
  <div class="emfe-datapanel" :class="datapanelName">
    <div class="emfe-datapanel-box">
      <div class="emfe-datapanel-title">
        <span>{{title}}</span>
        <emfe-tooltip :styles="styles" placement="right-end">
          <emfe-icon v-if="iconFlg" type="hint" slot="render" className="emfe-datapanel-mark"></emfe-icon>
          <div slot="tip">
            <slot name="tipText"></slot>
          </div>
        </emfe-tooltip>
      </div>
      <div class="emfe-datapanel-main">
        <span class="emfe-datapanel-main-content">{{contentText}}</span>
        <span class="emfe-datapanel-main-company" v-if="companyText">{{companyText}}</span>
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
      type: String,
      default: '',
    },
    companyText: {
      type: String,
      default: '',
    },
    iconFlg: {
      type: [String, Boolean],
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
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
  },
};
</script>
