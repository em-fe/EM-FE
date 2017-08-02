<template>
  <div id="telpage">
    <h3>普通使用</h3>
    <emfe-tel :datas="data1" v-model="now" placeholder="电话"></emfe-tel>
    当前 {{ now }}
    <br>
    <br>
    <br>
    <br>
    <h3>自定义样式使用</h3>
    <emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话"></emfe-tel>
    当前 {{ now }}
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width: 100%;text-align: center;">
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
          <td>className</td>
          <td>需要修改的样式</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>datas</td>
          <td>前缀数据对象。必须</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>默认提示文字</td>
          <td>String</td>
          <td>请输入</td>
        </tr>
        <tr>
          <td>type</td>
          <td>输入框类型</td>
          <td>String</td>
          <td>number</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>choice</td>
          <td>点击选择前缀</td>
          <td>当前对象</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      now: {
        name: '中国',
        tel: 13800138000,
        prefix: '+86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      data1: [
        {
          name: '中国',
          tel: 1123444555,
          prefix: '+86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: 8888888888,
          prefix: '+852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        },
      ],
    };
  },
};
</script>
<style>
.demo-tel {
  width: 392px;
}
</style>
