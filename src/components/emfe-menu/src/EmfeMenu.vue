<template>
  <div class="emfe-menu" ref="menu">
    <h3 class="emfe-menu-header">
      <router-link :to="header.router" class="emfe-menu-header-link" exact-active-class="emfe-menu-header-on">
        <emfe-icon className="emfe-menu" :type="header.icon" />
        <span class="emfe-menu-text">{{header.name}}</span>
      </router-link>
    </h3>
    <ul class="emfe-menu-list" v-for="(menu, menuIndex) in datas" :key="menuIndex">
      <template v-for="item in menu">
        <router-link v-if="item.router" class="emfe-menu-list-li" :to="item.router" tag="li" exact-active-class="emfe-menu-list-li-on">
          <emfe-icon className="emfe-menu" :type="item.icon" />
          <span class="emfe-menu-text">{{item.name}}</span>
        </router-link>
        <li v-else class="emfe-menu-list-li" exact-active-class="emfe-menu-list-li-on" @click="goToPath(item)">
          <emfe-icon className="emfe-menu" :type="item.icon" />
          <span class="emfe-menu-text">{{item.name}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import Contant from '../../../contant';
import O from '../../../tools/o';

export default {
  name: 'EmfeMenu',
  data() {
    return {
      Contant,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    datas: Array,
    header: {
      type: Object,
      default: () => ({
        name: '',
        icon: '',
        routers: {},
      }),
    },
  },
  methods: {
    goToPath(item) {
      if (O.hOwnProperty(item, 'path')) {
        window.location.href = item.path;
      }
    },
  },
};
</script>
