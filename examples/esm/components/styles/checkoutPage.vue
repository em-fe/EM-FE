 <template>
  <div>
    <h4>填写设置</h4>
    <emfe-checkout className="diy" title="双向数据绑定，默认选中项" v-model="initChecked"></emfe-checkout>
    <emfe-checkout title="另一种形式" theme="right"></emfe-checkout>
    {{ initChecked }}
    <emfe-checkout className="diy" :title="title" @checked="checked">
    </emfe-checkout>
    <emfe-checkout className="div" tip="这是颜色标题的提示" title="这是一个带颜色的标题">
    </emfe-checkout>
    <emfe-checkout :disable="true" title="禁用">
    </emfe-checkout>
    <emfe-checkout className="diy" :slideShow="true" v-model="slideShow" title="限定一周内可选日期">
      <div slot="slide">
        <emfe-checkout title="周一" inline="true"></emfe-checkout>
        <emfe-checkout title="周二" inline="true"></emfe-checkout>
        <emfe-checkout title="周三" inline="true"></emfe-checkout>
        <emfe-checkout title="周四" inline="true"></emfe-checkout>
        <emfe-checkout title="周五" inline="true"></emfe-checkout>
        <emfe-checkout title="周六" inline="true"></emfe-checkout>
        <emfe-checkout title="周日" inline="true"></emfe-checkout>
      </div>
    </emfe-checkout>
    <br>
    <br>
    <br>
    <emfe-checkout className="" title="选中后不可点击" :checkedForever="true"></emfe-checkout>
    <br>
    <br>
    <br>
    反选 {{ allChecked }}
    <br>
    <div>
      <emfe-checkout className="" title="反选" inline="true" v-model="allChecked"  @checked="noChecked()"></emfe-checkout>
      <emfe-checkout className="" :title="item.title" inline="true" v-for="(item, index) in allDatas" :key="index" v-model="item.checked"></emfe-checkout>
    </div>
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
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>slideShow</td>
          <td>选中后是否有展示自定义内容</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disable|disabled</td>
          <td>是否禁用此多选框.1.3.0开始支持 disabled</td>
          <td>boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>多选框的描述标题</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>复选框是否一行显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>双向数据绑定</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>stop</td>
          <td>是否阻止冒泡</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>tip</td>
          <td>问号提示</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>checkedForever</td>
          <td>选中后不变状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>点击多选框触发</td>
          <td>Function</td>
          <td>function(){}</td>
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
          <td>change(checked 依然能用)</td>
          <td>点击多选框触发</td>
          <td>返回选中状态 | 选中的title</td>
        </tr>
      </tbody>
    </table>
    <br>
  </div>
</template>
<script>
export default {
  name: 'checkout-page',
  data() {
    return {
      slideShow: false,
      title: '没选',
      initChecked: true,
      allDatas: [
        {
          checked: false,
          title: '曼联',
        },
        {
          checked: false,
          title: '阿森纳',
        },
        {
          checked: false,
          title: '切尔西',
        },
      ],
    }
  },
  computed: {
    allChecked() {
      this.allDatas.every((data) => {
        if (this.allDatas.length === 0) {
          return false;
        } else {
          return data.checked;
        }
      });
    },
  },
  methods: {
    checked(state, title) {
      this.title = state ? '选了' : '没选';
    },
    noChecked() {
      this.allDatas.forEach((data) => data.checked = !data.checked);
    },
    dad() {
      console.log(this.slideShow);
    },
  },
}
</script>
<style>
.div-text {
  color: #1996F9;
}
.diy-checkout,
.div-checkout {
  margin: 8px 0;
}
</style>
