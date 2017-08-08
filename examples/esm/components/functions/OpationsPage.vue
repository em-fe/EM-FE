<template>
  <div class="emfe-opations-page">
    <emfe-opations :opationsData="opationsData"></emfe-opations>
  </div>
</template>
<script>
export default {
  name: 'opationsPage',
  data() {
    return {
      opationsData: [
        {
          text: '选项',
          plusFlg: true,
          minusFlg: true,
        },
        {
          text: '选项',
          plusFlg: true,
          minusFlg: true,
        },
        {
          text: '选项',
          plusFlg: true,
          minusFlg: true,
        },
      ],
    };
  },
};
</script>
