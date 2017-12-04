<template>
  <div id="telpage">
    <h3>普通使用</h3>
    <emfe-tel-c :telDatas="data1" v-model="now" placeholder="电话" @blur='blur'></emfe-tel-c>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel-c :telDatas="data1" v-model="now" placeholder="电话"&gt;&lt;/emfe-tel-c&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <emfe-tel-c :errOk="false" :idDatas="data2" v-model="card" placeholder="请输入证件号" @blur='blur'>
    </emfe-tel-c>
    {{card}}
    <emfe-tel-c :errOk="true" :idDatas="data2" v-model="card" placeholder="请输入证件号" @blur='blur'>
      <div slot="error">请输入证件号</div>
    </emfe-tel-c>
    <br>
    <br>
    <br>
    <br>
    <h3>自定义样式使用</h3>
    <emfe-tel-c className="demo" :telDatas="data1" v-model="now" placeholder="电话"></emfe-tel-c>
    当前 {{ now }}
    <pre>
      &lt;emfe-tel-c className="demo" :telDatas="data1" v-model="now" placeholder="电话"&gt;&lt;/emfe-tel-c&gt;
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
          <td>errOk</td>
          <td>错误提示</td>
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
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      now: {
        type: 1,
        name: '中国',
        tel: 13800138000,
        prefix: '86',
      },
      data1: [
        {
          type: 1,
          name: '中国',
          tel: 1123444555,
          prefix: '86',
        },
        {
          type: 1,
          name: '香港',
          tel: 8888888888,
          prefix: '852',
        },
      ],
      card: {
        type: 2,
        text: '选择类型',
        card: '',
      },
      data2: [
        {
          type: 2,
          text: '身份证',
          card: '',
        },
        {
          type: 2,
          text: '军人证',
          card: '',
        }
      ],
    };
  },
  methods: {
    blur() {
      console.log('失去焦点');
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
