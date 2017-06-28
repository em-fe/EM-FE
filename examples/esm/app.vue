<template>
  <div>
    <h1>活动时 emui 测试页面</h1>
    <nav>
      <ul>
        <li><router-link to="/grid">栅格系统( grid )</router-link></li>
        <li><router-link to="/iconpage">字体图标( icon )</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
module.exports = {
};
</script>
