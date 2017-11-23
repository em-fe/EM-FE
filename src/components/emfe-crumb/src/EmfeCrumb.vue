<template>
  <div class="emfe-crumb" :class="crumbName">
    <div class="emfe-crumb-left" :class="leftName">
      <emfe-link :className="linkName" :routers="routers" @click="click">{{ linkText }}</emfe-link>
      <span class="emfe-crumb-left-txt" :class="txtName" v-if="title">{{ title }}</span>
    </div>
    <div class="emfe-crumb-right" :class="rightName">
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
    className: String,
  },
  computed: {
    crumbName() {
      return this.className ? `${this.className}-crumb` : '';
    },
    leftName() {
      return this.className ? `${this.className}-crumb-left` : '';
    },
    txtName() {
      return this.className ? `${this.className}-crumb-left-txt` : '';
    },
    rightName() {
      return this.className ? `${this.className}-crumb-right` : '';
    },
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
