<template>
  <div id="colorpage">
    选中的颜色是：{{ color }}
    <emfe-color :value="color">
      <button>打开</button>
    </emfe-color>
  </div>
</template>
<script>
export default {
  name: 'colorpage',
  data() {
    return {
      color: '00ff00',
    };
  },
};
</script>
