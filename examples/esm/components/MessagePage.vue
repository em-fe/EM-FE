<template>
  <div class="message-page">
    <button class="msg-demo1" @click="demo1">info</button>
    <br>
    <br>
    <br>
    <button class="msg-demo2" @click="demo2">success</button>
    <br>
    <br>
    <br>
    <button class="msg-demo3" @click="demo3">warning</button>
    <br>
    <br>
    <br>
    <button class="msg-demo4" @click="demo4">error</button>
  </div>
</template>
<script>
export default {
  name: 'MessagePage',
  methods: {
    demo1() {
      this.$EmfeMessage.info({
        content: '这是一个info提示',
      });
    },
    demo2() {
      this.$EmfeMessage.success({
        content: '这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示,这是一个success提示',
      });
    },
    demo3() {
      this.$EmfeMessage.warning({
        content: '这是一个warning提示',
      });
    },
    demo4() {
      this.$EmfeMessage.error({
        content: '这是一个error提示',
      });
    },
  },
};
</script>
