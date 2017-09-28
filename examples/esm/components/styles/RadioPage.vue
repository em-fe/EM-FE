<template>
  <div class="radio-page">
    <h3>简单用法</h3>
    <emfe-radio index="0" className="diy" name="group1" :disabled="true">文字</emfe-radio>
    <pre>
      &lt;emfe-radio index="0" className="diy" name="group1" :disabled="true"&gt;文字&lt;/emfe-radio&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <emfe-radio index="aaa0" name="group1" @change="changeaaa">111文字</emfe-radio>
    <emfe-radio index="aaa1" name="group1" @change="changeaaa">222文字</emfe-radio>
    {{ aaaindex }}
    <br>
    <br>
    <br>
    <br>
    <h3>单选用法</h3>
    <emfe-radio-group>
      <emfe-radio index="0" name="group2" :statu="index === 0" @change="change">文字</emfe-radio>
      <emfe-radio index="1" name="group2" :statu="index === 1" @change="change">文字</emfe-radio>
    </emfe-radio-group>
    <p>当前选中 {{ index }}</p>
    <br>
    <br>
    <br>
    <emfe-radio-group>
      <emfe-radio index="0" name="groupSlide1" :statu="index === 0" @change="change" className="diy">文字</emfe-radio>
      <emfe-radio index="1" name="groupSlide1" :statu="index === 1" @change="change" :slideShow="slideShow">文字
        <div slot="slide">
          <emfe-radio-group>
            <emfe-radio index="0" name="groupSlide1-1" :statu="index === 0" inline="true" @change="change">每台电脑/手机限填一次</emfe-radio>
            <emfe-radio index="1" name="groupSlide1-1" :statu="index === 1" inline="true" @change="change">每台电脑/手机限填两次</emfe-radio>
            <emfe-radio index="2" name="groupSlide1-1" :statu="index === 2" inline="true" @change="change">每台电脑/手机限填一次</emfe-radio>
          </emfe-radio-group>
        </div>
      </emfe-radio>
      <emfe-radio index="2" name="groupSlide1" :statu="index === 2" @change="change" :slideShow="slideShow">文字
        <div slot="slide">
          <emfe-radio-group>
            <emfe-radio index="0" name="groupSlide2-1" :statu="index === 0" @change="change">每台电脑/手机限填一次</emfe-radio>
            <emfe-radio index="1" name="groupSlide2-1" :statu="index === 1" @change="change">每台电脑/手机限填一次</emfe-radio>
          </emfe-radio-group>
        </div>
      </emfe-radio>
    </emfe-radio-group>
    <p>当前选中 {{ index }}</p>
    <pre>
      <code>
        <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"0"</span> <span>name</span><span>=</span><span>"group1"</span> <span>:disabled</span><span>=</span><span>"true"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
      </code>
      <code>
        <span> <span>&lt;emfe-radio-group</span>&gt;</span>
          <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"0"</span> <span>name</span><span>=</span><span>"group2"</span> <span>:statu="index === 0"</span><span> @change="change"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
          <span>&lt;emfe-radio</span> <span>index</span><span>=</span><span>"1"</span> <span>name</span><span>=</span><span>"group2"</span> <span>:statu="index === 1"</span><span> @change="change"</span><span>&gt;</span>文字<span>&lt;/emfe-radio&gt;</span>
         <span>&lt;/emfe-radio-group&gt;</span>
        <br>
        <span>
          methods: {
            change(index) {
              this.index = index;
            },
          },
        </span>
      </code>
    </pre>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">属性</th>
          <th width="30%">说明</th>
          <th width="20%">类型</th>
          <th width="25%">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>className</td>
          <td>选填</td>
          <td>String</td>
          <td>默认''</td>
        </tr>
        <tr>
          <td>index</td>
          <td>必须填写</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>具有相同名称的单选按钮 属于同一组</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>“禁止”状态添加disabled</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
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
          <td>change</td>
          <td>点击单选触发</td>
          <td>当前索引</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        slideShow: true,
        index: 1,
        aaaindex: -1,
      };
    },
    methods: {
      change(index) {
        this.index = index;
      },
      changeaaa(index) {
        this.aaaindex = index;
      },
    },
  };
</script>
