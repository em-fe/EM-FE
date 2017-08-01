<template>
  <div :class="classNames">
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
    addClass: {
      type: String,
      default: '',
    },
    skin: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      childrens: [],
    };
  },
  computed: {
    classNames() {
      return [
        {
          [`${this.addClass}`]: !!this.addClass,
        },
      ];
    },
  },
  methods: {
    getIndex(index) {
      if (this.className === 'default') {
        this.$children.forEach((element, eleIndex) => {
          element.activeOk = parseInt(index, 10) === eleIndex;
        });
      } else if (this.className === 'checket') {
        this.$children[index].activeOk = true;
      } else if (this.className === 'screen' && this.skin === 'blue') {
        this.$children[index].activeOk = !this.$children[index].activeOk;
      } else if (this.className === 'screen' && this.skin === 'yellow') {
        this.data.splice(index, 1);
      }
    },
  },
};
</script>
