<template>
  <div :class="className">
    <emfe-drag :className="className" v-for="(modalFieldItem, modalFieldIndex) in datas" :key="modalFieldIndex" :index="modalFieldIndex" @afterDrag="afterDrag" @beforeDrag="beforeDrag" @drag="drag">{{modalFieldItem.title}}</emfe-drag>
  </div>
</template>
<script>
export default {
  name: 'EmfeDrop',
  data() {
    return {
      firstIndex: '',
      dropArr: [],
      elesNode: [],
      index: '',
      heIndex: '',
    };
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    margin: {
      type: Number,
      default: 0,
    },
    cellWidth: {
      type: Number,
      default: 200,
    },
    cellHeight: {
      type: Number,
      default: 200,
    },
    className: {
      type: String,
      default: '',
    },
  },
  mounted() {

  },
  methods: {
    beforeDrag() {
    },
    drag(e, left, top) {
      console.log(e, left, top);
    },
    afterDrag() {
    },
  },
};
</script>
