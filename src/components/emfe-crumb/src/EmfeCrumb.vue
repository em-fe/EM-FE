<template>
  <div class="emfe-crumb">
    <div class="emfe-crumb-left">
      <emfe-link :className="linkName" :routers="routers" @click="click">{{ linkText }}</emfe-link>
      <span class="emfe-crumb-left-txt" v-if="title">{{ title }}</span>
    </div>
    <div class="emfe-crumb-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmfeCrumb',
  props: {
    routers: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkName() {
      return this.title ? 'emfe-crumb-title' : 'emfe-crumb';
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
