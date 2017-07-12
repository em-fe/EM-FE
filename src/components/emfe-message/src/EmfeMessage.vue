<template>
  <div class="emfe-message-box">
    <div class="emfe-message" v-for="(notice, noticeIndex) in notices" :key="noticeIndex">
      <p class="emfe-message-text" v-once>{{ notice.content }}</p>
    </div>
  </div>
</template>
<script>
let seed = 0;
const now = Date.now();

function getUuid() {
  return `ivuNotification_${now}_${seed++}`;
}

export default {
  name: 'emfe-message',
  data() {
    return {
      notices: [],
    };
  },
  methods: {
    add(notice) {
      const name = notice.name || getUuid();
      // 继承一下参数
      const newNotice = Object.assign({
        styles: {
          top: 8,
        },
        content: '',
        name,
        type: 'info',
        autoClose: false,
      }, notice);
      this.notices.push(newNotice);
      console.log('111newNotice', notice, newNotice);
      // setTimeout(this.close.bind(this, name), 1000);
    },
    close(name) {
      for (let i = 0, iLen = this.notices.length; i < iLen; i++) {
        if (this.notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>
