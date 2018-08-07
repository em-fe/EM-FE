<template>
  <div class="dialog-box" v-show="showDialog">
    <div class="dialog-box-mask"></div>
    <div class="dialog-box-content">
      <div class="dialog-box-content-header" @click="closeDialog">
        x
      </div>
      <div class="dialog-box-content-body">
        <div class="dialog-box-content-body-text" :class="curObject.textLayout?curObject.textLayout:'dialogLeft'">
          <img class="dialog-box-content-body-text-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+T3ZhbCAxIENvcHkgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLov4Hnp7vnrqHnkIblkI7lj7DpobXpnaIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLorr/pl67orr7nva7vvI3lj5bmtojpgoDor7fnoIEtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTczLjAwMDAwMCwgLTM3MS4wMDAwMDApIiBmaWxsPSIjRkQ4ODNCIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NTMuMDAwMDAwLCAzNTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzIsNDQgQzI1LjM3MjU4Myw0NCAyMCwzOC42Mjc0MTcgMjAsMzIgQzIwLDI1LjM3MjU4MyAyNS4zNzI1ODMsMjAgMzIsMjAgQzM4LjYyNzQxNywyMCA0NCwyNS4zNzI1ODMgNDQsMzIgQzQ0LDM4LjYyNzQxNyAzOC42Mjc0MTcsNDQgMzIsNDQgWiBNMzAuODEyODU3MSwyNC4yIEwzMC44MTI4NTcxLDM0LjY3MjcwODYgTDMzLjQ4NzE0MjksMzQuNjcyNzA4NiBMMzMuNDg3MTQyOSwyNC4yIEwzMC44MTI4NTcxLDI0LjIgWiBNMzAuODEyODU3MSwzNS45MjU3MTQzIEwzMC44MTI4NTcxLDM4LjYgTDMzLjQ4NzE0MjksMzguNiBMMzMuNDg3MTQyOSwzNS45MjU3MTQzIEwzMC44MTI4NTcxLDM1LjkyNTcxNDMgWiIgaWQ9Ik92YWwtMS1Db3B5LTMiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+">
          <div class="dialog-box-content-body-text-nrb">{{dialogObject.title}}</div>
        </div>
      </div>
      <div class="dialog-box-content-footer" :class="curObject.btnGroupLayout?curObject.btnGroupLayout:'dialogCenter'">
        <span class="dialog-box-content-footer-cancalBtn" @click="closeDialog" v-show="dialogObject.cancelBtn">{{dialogObject.cancelBtnText}}</span>
        <span class="dialog-box-content-footer-confirmBtn" @click="confirmDialog" v-show="dialogObject.confirmBtn">{{dialogObject.confirmBtnText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'EmfeDialog',
    props: {
      dialogFlag: {
        type: Boolean,
        default: false,
      },
      curObject: {
        type: Object,
        default() {
          return {
            title: '弹窗',
            cancelBtn: true,
            confirmBtn: true,
            cancelBtnText: '返回',
            confirmBtnText: '确定',
            btnGroupLayout: 'dialogCenter',
            textLayout: 'dialogCenter',
          };
        },
      },
    },
    data() {
      return {
        showDialog: false,
        dialogObject: {
          title: '弹窗',
          cancelBtn: true,
          confirmBtn: true,
          cancelBtnText: '返回',
          confirmBtnText: '确定',
          btnGroupLayout: 'dialogCenter',
          textLayout: 'dialogCenter',
        },
      };
    },
    methods: {
      closeDialog() {
        this.showDialog = false;
        this.$emit('child-close', this.showDialog);
      },
      confirmDialog() {
        this.showDialog = false;
        this.$emit('child-confirm', this.showDialog);
      },
    },
    watch: {
      dialogFlag: {
        handler(curVal) {
          this.showDialog = curVal;
        },
        deep: true,
      },
      curObject: {
        handler(curObjVal) {
          this.dialogObject = Object.assign(this.dialogObject, curObjVal);
        },
        deep: true,
      },
    },
    mounted() {
      this.dialogObject = Object.assign(this.dialogObject, this.curObject);
      this.showDialog = this.dialogFlag;
    },
  };
</script>
