<template>
  <div>
    <h3>API</h3>
    <div>
      参数类型 <br>
      1. 数组[callback, config] <br>
      2. 对象(config) <br>
      3. 函数(callback)
    </div>
    <br>
    <br>
    <br>
    <br>
    <p>本组件采用 iscroll5 做底层滚动库做的二次封装</p>
    <p><a href="http://iscrolljs.com/" target="_blank">iscrolljs</a> 参照地址： <a href="http://iscrolljs.com/" target="_blank">http://iscrolljs.com/</a></p>
    <br>
    <br>
    <br>
    <br>
    <div class="docpage" v-emfe-iscroll="[func, config]">
      <div>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <pre>
      &lt;div class="docpage" v-emfe-iscroll="config"&gt;
        &lt;div&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
          &lt;p&gt;一些不必要的内容&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    </pre>
    <pre>
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
    };
  },
  methods: {
    func(iscroll) {
      console.log(iscroll);
    },
  },
};
</script>
<style>
.docpage {
  height: 200px;
  position: relative;
  overflow: hidden;
}
</style>
