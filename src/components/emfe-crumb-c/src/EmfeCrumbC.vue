<template>
  <div class="emfe-crumb-c">
    <span class="emfe-crumb-c-title">您的位置：</span>
    <template v-for="data in datas">
      <span class="emfe-crumb-c-title">{{ data }}</span>
      <i class="emfe-crumb-c-format">{{ format }}</i>
    </template>
    <emfe-link className="emfe-crumb-c" :routers="routers" @click="click">{{ linkText }}</emfe-link>
  </div>
</template>

<script>
export default {
  name: 'EmfeCrumbC',
  props: {
    routers: {
      type: Object,
      required: true,
    },
    format: {
      type: String,
      default: '>',
    },
    datas: {
      type: Array,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
