<template>
  <div>
    <div ref="dragBox">
      <slot></slot>
    </div>
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
    cell: {
      type: Number,
      default: 0,
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
  },
  mounted() {
    const eles = this.$slots.default;
    for (let i = 0; i < eles.length; i++) {
      if (eles[i].elm.nodeType === 1) {
        this.elesNode.push(eles[i].elm);
      }
    }
    for (let i = 0; i < this.elesNode.length; i++) {
      const row = Math.floor(i / this.cell);
      const topP = `${(this.cellHeight + this.margin) * row}`;
      const bottomP = `${(this.cellHeight + this.margin) * (row + 1)}`;
      const leftP = `${(this.cellWidth + this.margin) * (i - (row * this.cell))}`;
      const rightP = `${(leftP * 1) + (this.cellWidth + this.margin)}`;
      this.dropArr.push([topP, leftP, bottomP, rightP]);
      this.elesNode[i].style.top = `${topP}px`;
      this.elesNode[i].style.left = `${leftP}px`;
      this.elesNode[i].index = i;
    }
  },
  methods: {
    beforeDrag(e) {
      this.firstIndex = e.target.getAttribute('index');
    },
    drag(e) {
      const min = e.clientX > 0 && e.clientY > 0;
      const max = e.clientX < document.body.clientWidth && e.clientY < window.innerHeight;
      if (min && max) {
        this.X = e.clientX - e.target.parentNode.parentNode.offsetLeft;
        this.Y = e.clientY - e.target.parentNode.parentNode.offsetTop;
        for (let j = 0; j < this.elesNode.length; j++) {
          this.elesNode[j].style.zIndex = 1;
        }
        e.target.style.zIndex = 99;
        const elesNode = this.elesNode;
        for (let i = 0; i < elesNode.length; i++) {
          this.heIndex = elesNode[i].getAttribute('index') * 1;
          const DI = this.dropArr[this.heIndex];
          if (this.X > DI[1] && this.X < DI[3] && this.Y > DI[0] && this.Y < DI[2]) {
            this.firstIndex = e.target.getAttribute('index') * 1;
            this.index = this.heIndex;
            const test = (num, j) => {
              for (let n = 0; n < this.elesNode.length; n++) {
                if (this.elesNode[n].getAttribute('index') * 1 === j) {
                  this.elesNode[n].style.top = `${this.dropArr[j + num][0]}px`;
                  this.elesNode[n].style.left = `${this.dropArr[j + num][1]}px`;
                  this.elesNode[n].setAttribute('index', num + j);
                }
              }
            };
            if (this.firstIndex > this.heIndex) {
              for (let j = this.firstIndex - 1; j >= this.heIndex; j--) {
                test(1, j);
              }
            } else {
              for (let j = this.firstIndex + 1; j < this.heIndex + 1; j++) {
                test(-1, j);
              }
            }
            e.target.setAttribute('index', this.heIndex);
          }
        }
      }
    },
    afterDrag(e) {
      if (this.index !== '') {
        const offset = this.dropArr[this.index];
        e.target.style.top = `${offset[0]}px`;
        e.target.style.left = `${offset[1]}px`;
        this.index = '';
      }
    },
  },
};
</script>
