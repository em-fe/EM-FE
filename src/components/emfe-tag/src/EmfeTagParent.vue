<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'EmfeTagParent',
  props: {
    className: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      childrens: [],
    };
  },
  methods: {
    getIndex(index) {
      if (this.className === 'default') {
        this.$children.forEach((element, eleIndex) => {
          element.activeOk = parseInt(index, 10) === eleIndex;
        });
      } else if (this.className === 'checket') {
        this.$children[index].activeOk = true;
      } else if (this.className === 'screen') {
        this.$children[index].activeOk = !this.$children[index].activeOk;
      }
    },
  },
};
</script>
