<template>
  <div :class="menuClass">
    <h1>活动时 EMFE 测试页面</h1>
    <emfe-menu className="main" :datas="menus" @short="shortMenu" @column="columnMenu"></emfe-menu>
    <!-- <nav>
      <ul>
        <li><router-link to="/grid">栅格系统( grid )</router-link></li>
        <li><router-link to="/iconpage">字体图标( icon )</router-link></li>
        <li><router-link to="/tooltippage">文字提示( tooltip )</router-link></li>
        <li><router-link to="/transition">运动( transition )</router-link></li>
        <li><router-link to="/menu">导航( menu )</router-link></li>
      </ul>
    </nav> -->
    <div class="warp">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      menus: [
        {
          title: '直接跳转',
          icon: 'hotel',
          routers: {
            path: '/transition',
            query: {
              main: 0,
            },
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
                query: {
                  main: 1,
                },
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
                    query: {
                      column: 1,
                      main: 1,
                    },
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
                    query: {
                      column: 2,
                      main: 1,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
      menuClass: 'main-full',
    }
  },
  methods: {
    shortMenu(menuShort, columnsStatus) {
      if (menuShort) {
        if (columnsStatus) {
          this.menuClass = 'main-small-column';
        } else {
          this.menuClass = 'main-small';
        }
      } else {
        if (columnsStatus) {
          this.menuClass = 'main-full-column';
        } else {
          this.menuClass = 'main-full';
        }
      }
    },
    columnMenu(menuShort, columnsStatus) {
      console.log('column');
      if (menuShort) {
        this.menuClass = 'main-small-column';
      } else {
        this.menuClass = 'main-full-column';
      }
    },
  },
};
</script>
<style lang="scss">
.main-menu {
  position: fixed;
  top: 88px;
  left: 0;
  height: 100%;
}
.main-full {
  .warp {
    margin-left: 170px;
  }
}
.main-full-column {
  .warp {
    margin-left: 290px;
  }
}
.main-small {
  .warp {
    margin-left: 78px;
  }
}
.main-small-column {
  .warp {
    margin-left: 202px;
  }
}
</style>
