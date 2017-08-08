<template>
  <div class="uploadpage">
    <emfe-upload @upload="upload" action="http://esc.inner.evente.cn:30251/upload/upload">
      <button>上传</button>
    </emfe-upload>
  </div>
</template>
<script>
export default {
  name: "uploadpage",
  methods: {
    upload() {
      console.log(1);
    },
  },
};
</script>
