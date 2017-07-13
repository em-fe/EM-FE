<template>
  <transition-group tag="div" class="emfe-message-box" name="fade">
    <div class="emfe-message-main" :class="[`emfe-message-${notice.type}`]" v-for="(notice, noticeIndex) in notices" :key="noticeIndex" :style="notice.style">
      <p class="emfe-message-text">{{ notice.content }}</p>
    </div>
  </transition-group>
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
        content: '',
        name,
        type: 'info',
        style: {},
        close() {},
      }, notice);
      // 添加到队列中
      this.notices.push(newNotice);
      // 自动关闭
      setTimeout(this.close.bind(this, name), notice.delayTime);
    },
    close(name) {
      this.notices.every((notice, noticeIndex) => {
        this.notices.splice(noticeIndex, 1);
        notice.close();
        return notice.name !== name;
      });
    },
  },
};
</script>
