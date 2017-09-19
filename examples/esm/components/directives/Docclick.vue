<template>
  <div>
    <div class="docpage" v-emfe-documentclick="documentclick">点击 body 的次数{{ num }}</div>
    <pre>
      &lt;div class="docpage" v-emfe-documentclick="documentclick"&gt;点击 body 的次数{{ num }}&lt;/div&gt;
    </pre>
    <pre>
      documentclick() {
        this.num++;
      },
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    documentclick() {
      this.num++;
    },
  },
};
</script>
