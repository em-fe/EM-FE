<template>
  <div class="link-page">
    <h2>EMFE 超链</h2>
    <h3>示例</h3>
    <emfe-link :routers="{}">1这个是超链</emfe-link>
    <emfe-link :routers="{url: 'http://baidu.com'}">这个是超链2</emfe-link>
  </div>
</template>
<script>
export default {
  name: 'Linkpage',
};
</script>
