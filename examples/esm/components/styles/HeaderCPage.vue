<template>
  <div class="header-page">
    <p class="red">{{ status }}</p>
    <br>
    <br>
    <br>
    <emfe-header-c user="小北互动" :integral="integral" @logout="logout" :orderRouter="{url: 'http://baidu.com'}" :followRouter="{url: 'http://qq.com'}" :loginFlg="true"></emfe-header-c>
    <br>
    <br>
    <br>
    <br>
    <p class="red">{{ status2 }}</p>
    <br>
    <br>
    <br>
    <br>
    <br><emfe-header-c @logout="logout" :integral="integral2" :orderRouter="{url: 'http://baidu.com'}" :followRouter="{url: 'http://qq.com'}" :loginFlg="false"></emfe-header-c>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width:100%;text-align:center;">
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
          <td>loginFlg</td>
          <td>是否登录，登录为true，未登录为false(必须传)</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>user</td>
          <td>若已登录，传入用户名(必须传)</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>integral</td>
          <td>integral.state判断是否显示积分 1为显示积分 0为不显示积分，integral.value是积分的值</td>
          <td>Object</td>
          <td>必传值</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <h3>注册的方法</h3>
    <br>
    <table style="width:100%;text-align:center;">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>logout</td>
          <td>点击"退出"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>login</td>
          <td>点击"登录"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>orderClick</td>
          <td>点击"我的订单"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>followClick</td>
          <td>点击"购物车"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: '登录中',
      status2: '未登录',
      integral: {
        state: 1,
        value: 999,
      },
      integral2: {
        state: 0,
        value: 999,
      },
    };
  },
  methods: {
    logout() {
      this.status = '退出成功';
    },
  },
};
</script>
<style>
.red {
  color: #f00;
}
</style>
