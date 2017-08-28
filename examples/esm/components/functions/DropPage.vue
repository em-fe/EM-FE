<template>
  <div class="emfe-drop">
    <emfe-drop class="emfe-drop-drag" :cell="cell" :margin="margin">
      <emfe-drag v-for="(item, index) in list" :key="index" className="emfe-drop-drag-no1" @afterDrag='afterDrag' @beforeDrag='beforeDrag' @drag='drag' :index='index'>{{item.text}}</emfe-drag>
    </emfe-drop>
  </div>
</template>
<script>
export default {
  name: 'drop-page',
  data() {
    return {
      cell: 5,
      margin: 5,
      list: [
        {
          text: 1,
        },
        {
          text: 2,
        },
        {
          text: 3,
        },
        {
          text: 4,
        },
        {
          text: 5,
        },{
          text: 6,
        },
        {
          text: 7,
        },
        {
          text: 8,
        },
        {
          text: 9,
        },
        {
          text: 10,
        },
      ],
    };
  },
  methods: {
    beforeDrag(e) {
      console.log(this.$children[0]);
      this.$children[0].beforeDrag(e);
    },
    drag(e) {
      this.$children[0].drag(e);
    },
    afterDrag(e) {
      this.$children[0].afterDrag(e);
    },
  },
};
</script>
