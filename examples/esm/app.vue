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
          icon: 'erweima',
          url: 'http://baidu.com',
        },
        {
          title: '运动组件',
          icon: 'erweima',
          routers: {
            path: '/transition',
          },
        },
        {
          title: '提示组件',
          icon: 'erweima',
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
              icon: 'erweima',
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
              icon: 'erweima',
              routers: {
                path: '/tips/hottip',
              },
            },
          ],
        },
        {
          title: '排版',
          icon: 'erweima',
          children: [
            {
              title: '表单',
              icon: 'erweima',
              children: [
                {
                  title: '多选',
                  icon: 'checkout',
                  routers: {
                    path: '/styles/checkout',
                  },
                },
                {
                  title: '多选C',
                  icon: 'checkout',
                  routers: {
                    path: '/styles/checkoutc',
                  },
                },
                {
                  title: 'input输入框',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/input',
                  },
                },
                {
                  title: '更多输入框',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/inputmore',
                  },
                },
                {
                  title: '电话组合',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/tel',
                  },
                },
                {
                  title: '电话组合C',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/telc',
                  },
                },
                {
                  title: '图片验证码',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/imgCodepage',
                  },
                },
                {
                  title: '图片验证码C',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/imgCodepageC',
                  },
                },
                {
                  title: '短信验证码',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/smscodeCodepage',
                  },
                },
                {
                  title: '短信验证码C',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/smscodecCodepage',
                  },
                },
                {
                  title: '按钮',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/button',
                  },
                },
                {
                  title: '按钮C',
                  icon: 'hotel',
                  routers: {
                    path: '/styles/buttonc',
                  },
                },
                {
                  title: '多行文本',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/textarea',
                  },
                },
                {
                  title: '单选',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/radio',
                  },
                },
                {
                  title: '单选C',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/radioc',
                  },
                },
              ],
            },
            {
              title: '全局公共',
              icon: 'erweima',
              children: [
                {
                  title: '栅格',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/grid',
                  },
                },
                {
                  title: '头部',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/headerpage',
                  },
                },
                {
                  title: '头部C端',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/headercpage',
                  },
                },
                {
                  title: '底部',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/footerpage',
                  },
                },
                {
                  title: '底部c端',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/footercpage',
                  },
                },
                {
                  title: '导航',
                  icon: 'erweima',
                  routers: {
                    name: 'menu',
                  },
                },
                {
                  title: '二级导航',
                  icon: 'erweima',
                  routers: {
                    name: 'bar',
                  },
                },
                {
                  title: '二级导航c端',
                  icon: 'erweima',
                  routers: {
                    name: 'barc',
                  },
                },
              ],
            },
            {
              title: '面板',
              icon: 'erweima',
              children: [
                {
                  title: '信息面板',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/panel',
                  },
                },
                {
                  title: 'c端个人面板',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/panelc',
                  },
                },
                {
                  title: '数据面板',
                  icon: 'erweima',
                  routers: {
                    path: '/styles/datapanel',
                  },
                },
              ],
            },
            {
              title: '分页',
              icon: 'erweima',
              routers: {
                path: '/styles/pagination',
              },
            },
            {
              title: '分页c端',
              icon: 'erweima',
              routers: {
                path: '/styles/paginationc',
              },
            },
            {
              title: '超链',
              icon: 'erweima',
              routers: {
                path: '/styles/linkpage',
              },
            },
            {
              title: 'table',
              icon: 'erweima',
              routers: {
                path: '/styles/table',
              },
            },
            {
              title: 'tag标签',
              icon: 'erweima',
              routers: {
                path: '/styles/tag',
              },
            },
            {
              title: 'Title标题',
              icon: 'erweima',
              routers: {
                name: 'title',
              },
            },
            {
              title: 'Title标题C端',
              icon: 'erweima',
              routers: {
                name: 'titlec',
              },
            },
            {
              title: 'switch开关',
              icon: 'erweima',
              routers: {
                path: '/styles/switch',
              },
            },
            {
              title: '进度指引',
              icon: 'erweima',
              routers: {
                path: '/styles/steps',
              },
            },
            {
              title: '进度指引C',
              icon: 'erweima',
              routers: {
                path: '/styles/stepsc',
              },
            },
            {
              title: '面包屑',
              icon: 'erweima',
              routers: {
                path: '/styles/crumbs',
              },
            },
            {
              title: '面包屑c',
              icon: 'erweima',
              routers: {
                path: '/styles/crumbsc',
              },
            },
            {
              title: '二级类目',
              icon: 'erweima',
              routers: {
                path: '/styles/edit',
              },
            },
          ],
        },
        {
          title: '功能组件',
          icon: 'erweima',
          children: [
            {
              title: '时间日期',
              icon: 'erweima',
              children: [
                {
                  title: '日期时间',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/datetimepage',
                  },
                },
                {
                  title: '日期时间m',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/datetimempage',
                  },
                },
                {
                  title: '日期',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/datepage',
                  },
                },
                {
                  title: '日期m',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/datempage',
                  },
                },
                {
                  title: '时间',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/timepage',
                  },
                },
                {
                  title: '时间m',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/timempage',
                  },
                },
              ],
            },
            {
              title: '拖拽相关',
              icon: 'erweima',
              children: [
                {
                  title: '拖拽',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/drag',
                  },
                },
                {
                  title: '换位置',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/drop',
                  },
                },
                {
                  title: '选项拖拽',
                  icon: 'erweima',
                  routers: {
                    path: '/functions/opations',
                    query: {
                      main: 4,
                    },
                  },
                },
              ],
            },
            {
              title: '颜色选择器',
              icon: 'erweima',
              routers: {
                path: '/functions/color',
              },
            },
            {
              title: '表单验证',
              icon: 'erweima',
              routers: {
                path: '/functions/formtest',
              },
            },
            {
              title: '复制',
              icon: 'erweima',
              routers: {
                path: '/functions/copy',
              },
            },
            {
              title: '倒计时',
              icon: 'erweima',
              routers: {
                path: '/functions/countdown',
              },
            },
            {
              title: '上传',
              icon: 'erweima',
              routers: {
                path: '/functions/upload',
              },
            },
            {
              title: '数字',
              icon: 'erweima',
              routers: {
                path: '/functions/number',
              },
            },
            {
              title: '弹出框',
              icon: 'erweima',
              routers: {
                path: '/functions/modal',
              },
            },
            {
              title: '弹出框C',
              icon: 'hotel',
              routers: {
                path: '/functions/modalc',
              },
            },
            {
              title: '登录弹出框',
              icon: 'erweima',
              routers: {
                path: '/functions/loginmodal',
              },
            },
            {
              title: '下拉框',
              icon: 'erweima',
              routers: {
                path: '/functions/selectpage',
              }
            },
            {
              title: '滑动',
              icon: 'erweima',
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
  min-height: 2000px;
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
