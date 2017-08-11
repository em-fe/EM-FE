<template>
  <div class="uploadpage">
    <emfe-upload type="icon" @upload="upload" action="http://gateway.inner.evente.cn:8000/upload/upload"></emfe-upload>
    <br>
    <br>
    <br>
    <br>
    <br>
    <emfe-upload @upload="upload" action="http://gateway.inner.evente.cn:8000/upload/upload"></emfe-upload>
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
