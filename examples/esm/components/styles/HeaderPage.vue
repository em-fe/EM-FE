<template>
  <div class="header-page">
    <emfe-header user="小北互动" @logout="logout"></emfe-header>
    <br>
    <br>
    <br>
    <br>
    <p class="red">{{ status }}</p>
    <br>
    <br>
    <br>
    <br>
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
          <td>logo</td>
          <td>logo。必须传</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>user</td>
          <td>用户名称。必须传</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>showMask</td>
          <td>是展示弹窗还是 emit出方法</td>
          <td>Boolean</td>
          <td>default true</td>
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
        <tr>
          <td>goIndex</td>
          <td>点击'控制台首页'触发。并且是阻止冒泡。跳转到控制台首页</td>
          <td>-</td>
        </tr>
        <tr>
          <td>goAccount</td>
          <td>点击用户名触发。并且是阻止冒泡。跳转到账户管理页面</td>
          <td>-</td>
        </tr>
        <tr>
          <td>goEvente</td>
          <td>点击弹窗的演唱赛事触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
        <tr>
          <td>goLight</td>
          <td>点击弹窗的演唱轻活动。并且是阻止冒泡。</td>
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
.header-page .emfe-header{
  width: 50%;
}
.red {
  color: #f00;
}
</style>
