<template>
  <div class="menu-page">
    <emfe-menu className="page" :datas="menus" @update="updateMenu">123</emfe-menu>
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
          icon: 'hotel',
          routers: {
            path: '/transition',
          },
        },
        {
          title: '有二级',
          icon: 'hotel',
          columns: [
            {
              title: '直接跳转',
              routers: {
                path: '/tooltippage',
              },
            },
            {
              title: '有下拉1',
              icon: 'hotel',
              childs: [
                {
                  title: '直接跳转1',
                  routers: {
                    path: '/grid',
                  },
                },
              ],
            },
            {
              title: '有下拉2',
              icon: 'hotel',
              childs: [
                {
                  title: '直接跳转1',
                  routers: {
                    path: '/iconpage',
                  },
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    updateMenu() {
      console.log('update');
    },
  },
};
</script>
<style>
.page-menu {
  position: fixed;
  height: 100%;
}
</style>
