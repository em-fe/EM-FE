<template>
  <div>
    <p>本组件采用 iscroll5 做底层滚动库做的二次封装</p>
    <p><a href="http://iscrolljs.com/" target="_blank">iscrolljs</a> 参照地址： <a href="http://iscrolljs.com/" target="_blank">http://iscrolljs.com/</a></p>
    <br>
    <br>
    <br>
    <br>
    <div class="docpage" v-emfe-iscroll="config">
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
};
</script>
<style>
.docpage {
  height: 200px;
  position: relative;
  overflow: hidden;
}
</style>
