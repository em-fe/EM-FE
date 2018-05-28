<template>
  <div class="uploadpage">
    <h3>截取器</h3>
    <emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[100, 60]" :interceptSync="false"></emfe-upload>
    <pre>
      &lt;emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[100, 60]" :interceptSync="false"&gt;&lt;/emfe-upload&gt;
    </pre>
    <h3>截取器(等比缩放)</h3>
    <emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[100, 60]"></emfe-upload>
    <pre>
      &lt;emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[100, 60]"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[200, 200]"></emfe-upload>
    <pre>
      &lt;emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :intercept="[100, 60]"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>基本用法</h3>
    <emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>扩展用法</h3>
    <emfe-upload buttonText="上传文件" fileType='file' theme="primary" v-show="!src1" type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload?type=1" @success="suc"></emfe-upload>
    <img v-show="src1" :src="src1">
    <pre>
      &lt;emfe-upload v-show="!src1" type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :success="suc"&gt;&lt;/emfe-upload&gt;
      &lt;img v-show="src1" :src="src1"&gt;
    </pre>
    <pre>
      suc(data) {
        this.src1 = data.url;
      },
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>另一种用法</h3>
    <emfe-upload className="bbb" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>禁用1</h3>
    <emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :disabled="true"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :disabled="true"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>禁用2</h3>
    <emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :disabled="true"></emfe-upload>
    <pre>
      &lt;emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload" :disabled="true"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>有图片用法</h3>
    <emfe-upload url="http://www.mikecrm.com/ugc_2_a/pub/50/50oz53d92h8otumu6y7hy9h8lhtodabj/form/image/wMTAYnnFTntzhGluIt8R405Wdy6tAnY6.png" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <emfe-upload url="http://moshtest.qiniudn.com/b5/49/1f/e8054ae706682549b921e78755.jpg" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <emfe-upload url="http://www.mikecrm.com/ugc_2_a/pub/50/50oz53d92h8otumu6y7hy9h8lhtodabj/form/image/wMTAYnnFTntzhGluIt8R405Wdy6tAnY6.png" type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <emfe-upload url="http://moshtest.qiniudn.com/b5/49/1f/e8054ae706682549b921e78755.jpg" type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    <!-- http://moshtest.qiniudn.com/b5/49/1f/e8054ae706682549b921e78755.jpg -->
    <!-- http://www.mikecrm.com/ugc_2_a/pub/50/50oz53d92h8otumu6y7hy9h8lhtodabj/form/image/7LMA6ZFB8x0KyifVY86NdXqdbFQpjVEq.png -->
    <br>
    <pre>
      &lt;emfe-upload url="http://moshtest.qiniudn.com/b5/49/1f/e8054ae706682549b921e78755.jpg" type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
          <td>type</td>
          <td>类型 icon,plus</td>
          <td>String</td>
          <td>plus</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>action</td>
          <td>ajax提交路径，必须</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>headers</td>
          <td>设置上传的请求头部</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>data</td>
          <td>上传时附带的额外参数</td>
          <td>Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>上传的文件字段名</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>maxSize</td>
          <td>文件大小限制，单位 kb</td>
          <td>Number</td>
          <td>-</td>
        </tr>
        <tr>
          <td>format</td>
          <td>支持的文件类型，format 是识别文件的后缀名</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>buttonText</td>
          <td>自定义按钮文字。</td>
          <td>String</td>
          <td>默认上传图片</td>
        </tr>
        <tr>
          <td>fileType</td>
          <td>自定义上传文件类型</td>
          <td>String</td>
          <td>默认image,</td>
        </tr>
        <tr>
          <td>intercept</td>
          <td>截取器开关，支持格式 [宽，高]</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>interceptSync</td>
          <td>截取器改变是否等比截图大小</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h3>注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>formatError</td>
          <td>文件格式验证失败时的钩子</td>
          <td>file, fileList,EmfeMessage</td>
        </tr>
        <tr>
          <td>exceededSize</td>
          <td>文件超出指定大小限制时的钩子，返回字段为</td>
          <td>file, fileList,EmfeMessage</td>
        </tr>
        <tr>
          <td>before</td>
          <td>上传文件之前的钩子，参数为上传的文件</td>
          <td>-</td>
        </tr>
        <tr>
          <td>error</td>
          <td>上传失败</td>
          <td>error, file, fileList,EmfeMessage</td>
        </tr>
        <tr>
          <td>success</td>
          <td>上传成功</td>
          <td>res,fileData,fileList,EmfeMessage</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "uploadpage",
  data() {
    return {
      src1: '',
    };
  },
  methods: {
    suc(data) {
      this.src1 = data.url;
      console.log(data, 111111);
    },
  },
};
</script>
