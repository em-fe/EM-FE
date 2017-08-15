 <template>
  <div>
    <h4>填写设置</h4>
    <emfe-checkout className="diy" title="双向数据绑定，默认选中项" v-model="initChecked">
    </emfe-checkout>
    {{ initChecked }}
    <emfe-checkout className="diy" :title="title" @checked="checked">
    </emfe-checkout>
    <emfe-checkout className="div" title="这是一个带颜色的标题">
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
    <button @click="dad">dajk</button>
    <br>
    <br>
    <br>
    全选 {{ allChecked }}
    <br>
    <div>
      <emfe-checkout className="diy" title="全选" inline="true" v-model="allChecked"  @checked="noChecked()"></emfe-checkout>
      <emfe-checkout className="diy" :title="item.title" inline="true" v-for="(item, index) in allDatas" :key="index" v-model="item.checked"></emfe-checkout>
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
          <td>disable</td>
          <td>是否禁用此多选框</td>
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
          <td>checked</td>
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
      return this.allDatas.every((data) => data.checked);
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
  margin: 8px 0;
}
.diy-text {
  margin: 8px 0;
}
</style>
