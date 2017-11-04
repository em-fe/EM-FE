<template>
  <div>
    <emfe-panel-c :memberDeadline="memberDeadline" :headImg="headImg" :memberlogo="memberlogo" :memberlogoNoVip="memberlogoNoVip" :growth="growth" :integral="integral" :balance="balance" :telRouters="{}" :infoRouters="{}" :walletRouters="{}" uploadAction="http://gateway.inner.evente.cn:8000/public/upload" :nickName='nickname' :levelName="levelName" :code="code" :phone="phone" :isMember="isMember" :openMember="openMember" :isVip="isVip" :openVip="openVip" :pendingPaymentNum="pendingPaymentNum" :pendingAuditNum="pendingAuditNum" :pendingShipmentNum="pendingShipmentNum" @pendingPay="pendingPay" @pendingAudit="pendingAudit" @pendingShipment="pendingShipment" @renew="renew" @freeLevel="freeLevel" @uploadSuccess="uploadSuccess"></emfe-panel-c>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headImg: 'https://2img.evente.cn/8b/af/19/a084cd140d003e01c46d449897.jpg?imageView2/2/w/310/h/440/q/80',
      memberlogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAS1BMVEUAAAD9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDvGclxWAAAAGHRSTlMAGRAFJgpfRTzvfWxOLPXm4MG+m4xWMyE8SFU/AAAAYElEQVQI10VOVxaAMAiD7tbWPbj/SaXRp/kgjOQFAmyLzdKHIB3DO5lJJJyHyMgY9WSUvTIrQWkKU8Vh1epokUys3Qx5IN4cRRiw9j0zdyE9i3gl+ABbkL//H/lUk0F3Ay3bBmB7mqqqAAAAAElFTkSuQmCC',
      memberlogoNoVip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAAS1BMVEUAAAD9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDv9iDvGclxWAAAAGHRSTlMAGRAFJgpfRTzvfWxOLPXm4MG+m4xWMyE8SFU/AAAAYElEQVQI10VOVxaAMAiD7tbWPbj/SaXRp/kgjOQFAmyLzdKHIB3DO5lJJJyHyMgY9WSUvTIrQWkKU8Vh1epokUys3Qx5IN4cRRiw9j0zdyE9i3gl+ABbkL//H/lUk0F3Ay3bBmB7mqqqAAAAAElFTkSuQmCC',
      growth: 10,
      integral: 212,
      balance: 1000,
      nickname:'李根ssssssssssssssssssss',
      levelName:'钻石会员',
      code:86,
      phone: 15725928061,
      isMember: 1,
      openMember: 1,
      isVip:1,
      openVip:1,
      pendingPaymentNum: 59,
      pendingAuditNum: 40,
      pendingShipmentNum: 22,
      memberDeadline: '2019-07-22 11:04:4',
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
    freeLevel(){
      alert('我是会员');
    },
    uploadSuccess(res){
      console.log(res);
    },
  },
};
</script>
