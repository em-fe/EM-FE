<template>
  <div class="uploadpage">
    <emfe-upload @upload="upload" action="http://jsonplaceholder.typicode.com/photos">
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
