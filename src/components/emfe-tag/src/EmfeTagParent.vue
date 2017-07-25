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
  mounted() {
    console.log(this.data);
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
        this.data.splice(index, 1);
      }
    },
  },
};
</script>
