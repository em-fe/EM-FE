<template>
  <div class="menu-page">
    <emfe-menu :data="menus">123</emfe-menu>
  </div>
</template>
<script>
export default {
  name: "MenuPage",
  data() {
    return {
      menus: [
        {
          title: '直接跳转',
          icon: 'ihotel-management',
          routers: 'aaa',
        },
        {
          title: '有二级',
          icon: 'ihotel-management',
          columns: [
            {
              title: '直接跳转',
              icon: 'ihotel-management',
              routers: 'aaa',
            },
            {
              title: '有下拉',
              icon: 'ihotel-management',
              child: [
                {
                  title: '直接跳转1',
                  icon: 'ihotel-management',
                  routers: 'aaa',
                },
              ],
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
