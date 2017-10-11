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
        ['erweima', 'fabu', 'shezhi'],
        ['tishi', 'zhiding', 'zanting'],
        ['kaishi', 'huodongmingcheng', 'jingtaidit'],
        ['duoxuan', 'danxuan', 'fengexian'],
        ['duoxiangxiala', 'chengshi', 'tupzhanshi'],
        ['tupianshangchuan', 'riqixuanze', 'shuzi'],
        ['wenbenmiaoshu', 'wenbnekuang', 'xialaxuanxiang'],
        ['bumen', 'chuanzhen', 'suozaidi'],
        ['dizhi', 'gongsi', 'chengwei'],
        ['shenfenzheng', 'shouji', 'qq'],
        ['shengri', 'touxiang', 'wangzhi'],
        ['weixin', 'xingming', 'weibo'],
        ['zhiwei', 'xingbie', 'youxiang'],
        ['zuoji', 'dizhi1', 'dianhua'],
        ['bumen1', 'chuanzhen1', 'chengwei1'],
        ['gongsi1', 'shenfenzheng1', 'shouji1'],
        ['suozaidi1', 'shengri1', 'touxiang1'],
        ['weixin1', 'xingming1', 'wangzhi1'],
        ['weibo1', 'youxiang1', 'xingbie1'],
        ['zhiwei1', 'qq1', 'copy'],
        ['shanchu', 'tanchuanguanbi', 'rili'],
        ['tianjiatupian', 'shijian', 'shangchuan'],
        ['gengduoziduan', 'cedaohang', 'cedaohangshouqi'],
        ['biaodantongji', 'cedaohangzhankai', 'caiwubaobiao'],
        ['dingdanzhongxin', 'huiyuanzhongxin', 'gongzhonghaoxinxiguanli'],
        ['shangpinguanli', 'leyuan', 'kefu'],
        ['xiaoshou', 'yanchu', 'zhandianguanli'],
        ['zhanghuguanli', 'zhujiudian', 'yingxiaozhongxin'],
        ['huiyuanzhekou', 'huiyuanzhuanshuri', 'mianyunfei'],
        ['querentouxiang', 'shenjijiangli', 'duobeijifen'],
        ['shengrizengsong', 'tishixinxizhankai', 'shngrijifen'],
        ['tishixinxishouqi', 'vip', 'wanshanxinxjiangliji'],
        ['yaoqingjianglijifen', 'wuquanyi', 'xiaofeijianglijifen'],
        ['xiugaimima', 'qiyexinxi', 'yanzhengshenfen'],
        ['shenfenxinxi', 'zhongzhimima', 'zhucewanc'],
        ['weichat', 'zhanghuxinxi', 'zhanghaodenglu'],
        ['logo', 'fuzhi', 'shuzi1'],
        ['bianji1', 'shouji2', 'gouwuche', 'guanli', 'xiangshang']
      ],
    };
  },
};
</script>
<style lang="scss">
.icon {
  text-align: center;
  font-size: 40px;

  &-page {
    color: #19efef;
  }
}
</style>
