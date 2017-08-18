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
    {{ testnum }}
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
    testnum: false,
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
  },
};
</script>
