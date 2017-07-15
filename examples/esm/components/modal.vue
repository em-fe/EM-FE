<template>
  <div>
    <button @click="modalFlg.show = true">我是弹出框，点我呀！</button>
    <emfe-modal :modalFlg="modalFlg" @close="closeMask">
        <div slot="modal-main">
          我是内容内容内容内容内容
        </div>
    </emfe-modal>
  </div>
</template>
<script>
export default {
  name: "modalPage",
  data() {
  	return {
  	  modalFlg: {
        show: false,
        width: '800',
        title: '我是标题哦',
        message: '我是内容哦',
      },
  	};
  },
  methods: {
  	closeMask(flg) {
      this.modalFlg.show = flg;
    },
  },
}
</script>