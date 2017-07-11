<template>
  <div class="message-page">
    <button class="msg-demo1" @click="demo1">这是个提示1</button>
  </div>
</template>
<script>
export default {
  name: 'MessagePage',
  methods: {
    demo1() {
      this.$EmfeMessage.info({
        content: '这是一个提示',
      });
    },
  },
};
</script>
