<template>
  <div class="emfe-modal" v-if="modalFlg.show">
		<div :class="[prefixCls + '-mask']"></div>
  	<div :class="[prefixCls + '-wrap']" :style="{width: `${modalFlg.width}px`}">
  		<div :class="[prefixCls + '-icon']">
  			<div :class="[prefixCls + '-icon-close']" @click="closeModal()">X</div>
  		</div>
  		<div :class="[prefixCls + '-header']">
  			<div :class="[prefixCls + '-header-inner']">{{ modalFlg.title }}</div>
  		</div>
  		<div :class="[prefixCls + '-main']">
  			<slot name="modal-main">
  				<!-- <div :class="[prefixCls + '-main-content']">{{modalFlg.message}}</div> -->
  			</slot>
  		</div>
  		<div :class="[prefixCls + '-footer']">
				<div :class="[prefixCls + '-cancel']" @click="cancel()">取消</div>
				<div :class="[prefixCls + '-ok']" @click="ok()">确定</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'EmfeModal',
  props: {
    modalFlg: Object,
  },
  methods: {
    cancel() {
      console.log('你点击了取消');
      this.$emit('close', false);
    },
    ok() {
      console.log('你点击了确定');
      this.$emit('close', false);
    },
    closeModal() {
      console.log('你点击了关闭');
      this.$emit('close', false);
    },
  },
  created() {
    console.log(this.modalFlg);
  },
  computed: {

  },
  data() {
    return {
      prefixCls: 'emfe-modal',
    };
  },
};
</script>