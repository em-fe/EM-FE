<template>
  <div class="barpage">
    <emfe-bar :datas="bars" :title="title"></emfe-bar>
  </div>
</template>
<script>
export default {
  name: "barpage",
  data() {
    return {
      title: '例子',
      bars: [
        {
          title: '提示组件',
          icon: 'hotel',
          children: [
            {
              title: '文字提示',
              routers: {
                path: '/tips/tooltippage',
              },
            },
            {
              title: '全局提示',
              routers: {
                path: '/tips/message',
              },
            },
          ],
        },
        {
          title: '提示组件',
          icon: 'hotel',
          children: [
            {
              title: '文字提示',
              routers: {
                path: '/tips/tooltippage',
              },
            },
            {
              title: '全局提示',
              routers: {
                path: '/tips/message',
              },
            },
          ],
        },
      ],
    }
  }
}
</script>
<style>
</style>
