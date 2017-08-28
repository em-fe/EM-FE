<template>
  <div class="">
    <h3>qq 验证</h3>
    {{ testqq }}
    <input type="text" v-model="qq" @blur="blurqq">
    <pre>
      &lt;input type="text" v-model="qq" @blur="blurqq"&gt;
    </pre>
    <pre>
      qq: 111,
      testqq: false,
    </pre>
    <pre>
      blurqq() {
        this.testqq = this.$EmfeFormTest.qq(this.qq);
      },
    </pre>
    <h3>身份证 验证</h3>
    {{ testcard }}
    <input type="text" v-model="card" @blur="blurcard">
    <pre>
      &lt;input type="text" v-model="card" @blur="blurcard"&gt;
    </pre>
    <pre>
      card: 111,
      testcard: false,
    </pre>
    <pre>
      blurcard() {
        this.testcard = this.$EmfeFormTest.card(this.card);
      },
    </pre>
    <h3>数字 验证</h3>
    正负数( 带小数 ): {{ testnum }}
    <input type="text" v-model="num" @blur="blurnum">
    <pre>
      &lt;input type="text" v-model="num" @blur="blurnum"&gt;
    </pre>
    <pre>
      num: 111,
      testnum: false,
    </pre>
    <pre>
      blurnum() {
        this.testnum = this.$EmfeFormTest.num(this.num);
      },
    </pre>
    <br>
    <br>
    <br>
    正负整数: {{ testnumint }}
    <input type="text" v-model="numint" @blur="blurnumint">
    <pre>
      &lt;input type="text" v-model="numint" @blur="blurnumint"&gt;
    </pre>
    <pre>
      numint: 222,
      testnumint: false,
    </pre>
    <pre>
      blurnumint() {
        this.testnumint = this.$EmfeFormTest.numInt(this.numint);
      },
    </pre>
    <br>
    负数( 带小数 ): {{ testnegative }}
    <input type="text" v-model="negative" @blur="blurnegative">
    <pre>
      &lt;input type="text" v-model="negative" @blur="blurnegative"&gt;
    </pre>
    <pre>
      negative: 333,
      testnegative: false,
    </pre>
    <pre>
      blurnegative() {
        this.testnegative = this.$EmfeFormTest.negative(this.negative);
      },
    </pre>
    <br>
    负整数: {{ testnegativeint }}
    <input type="text" v-model="negativeint" @blur="blurnegativeint">
    <pre>
      &lt;input type="text" v-model="negativeint" @blur="blurnegativeint"&gt;
    </pre>
    <pre>
      negativeint: 444,
      testnegativeint: false,
    </pre>
    <pre>
      blurnegativeint() {
        this.testnegativeint = this.$EmfeFormTest.negativeint(this.negativeint);
      },
    </pre>
    <br>
    正整数: {{ testpositiveint }}
    <input type="text" v-model="positiveint" @blur="blurpositiveint">
    <pre>
      &lt;input type="text" v-model="positiveint" @blur="blurpositiveint"&gt;
    </pre>
    <pre>
      positiveint: 444,
      testpositiveint: false,
    </pre>
    <pre>
      blurpositiveint() {
        this.testpositiveint = this.$EmfeFormTest.positiveInt(this.positiveint);
      },
    </pre>
    <br>
    正数( 带小数 ): {{ testpositive }}
    <input type="text" v-model="positive" @blur="blurpositive">
    <pre>
      &lt;input type="text" v-model="positive" @blur="blurpositive"&gt;
    </pre>
    <pre>
      positive: 555,
      testpositive: false,
    </pre>
    <pre>
      blurpositive() {
        this.testpositive = this.$EmfeFormTest.positive(this.positive);
      },
    </pre>
    <br>
    <h3>ip 验证</h3>
    {{ testip }}
    <input type="text" v-model="ip" @blur="blurip">
    <pre>
      &lt;input type="text" v-model=">ip" @blur="blur>ip"&gt;
    </pre>
    <pre>
      ip: 111,
      testip: false,
    </pre>
    <pre>
      blurip() {
        this.test>ip = this.$EmfeFormTest.>ip(this.>ip);
      },
    </pre>
    <h3>网址 验证</h3>
    {{ testweb }}
    <input type="text" v-model="web" @blur="blurweb">
    <pre>
      &lt;input type="text" v-model="web" @blur="blurweb"&gt;
    </pre>
    <pre>
      web: 111,
      testweb: false,
    </pre>
    <pre>
      blurweb() {
        this.testweb = this.$EmfeFormTest.web(this.web);
      },
    </pre>
    <h3>手机号 验证</h3>
    {{ testphone }}
    <input type="text" v-model="phone" @blur="blurphone">
    <pre>
      &lt;input type="text" v-model="phone" @blur="blurphone"&gt;
    </pre>
    <pre>
      phone: 111,
      testphone: false,
    </pre>
    <pre>
      blurphone() {
        this.testphone = this.$EmfeFormTest.phone(this.phone);
      },
    </pre>
    <h3>登录密码 验证</h3>
    {{ testpassword }}
    <input type="text" v-model="password" @blur="blurpassword">
    <pre>
      &lt;input type="text" v-model="password" @blur="blurpassword"&gt;
    </pre>
    <pre>
      password: 111,
      testpassword: false,
    </pre>
    <pre>
      blurpassword() {
        this.testpassword = this.$EmfeFormTest.password(this.password);
      },
    </pre>
    <h3>email 验证</h3>
    {{ testemail }}
    <input type="text" v-model="email" @blur="bluremail">
    <pre>
      &lt;input type="text" v-model="email" @blur="bluremail"&gt;
    </pre>
    <pre>
      email: 111,
      testemail: false,
    </pre>
    <pre>
      bluremail() {
        this.testemail = this.$EmfeFormTest.email(this.email);
      },
    </pre>
    <h3>money 验证</h3>
    {{ testmoney }}
    <input type="text" v-model="money" @blur="blurmoney">
    <pre>
      &lt;input type="text" v-model="money" @blur="blurmoney"&gt;
    </pre>
    <pre>
      money: 111,
      testmoney: false,
    </pre>
    <pre>
      blurmoney() {
        this.testmoney = this.$EmfeFormTest.money(this.money);
      },
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>以上方法隐式的创建及维护 Vue 组件。参数 params 是对象，具体说明如下：</p>
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
          <td>val</td>
          <td>验证的值</td>
          <td>String</td>
          <td>true|false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    qq: 111,
    testqq: false,
    card: 111,
    testcard: false,
    num: 111,
    numint: 222,
    testnum: false,
    testnumint: false,
    negative: 333,
    negativeint: 444,
    testnegative: false,
    testnegativeint: false,
    positive: 555,
    positiveint: 666,
    testpositive: false,
    testpositiveint: false,
    ip: 111,
    testip: false,
    web: 111,
    testweb: false,
    phone: 111,
    testphone: false,
    password: 111,
    testpassword: false,
    email: 111,
    testemail: false,
    money: 12.23,
    testmoney: false,
  }),
  methods: {
    blurqq() {
      this.testqq = this.$EmfeFormTest.qq(this.qq);
    },
    blurcard() {
      this.testcard = this.$EmfeFormTest.card(this.card);
    },
    blurnum() {
      this.testnum = this.$EmfeFormTest.num(this.num);
    },
    blurnumint() {
      this.testnumint = this.$EmfeFormTest.numInt(this.numint);
    },
    blurnegative() {
      this.testnegative = this.$EmfeFormTest.negative(this.negative);
    },
    blurnegativeint() {
      this.testnegativeint = this.$EmfeFormTest.negativeInt(this.negativeint);
    },
    blurpositive() {
      this.testpositive = this.$EmfeFormTest.positive(this.positive);
    },
    blurpositiveint() {
      this.testpositiveint = this.$EmfeFormTest.positiveInt(this.positiveint);
    },
    blurip() {
      this.testip = this.$EmfeFormTest.ip(this.ip);
    },
    blurweb() {
      this.testweb = this.$EmfeFormTest.web(this.web);
    },
    blurphone() {
      this.testphone = this.$EmfeFormTest.phone(this.phone);
    },
    blurpassword() {
      this.testpassword = this.$EmfeFormTest.password(this.password);
    },
    bluremail() {
      this.testemail = this.$EmfeFormTest.email(this.email);
    },
    blurmoney() {
      this.testmoney = this.$EmfeFormTest.money(this.money);
    },
  },
};
</script>
