<template>
  <div>
    <emfe-drop className="abc-drop" :margin="margin" :datas="list"></emfe-drop>
  </div>
</template>
<script>
export default {
  name: 'drop-page',
  data() {
    return {
      margin: 5,
      list: [
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        },
        {
          title: 5,
        },{
          title: 6,
        },
        {
          title: 7,
        },
        {
          title: 8,
        },
        {
          title: 9,
        },
        {
          title: 10,
        },
      ],
    };
  },
  methods: {
    beforeDrag(e) {
      console.log('beforeDrag');
    },
    drag(e) {
      console.log('draging');
    },
    afterDrag(e) {
      console.log('afterDrag');
    },
    hit() {
      console.log('afterDrag');
    },
  },
};
</script>
<style>
.abc-drop {
  width: 720px;
  height: 35px;
  display: flex;
}
.abc-drop-drag {
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  margin-left: -1px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: move;
}
</style>
