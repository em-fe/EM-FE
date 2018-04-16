<template>
  <div class="emfe-bar">
    <router-link v-if="header.routers" tag="h3" :to="header.routers" class="emfe-bar-header">{{ header.name }}</router-link>
    <h3 v-else class="emfe-bar-header" @click="gotoHeader">{{ header.name }}</h3>
    <ul class="emfe-bar-list">
      <template v-for="data in datas">
        <router-link v-if="data.routers" tag="h3" :to="data.routers" class="emfe-bar-list-item">{{ data.name }}</router-link>
        <li v-else class="emfe-bar-list-item" @click="gotoItem(data)">{{ data.name }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import Contant from '../../../contant';
import O from '../../../tools/o';

export default {
  name: 'EmfeBar',
  data() {
    return {
      Contant,
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    header: {
      type: Object,
      default: () => ({
        name: '',
        routers: {},
      }),
    },
  },
  methods: {
    gotoHeader() {
      if (O.hOwnProperty(this.header, 'path')) {
        window.location.href = this.header.path;
      }
    },
    gotoItem(item) {
      if (O.hOwnProperty(item, 'path')) {
        window.location.href = item.path;
      }
    },
  },
};
</script>
