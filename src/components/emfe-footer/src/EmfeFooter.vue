<template>
  <footer class="emfe-footer">{{ content }}</footer>
</template>
<script>
export default {
  name: 'EmfeFooter',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
