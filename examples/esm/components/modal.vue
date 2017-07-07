<template>
  <div>
    <button @click="modalFlg = true">我是弹出框，点我呀！</button>
    <emfe-modal :show="modalFlg"></emfe-modal>
  </div>
</template>
<script>
export default {
  name: "modalPage",
  data() {
  	return {
  	  modalFlg:false,
  	};
  },
  methods: {
  	
  },
  created() {
  	this.$root.eventHub.$on('close', ()=>{
  		this.modalFlg = false;
  	})
  },
}
</script>