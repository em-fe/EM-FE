<template>
  <div class="all">
    <h1 class="all-title">EMFE</h1>
    <emfe-row :gutter="32" class="all-main">
      <emfe-col class="all-menu" span="6">
        <emfe-row :gutter="16" class="all-search">
          <emfe-col span="16">
            <span @keyup.enter="go"><emfe-input className="all-search" v-model="search" @change="searchChange" @enter="go"></emfe-input></span>
            <ul class="all-search-think">
              <li class="all-search-think-item" v-for="searchResult in searchResults">
                <emfe-link :routers="searchResult.routers">{{ searchResult.title }}</emfe-link>
              </li>
            </ul>
          </emfe-col>
          <emfe-col span="8">
            <emfe-button theme="primary" className="all-search" @click="go">搜索</emfe-button>
          </emfe-col>
        </emfe-row>
        <div class="all-menu-content">
          <dl class="all-menu-one" v-for="data in datas">
            <dt class="all-menu-one-title">{{ data.title }}</dt>
            <dd class="all-menu-one-item" v-for="menu in data.menus">
              <emfe-link :routers="menu.routers" class="all-menu-link">{{ menu.title }}</emfe-link>
            </dd>
          </dl>
        </div>
      </emfe-col>
      <emfe-col class="all-view" span="18">
        <router-view></router-view>
      </emfe-col>
    </emfe-row>
  </div>
</template>
<script>
const cpts = require('./menus/components').default;
const dtvs = require('./menus/directives').default;

module.exports = {
  data() {
    return {
      search: '',
      searchResults: [],
      datas: [
        {
          title: '组件',
          menus: cpts,
        },
        {
          title: '指令',
          menus: dtvs,
        },
      ],
    };
  },
  methods: {
    searchChange(val) {
      if (val) {
        const re = new RegExp(val, 'g');
        this.search = val;
        this.searchResults = cpts.filter(cpt => re.test(cpt.title))
      } else {
        this.resetSearch();
      }
    },
    resetSearch() {
      this.searchResults = [];
      this.search = '';
    },
    go() {
      const { searchResults } = this;
      if (searchResults.length > 0) {
        this.$router.push(searchResults[0].routers);
      }
    },
  },
  watch: {
    $route() {
      this.resetSearch();
    },
  },
};
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
