<template>
  <div class="emfe-modal" v-if="showModal">
    <emfe-transition name="fade">
  		<div :class="maskClass" v-show="showModal"></div>
  	</emfe-transition>
  	<emfe-transition name="fade">
	  	<div :class="wrapClass" v-show="showModal">
	  		<div :class="[prefixCls + '-icon']" v-if="showIcon">
	  			<slot name="icon">
	  				<div :class="[prefixCls + 'icon-close']" @click="closeModal()">X</div>
	  			</slot>
	  		</div>
	  		<div :class="[prefixCls + '-header']" v-if="showHead">
	  			<slot name="header">
	  				<div :class="[prefixCls + '-header-inner']">{{ title }}</div>
	  			</slot>
	  		</div>
	  		<div :class="[prefixCls + '-main']">
	  			<slot name="main">
	  				<div :class="[prefixCls + '-main-content']">{{message}}</div>
	  			</slot>
	  		</div>
	  		<div :class="[prefixCls + '-footer']" v-if="showFoot">
	  			<slot name="footer">
	  				<div :class="[prefixCls + '-cancel']" v-if="showCancel">取消</div>
	  				<div :class="[prefixCls + '-ok']" v-if="showOk">确定</div>
	  			</slot>
	  		</div>
	  	</div>
  	</emfe-transition>
  	<!-- <span class="close" @click="closeModal()">X</span> -->
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
    showHead: {
      type: Boolean,
      default: true,
    },
    showFoot: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showOk: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '我是标题',
    },
    message: {
      type: String,
      default: '我是内容',
    },
  },
  methods: {
    closeModal() {
      this.$root.eventHub.$emit('close');
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    wrapClass() {
      return `${prefixCls}-wrap`;
    },
    maskClass() {
      return `${prefixCls}-mask`;
    },
  },
  data() {
    return {
      prefixCls: 'emfe-modal',
    };
  },
};
</script>