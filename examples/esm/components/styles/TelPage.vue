<template>
  <div id="telpage">
    <h3>普通使用</h3>
    <emfe-tel :datas="data1" v-model="now" placeholder="电话" @blur='blur' @focus='focus'></emfe-tel>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel :datas="data1" v-model="now" placeholder="电话"&gt;&lt;/emfe-tel&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>自定义样式使用</h3>
    <emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话"></emfe-tel>
    <br>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话"&gt;&lt;/emfe-tel&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>错误样式使用</h3>
    <emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话" :errOk="true">
      <div slot="error">请输入证件号</div>
    </emfe-tel>
    <br>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话" :errOk="true"&gt;&lt;/emfe-tel&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>禁止样式使用</h3>
    <emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话" :disabled="true"></emfe-tel>
    <br>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel className="demo" :datas="data1" v-model="now" placeholder="电话" :disabled="true"&gt;&lt;/emfe-tel&gt;
    </pre>
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
        <tr>
          <td>disabled</td>
          <td>是否禁止使用</td>
          <td>Boolean</td>
          <td>false</td>
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
          <td>change(choice 依然能用)</td>
          <td>点击选择前缀</td>
          <td>当前对象</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>失去焦点</td>
          <td>-</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>获取焦点</td>
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
      now: {
        name: '中国',
        tel: 13800138000,
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      data1: [
        {
          name: '中国',
          tel: 1123444555,
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: 8888888888,
          prefix: '852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        },
      ],
    };
  },
  methods: {
    blur() {
      console.log('失去焦点');
    },
    focus() {
      console.log('获取焦点');
    },
  },
};
</script>
<style lang="scss">
.demo-tel {
  width: 392px;
  height: 42px;

  &-prefix {
    height: 40px;

    &::before {
      bottom: 17px;
    }

    &-text {
      line-height: 42px;
    }
  }

  &-input {
    height: 40px;
  }
}
</style>
