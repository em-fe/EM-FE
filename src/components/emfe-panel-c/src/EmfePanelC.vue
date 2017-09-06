<template>
  <div class="emfe-panel-c">
    <div class="emfe-panel-c-logobox">
      <emfe-upload className="emfe-panel-c" :action="uploadAction" @success="uploadSuccess"></emfe-upload>
      <!-- <img  class="emfe-panel-c-logobox-logo" src="https://2img.evente.cn/8b/af/19/a084cd140d003e01c46d449897.jpg?imageView2/2/w/310/h/440/q/80"> -->
    </div>
    <div class="emfe-panel-c-infobox">
      <div class="emfe-panel-c-infobox-about">
        <span class="emfe-panel-c-infobox-about-text">早上好，李根</span>
        <span class="emfe-panel-c-infobox-about-text">
        <img class="emfe-panel-c-infobox-about-img" :src="memberlogo">黄金会员</span>
        <span class="emfe-panel-c-infobox-about-text">成长值<em class="emfe-panel-c-infobox-about-text-em">{{ growth }}</em></span>
        <span class="emfe-panel-c-infobox-about-text">积分<em class="emfe-panel-c-infobox-about-text-em">{{ integral }}</em></span>
        <span class="emfe-panel-c-infobox-about-text">余额<em class="emfe-panel-c-infobox-about-text-em">￥{{ balance }}</em></span>
      </div>
      <div class="emfe-panel-c-infobox-info">
        <span class="emfe-panel-c-infobox-about-text">账号：+8618618468079</span>
        <emfe-link className="emfe-panel-c" :routers="telRouters">
          <emfe-icon type="hint" className="emfe-panel-c"></emfe-icon>
        </emfe-link>
        <emfe-link className="emfe-panel-c" :routers="infoRouters">
          <emfe-icon type="hint" className="emfe-panel-c"></emfe-icon>
        </emfe-link>
        <emfe-link className="emfe-panel-c" :routers="walletRouters">
          <emfe-icon type="hint" className="emfe-panel-c"></emfe-icon>
        </emfe-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfePanelC',
  data() {
    return {
      logo: '',
    };
  },
  props: {
    memberlogo: {
      type: String,
      required: true,
    },
    growth: {
      type: Number,
      required: true,
    },
    integral: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    telRouters: {
      type: Object,
      required: true,
    },
    infoRouters: {
      type: Object,
      required: true,
    },
    walletRouters: {
      type: Object,
      required: true,
    },
    uploadAction: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick(index) {
      this.$emit('icon-click', index);
    },
    uploadSuccess(res) {
      console.log(res);
    },
  },
  computed: {
    classList() {
      return [
        {
          [`${this.className}-panel`]: !!this.className,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-panel-box`]: !!this.className,
        },
      ];
    },
    leftName() {
      return [
        {
          [`${this.className}-panel-box-left`]: !!this.className,
        },
      ];
    },
    rightName() {
      return [
        {
          [`${this.className}-panel-box-right`]: !!this.className,
        },
      ];
    },
  },
};
</script>
