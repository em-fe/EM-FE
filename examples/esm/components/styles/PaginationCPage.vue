<template>
  <div class="page-demo">
    <emfe-pagination-c :pageCount="pageCount" @togglePage="togglePage($event)"></emfe-pagination-c>
    <h2 style="margin-top:50px">API:</h2>
    data里配置项：pageCount - 默认有多少页<br>
    togglePage 里参数是有当前是第几页<br>
  </div>
</template>

<script>
export default {
  name:  'pageDemo',
  data()  {
    return{
      pageCount: 12,
    }
  },
  methods:  {
    togglePage(indexPage)  {
      console.log(indexPage);
    }
  }
}
</script>
