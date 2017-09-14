<template>
  <div class="icon">
    <h2>EMFE 字体图标</h2>
    <h3>示例</h3>
    <emfe-row gutter="8" v-for="(type, typeIndex) in types" :key="typeIndex">
      <emfe-col span="8" v-for="(iconName, iconIndex) in type" :key="iconIndex">
        <h3>{{ iconName }}</h3>
        <p><emfe-icon :type="iconName" className="icon-page"></emfe-icon></p>
      </emfe-col>
    </emfe-row>
    <h3>API</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>图标的名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "IconPage",
  data() {
    return {
      types: [
        ['tupzhanshi2', 'qr', 'tupianshangchuan'],
        ['publish', 'info', 'suc1'],
        ['xinxi', 'duobeijifen', 'huiyuanzhekou'],
        ['huiyuanzhuanshuri', 'mianyunfei', 'querentouxiang'],
        ['shengrizengsong', 'shenjijiangli', 'shngrijifen'],
        ['tishixinxishouqi', 'tishixinxizhankai', 'vip'],
        ['wanshanxinxjianglijifen', 'wuquanyi', 'xiaofeijianglijifen'],
        ['yaoqingjianglijifen', 'chengshi', 'duoxiangxiala'],
        ['duoxuan', 'fengexian', 'jingtaidit'],
        ['radio', 'riqixuanze', 'shuzi'],
        ['wenbenmiaoshu', 'wenbnekuang', 'xialaxuanxiang'],
        ['qq2', 'shenfenzheng', 'shengri'],
        ['weibo', 'weixin', 'youxiang'],
        ['gongsi2', 'card', 'chengwei2'],
        ['dizhi2', 'email', 'fax'],
        ['sex', 'shengri2', 'shouji2'],
        ['site', 'suozaidi', 'tel'],
        ['touxiang2', 'weibo2', 'weixin3'],
        ['xingming2', 'zhiwei2', 'xiala2'],
        ['mima', 'eventename', 'publish'],
        ['set', 'tip', 'zhiding'],
        ['rili', 'shangchuan', 'shijian'],
        ['tanchuanguanbi', 'tianjiatupian', 'denglu'],
        ['zuoji', 'bumen', 'wangzhi'],
        ['zhiwei', 'start', 'touxiang'],
        ['zanting'],
      ],
    };
  },
}
</script>
<style lang="scss">
.icon {
  text-align: center;
  font-size: 20px;

  &-page {
    color: #19efef;
  }
}
</style>
