<template>
  <div class="header-page">
    <emfe-header logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAsCAMAAABBhepOAAAC+lBMVEUAAADxjAPwhQbwgwYAn+jvgQfylQDvfwftcwvxigTvgAfwhgXwhQbxigTvgQfylgDvfgfxiwPykAHtcwvykwHudgrxigPwhwXwggbykQHwiATvewnxjgLwhQXykALvegnvewnxiwPtcgzwiATudwrvgAfucwvudQvudgrykgHueQnvegnvewnwiATtcwvwhwTykwHykwHxiwPvfAjudwrwggbudQ0An+jucwzvfgjwhQXucgvylADxjAPxjwLudQvykQEAn+jwkAPylADtcQzykwHtcgzykgHvhAftcgzwiATwhQXylADwgQfudwrwhwTylQDvfwfvfQjtdQvvgAfvfQj9lgAAn+gAn+gAn+jxjwIAn+gAn+gznbcAn+jtcgwAoP8znbcAn+gAn+jtbg3tbg0An+gAn+gtsMgRiqMAn+j////ylgAAn+jxjQLwhgTufAjsbA7vgQbwiwTtdQvylADtcgzxiQTznADudwrxkALueQnvfggAm+UAo+wAbbnvhAbwhQXrZA8Bcb0AcLztbw3sag7tdgvykgL9lgEApu/saQ//qAIAU67pVAAAld8AXrT+oAAAkOYDabYwbpgAnv4dFVg6Hj/1bgn8awP/dQD0+v359/YAiuIBa9BfWYf6zIUdEU4qFULk8fm94vb99ezh3eEBkt4BitwAeM6dkaWIZXY7PWpoOkJMKT/xfy7YihMEsP4AqPVOuu4sr+3q6OrTztXHvscDY7yOgZojR38yLGWoaSy2XizzZAfsZQP/cAH3UwDX7fmk3PeAy/MAmO6Yy+WszOQAeOJ1sNphodMYfMK5sLwznbf50Latoa/5xqKAco75uYwrWIPyuGLylkhaKTp/Tje+fSL2nQD+iwD9gQDsbgBryfLT4u8QoukAluCMvN/45drJxM793sMsg8Mwdp5MR3knImNgQ2KWTzWXYjJWEynSbh0wAh3ymhPyjAJ44/+ywM8/l85NjcwAO7r//7dql7Qzd6lNIEb3i0TzoSHeahjnRAABW0+YAAAAa3RSTlMALgQR8wmmHE81DCIX7Qf04N+KL+KXhl/ssq+kZ0s8OfGeZlIo0L+0hIJvSEP019bLwr2033n27ezFgXt6cVhWQx/46+TVqkv6zMmpn5aQjl78uV5b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" user="小北互动" @logout="logout"></emfe-header>
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
