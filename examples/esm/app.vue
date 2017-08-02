<template>
  <div :class="menuClass">
    <h1>活动时 EMFE 测试页面</h1>
    <emfe-menu className="main" :datas="menus" @short="shortMenu" @column="columnMenu" :fullpath="fullpath"></emfe-menu>
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
          },
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
            {
              title: '图标',
              icon: 'hotel',
              children: [
                {
                  title: '字体图标',
                  routers: {
                    path: '/tips/iconpage',
                  },
                },
              ],
            },
            {
              title: '展开收起',
              icon: 'hotel',
              routers: {
                path: '/tips/hottip',
              },
            },
          ],
        },
        {
          title: '排版',
          icon: 'hotel',
          children: [
            {
              title: '表单',
              icon: 'hotel',
              children: [
                {
                  title: '多选',
                  icon: 'checkout',
                  routers: {
                    path: '/styles/checkout',
                  },
                },
                {
                  title: 'input输入框',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/input',
                  },
                },
                {
                  title: '电话组合',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/tel',
                  },
                },
                {
                  title: '图片验证码',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/imgCodepage',
                  },
                },
                {
                  title: '短信验证码',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/smscodeCodepage',
                  },
                },
                {
                  title: '按钮',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/button',
                  },
                },
                {
                  title: '多行文本',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/textarea',
                  },
                },
                {
                  title: 'radio单选框',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/radio',
                  },
                },
              ],
            },
            {
              title: '全局公共',
              icon: 'hotel',
              children: [
                {
                  title: '栅格',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/grid',
                  },
                },
                {
                  title: '头部',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/headerpage',
                  },
                },
                {
                  title: '底部',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/footerpage',
                  },
                },
                {
                  title: '导航',
                  icon: 'hotel',
                  routers: {
                    name: 'menu',
                  },
                },
                {
                  title: '二级导航',
                  icon: 'hotel',
                  routers: {
                    name: 'bar',
                  },
                },
              ],
            },
            {
              title: '面板',
              icon: 'hotel',
              children: [
                {
                  title: '信息面板',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/panel',
                  },
                },
                {
                  title: '数据面板',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/datapanel',
                  },
                },
              ],
            },
            {
              title: '分页',
              icon: 'hotel',
              routers: {
                path: '/styles/pagination',
              },
            },
            {
              title: '超链',
              icon: 'hotel',
              routers: {
                path: '/styles/linkpage',
              },
            },
            {
              title: 'table',
              icon: 'hotel',
              routers: {
                path: '/styles/table',
              },
            },
            {
              title: 'tag标签',
              icon: 'hotel',
              routers: {
                path: '/styles/tag',
              },
            },
            {
              title: 'Title标题',
              icon: 'hotel',
              routers: {
                name: 'title',
              },
            },
            {
              title: 'switch开关',
              icon: 'hotel',
              routers: {
                path: '/styles/switch',
              },
            },
            {
              title: '面包屑',
              icon: 'hotel',
              routers: {
                path: '/styles/crumbs',
              },
            },
            {
              title: '二级类目',
              icon: 'hotel',
              routers: {
                path: '/styles/edit',
              },
            },
          ],
        },
        {
          title: '功能组件',
          icon: 'hotel',
          children: [
            {
              title: '时间日期',
              icon: 'hotel',
              children: [
                {
                  title: '日期时间',
                  icon: 'hotel',
                  routers: {
                    path: '/functions/datetimepage',
                  },
                },
                {
                  title: '日期',
                  icon: 'hotel',
                  routers: {
                    path: '/functions/datepage',
                  },
                },
                {
                  title: '时间',
                  icon: 'hotel',
                  routers: {
                    path: '/functions/timepage',
                  },
                },
              ],
            },
            {
              title: '拖拽相关',
              icon: 'hotel',
              children: [
                {
                  title: '拖拽',
                  icon: 'hotel',
                  routers: {
                    path: '/functions/drag',
                  },
                },
                // {
                //   title: '换位置',
                //   icon: 'hotel',
                //   routers: {
                //     path: '/functions/drop',
                //   },
                // },
              ],
            },
            {
              title: '颜色选择器',
              icon: 'hotel',
              routers: {
                path: '/functions/color',
              },
            },
            {
              title: '复制',
              icon: 'hotel',
              routers: {
                path: '/functions/copy',
              },
            },
            {
              title: '上传',
              icon: 'hotel',
              routers: {
                path: '/functions/upload',
              },
            },
            {
              title: '数字',
              icon: 'hotel',
              routers: {
                path: '/functions/number',
              },
            },
            {
              title: '弹出框',
              icon: 'hotel',
              routers: {
                path: '/functions/modal',
              },
            },
            {
              title: '下拉框',
              icon: 'hotel',
              routers: {
                path: '/functions/selectpage',
              }
            },
            {
              title: 'drop',
              icon: 'hotel',
              routers: {
                path: '/functions/drop',
                query: {
                  main: 4,
                },
              },
            },
            {
              title: '滑动',
              icon: 'hotel',
              routers: {
                path: '/functions/slide',
                query: {
                  main: 4,
                },
              },
            },
          ],
        },
      ],
      menuClass: 'main-full',
      fullpath: localStorage.path,
    }
  },
  methods: {
    shortMenu(menuShort, childrenStatus) {
      if (menuShort) {
        if (childrenStatus) {
          this.menuClass = 'main-small-column';
        } else {
          this.menuClass = 'main-small';
        }
      } else {
        if (childrenStatus) {
          this.menuClass = 'main-full-column';
        } else {
          this.menuClass = 'main-full';
        }
      }
    },
    columnMenu(menuShort, childrenStatus) {
      if (menuShort) {
        this.menuClass = 'main-small-column';
      } else {
        this.menuClass = 'main-full-column';
      }
    },
  },
  watch: {
    $route(val) {
      this.fullpath = val.path;
      localStorage.path = val.path;
    },
  },
};
</script>
<style lang="scss">
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
