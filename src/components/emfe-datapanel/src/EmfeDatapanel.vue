<template>
  <div class="emfe-datapanel" :class="datapanelName">
    <div class="emfe-datapanel-title">
      <span>{{title}}</span>
      <emfe-tooltip placement="right-end">
      <emfe-icon type="hint" slot="render" className="emfe-datapanel-mark"></emfe-icon>
      <div slot="tip">
        <slot name="tipText"></slot>
      </div>
    </emfe-tooltip>
    </div>
    <div class="emfe-datapanel-main">
      {{contentText}}
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
