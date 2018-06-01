<template>
  <div>
    <br>
    <br>
    <p>注意，如果指令写法<emfe-link :routers="{name: 'iscroll'}">iscroll指令</emfe-link></p>
    <br>
    <br>
    <p>本组件采用 iscroll5 做底层滚动库做的二次封装</p>
    <p><a href="http://iscrolljs.com/" target="_blank">iscrolljs</a> 参照地址： <a href="http://iscrolljs.com/" target="_blank">http://iscrolljs.com/</a></p>
    <br>
    <br>
    <br>
    <br>
    <h3>示例</h3>
    <button @click="scrollToTop">Scroll To Top</button>
    <emfe-iscroll ref="iscroll" class="docpage" :options="configSnap" :wrapperClass="['snap']">
      <div class="snap-div">一些不必要的内容</div>
      <div class="snap-div">一些不必要的内容</div>
    </emfe-iscroll>
    <br>
    <br>
    <h3>示例</h3>
    <button @click="scrollToTop">Scroll To Top</button>
    <emfe-iscroll ref="iscroll" class="docpage" :options="config" :wrapperClass="['asdfasdf']">
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
    </emfe-iscroll>
    <br>
    <br>
    <br>
    <br>
    <pre>
      &lt;button @click="scrollToTop">Scroll To Top&lt;/button&gt;
      &lt;emfe-iscroll ref="iscroll" class="docpage" :options="config"&gt;
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
      &lt;/emfe-iscroll&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <pre>
      scrollToTop () {
        const iscroll = this.$refs.iscroll;
        iscroll.scrollTo(0, 0, 100);
        iscroll.refresh();
      },
    </pre>
    <br>
    <br>
    <pre>
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
    </pre>
    <h3>API</h3>
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
          <td>options</td>
          <td>参数</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>wrapperClass</td>
          <td>外层的 class 名称。</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>wrapperStyle</td>
          <td>外层的 样式。</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>scrollerStyle</td>
          <td>内层的 class 名称。</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
        <tr>
          <td>scrollerStyle</td>
          <td>内层的 样式。</td>
          <td>Object</td>
          <td>{}</td>
        </tr>
      </tbody>
    </table>
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
      configSnap: {
        snap: true,
        mouseWheel: true,
      },
    };
  },
  methods: {
    scrollToTop () {
      const iscroll = this.$refs.iscroll;
      iscroll.scrollTo(0, 0, 100);
      iscroll.refresh();
    },
  },
};
</script>
<style>
.docpage {
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.snap,
.snap-div {
  height:100vh;
}
</style>
