<template>
  <div class="time-m-page">
    <h3>手机时间组件</h3>
    {{ aaa }}
    <emfe-time-m v-model="aaa" exact="minute"></emfe-time-m>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: '',
    };
  },
}
</script>
<style lang="scss" scoped>
</style>
