<template>
  <div class="emfe-opations-page">
    <emfe-opations :opationsData="opationsData" :margin="margin"></emfe-opations>
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
      margin: 16,
    };
  },
};
</script>
