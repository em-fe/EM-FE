<template>
  <a class="emfe-link" :class="linkName" :href="emptyRouters ? 'javascript:;' : routers.url" v-if="hasUrl || emptyRouters">
    <slot></slot>
  </a>
  <router-link class="emfe-link" :class="linkName" :tag="tag" :to="routers" v-else>
    <slot></slot>
  </router-link>
</template>
<script>
import O from '../../../tools/o';

export default {
  name: 'emfe-link',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    routers: {
      type: Object,
      required: true,
      // default() {
      //   return {
      //     query: this.$route.query,
      //     params: this.$route.params,
      //   };
      // },
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkName() {
      return this.className ? `${this.className}-link` : '';
    },
    emptyRouters() {
      return JSON.stringify(this.routers) === '{}';
    },
    hasUrl() {
      let emptyJson = true;
      if (!this.emptyRouters) {
        emptyJson = O.hOwnProperty(this.routers, 'url');
      }
      return emptyJson;
    },
  },
  mounted() {
    console.log(this.$route, 9);
  },
  methods: {
    link() {
      window.location.href = 'http://baidu.com';
    },
  },
};
</script>
