<template>
  <div class="header-page">

    <emfe-header-c-new user="小北互动" @logout="logout" :orderRouter="{url: 'http://baidu.com'}" :followRouter="{url:
    'http://qq.com'}" :loginFlg="true"></emfe-header-c-new>

    <br>
    <br>
    <br>
    <br>
    <br><emfe-header-c-new :imgLogo="imgLogo" @logout="logout" :orderRouter="{url: 'http://baidu.com'}"
                       :followRouter="{url: 'http://qq.com'}" :loginFlg="false"></emfe-header-c-new>
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
          <td>imgLogo</td>
          <td>imgLogo是主办方logo  默认活动易logo</td>
          <td>String</td>
          <td>-</td>
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
          <td>myRegis</td>
          <td>点击"我的报名"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>release</td>
          <td>点击"免费发布活动"触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>organizer</td>
          <td>点击"主办方管理"触发。并且是阻止冒泡。</td>
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
      imgLogo: 'data:image/jpeg;base64,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',
      integral: {
        state: 1,
        value: 999,
      },
      integral2: {
        state: 0,
        value: 999,
      },
      // shoppingNumber: 100,
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
