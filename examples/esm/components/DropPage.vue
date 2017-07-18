<template>
  <div class="emfe-drop">
    <div class="emfe-drop-box">
      <emfe-drop className="no1" >姓名</emfe-drop>
      <emfe-drop className="no1" posStyle="left: 60px; top: 0px;">学号</emfe-drop>
      <emfe-drop className="no1" posStyle="left: 120px;">分数</emfe-drop>
    </div>
  </div>
</template>
<script>
export default {
  name: 'drop-page',
};
</script>
<style>
.emfe-drop{
  position: relative;
}
.emfe-drop-box{
  position: relative;
  z-index: 22;
}
.no1-drag {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(133, 10, 0, 0.4);
  position: absolute;
}
</style>
