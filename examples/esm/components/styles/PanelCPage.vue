<template>
  <div>
    <emfe-panel-c :memberlogo="memberlogo" :growth="growth" :integral="integral" :balance="balance" :telRouters="{}" :infoRouters="{}" :walletRouters="{}" uploadAction="http://gateway.inner.evente.cn:8000/public/upload" :nickName='nickname' :levelName="levelName" :code="code" :phone="phone" :isMember="isMember" :isVip="isVip" :pendingPaymentNum="pendingPaymentNum" :pendingAuditNum="pendingAuditNum" :pendingShipmentNum="pendingShipmentNum" @pendingPay="pendingPay" @pendingAudit="pendingAudit" @pendingShipment="pendingShipment" @renew="renew"></emfe-panel-c>
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
      nickname:'李根',
      levelName:'钻石会员',
      code:86,
      phone: 15725928061,
      isMember: 1,
      isVip:1,
      pendingPaymentNum: 59,
      pendingAuditNum: 40,
      pendingShipmentNum: 22,
    };
  },
  methods:{
    pendingPay(){
      alert('我是待付款');
    },
    pendingAudit(){
      alert('我是待审核');
    },
    pendingShipment(){
      alert('我是待发货');
    },
    renew(){
      alert('我是续费');
    },
  },
};
</script>
