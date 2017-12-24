<template>
  <footer class="emfe-footer" :class="footerName">{{ content }}</footer>
</template>
<script>
export default {
  name: 'EmfeFooter',
  props: {
    content: {
      type: String,
      required: true,
    },
    className: String,
  },
  computed: {
    footerName() {
      return [
        {
          [`${this.className}-footer`]: !!this.className,
        },
      ];
    },
  },
};
</script>
