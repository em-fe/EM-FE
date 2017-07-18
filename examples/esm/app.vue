<template>
  <div :class="menuClass">
    <h1>活动时 EMFE 测试页面</h1>
    <emfe-menu className="main" :datas="menus" @short="shortMenu" @column="columnMenu"></emfe-menu>
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
          title: '去百度',
          icon: 'hotel',
          url: 'http://baidu.com',
        },
        {
          title: '运动组件',
          icon: 'hotel',
          routers: {
            path: '/transition',
            query: {
              main: 0,
            },
          },
        },
        {
          title: '提示组件',
          icon: 'hotel',
          columns: [
            {
              title: '文字提示',
              routers: {
                path: '/tooltippage',
                query: {
                  main: 2,
                },
              },
            },
            {
              title: '全局提示',
              routers: {
                path: '/message',
                query: {
                  main: 2,
                },
              },
            },
            {
              title: '图标',
              icon: 'hotel',
              childs: [
                {
                  title: '字体图标',
                  routers: {
                    path: '/iconpage',
                    query: {
                      column: 1,
                      main: 2,
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          title: '排版',
          icon: 'hotel',
          columns: [
            {
              title: '栅格',
              icon: 'hotel',
              routers: {
                path: '/grid',
                query: {
                  main: 3,
                },
              },
            },
            {
              title: 'table',
              icon: 'hotel',
              routers: {
                path: '/table',
                query: {
                  main: 3,
                },
              },
            },
            {
              title: 'input输入框',
              icon: 'hotel',
              routers: {
                path: '/input',
                query: {
                  main: 3,
                },
              },
            },
            {
              title: '导航',
              icon: 'hotel',
              routers: {
                name: 'menu',
                query: {
                  main: 3,
                },
              },
            },
            {
              title: '按钮',
              icon: 'hotel',
              routers: {
                path: '/button',
                query: {
                  main: 3,
                },
              },
            },
            {
              title: 'switch开关',
              icon: 'hotel',
              routers: {
                path: '/switch',
                query: {
                  main: 3,
                },
              },
            },
          ],
        },
        {
          title: '功能组件',
          icon: 'hotel',
          columns: [
            {
              title: '日期时间',
              icon: 'hotel',
              routers: {
                path: 'datetimepage',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '日期',
              icon: 'hotel',
              routers: {
                path: 'datepage',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '时间',
              icon: 'hotel',
              routers: {
                path: 'timepage',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '拖拽',
              icon: 'hotel',
              routers: {
                path: '/drag',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '颜色选择器',
              icon: 'hotel',
              routers: {
                path: '/color',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '复制',
              icon: 'hotel',
              routers: {
                path: '/copy',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '上传',
              icon: 'hotel',
              routers: {
                path: 'upload',
                query: {
                  main: 4,
                },
              },
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
.warp {
  border: 1px solid #dcdcdc;
  height: 2000px;
  padding: 24px;
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
