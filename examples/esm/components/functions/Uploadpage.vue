<template>
  <div class="uploadpage">
    <h3>基本用法</h3>
    <emfe-upload type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>扩展用法</h3>
    <emfe-upload v-show="!src1" type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload" :onSuccess="suc"></emfe-upload>
    <img v-show="src1" :src="src1">
    <pre>
      &lt;emfe-upload v-show="!src1" type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload" :onSuccess="suc"&gt;&lt;/emfe-upload&gt;
      &lt;img v-show="src1" :src="src1"&gt;
    </pre>
    <pre>
      suc(data) {
        this.src1 = data.data.resource_url;
      },
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>另一种用法</h3>
    <emfe-upload action="http://gateway.inner.evente.cn:8000/upload/upload"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload action="http://gateway.inner.evente.cn:8000/upload/upload"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>禁用1</h3>
    <emfe-upload type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload" :disabled="true"></emfe-upload>
    <br>
    <pre>
      &lt;emfe-upload type="icon" action="http://gateway.inner.evente.cn:8000/upload/upload" :disabled="true"&gt;&lt;/emfe-upload&gt;
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>禁用2</h3>
    <emfe-upload action="http://gateway.inner.evente.cn:8000/upload/upload" :disabled="true"></emfe-upload>
    <pre>
      &lt;emfe-upload action="http://gateway.inner.evente.cn:8000/upload/upload" :disabled="true"&gt;&lt;/emfe-upload&gt;
    </pre>
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
      this.src1 = data.data.resource_url;
    },
  },
};
</script>
