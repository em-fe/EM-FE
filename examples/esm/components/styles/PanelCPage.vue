<template>
  <div>
    <emfe-panel-c :memberlogo="memberlogo" :growth="growth" :integral="integral" :balance="balance" :telRouters="{}" :infoRouters="{}" :walletRouters="{}" uploadAction="http://gateway.inner.evente.cn:8000/public/upload"></emfe-panel-c>
  </div>
</template>
<script>
export default {
  data() {
    return {
      memberlogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAS1BMVEUAAAD9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDvGclxWAAAAGHRSTlMAGRAFJgpfRTzvfWxOLPXm4MG+m4xWMyE8SFU/AAAAYElEQVQI10VOVxaAMAiD7tbWPbj/SaXRp/kgjOQFAmyLzdKHIB3DO5lJJJyHyMgY9WSUvTIrQWkKU8Vh1epokUys3Qx5IN4cRRiw9j0zdyE9i3gl+ABbkL//H/lUk0F3Ay3bBmB7mqqqAAAAAElFTkSuQmCC',
      growth: 10,
      integral: 212,
      balance: 1000,
    };
  },
};
</script>
