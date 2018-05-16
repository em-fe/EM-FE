<template>
  <div class="emfe-titleline">{{ title }}</div>
</template>
<script>
export default {
  name: 'emfe-titleline',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
