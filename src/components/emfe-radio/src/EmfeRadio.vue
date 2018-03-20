<template>
  <label :class="[{'emfe-radio-checked': status},labelClass]" class="emfe-radio clearfix">
    <i class="emfe-radio-img" :style="baseStyle" :class="{'emfe-radio-img-checked': status, 'emfe-radio-img-disabled': disabled}"></i>
    <input :class="inputClass" type="radio" @change="changeFn" :name="name" :disabled="disabled" class="emfe-radio-input">
    <span :class='textClass' class="emfe-radio-text"><slot></slot></span>
    <emfe-tooltip className="emfe-radio" theme="light" :placement="placement" v-if="tip">
      <emfe-icon type="tishi" slot="render" className="emfe-radio-tip"></emfe-icon>
      <div slot="tip" v-html="tip"></div>
    </emfe-tooltip>
    <div class="emfe-radio-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-radio-slide-wrap" v-show="status">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </label>
</template>
<script>
  export default {
    name: 'EmfeRadio',
    data() {
      const base1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAf9JREFUOBGVVEsvA1EUPnfaqXp0YUGj4hmPNbFRG03EUmLjBxASsWFjxc6K2BLFRpDgH4iEjdpgSdgIoqIbi3rUnc695pu6zWTGSJ1kOrfnnO+7d875zmXkYy3rMsrzxqBkLIoUJuVLKKgf3o2zl98gzO2MJY14RJOLXFBPolHL1VdROXKe3ujz+EGEQwG6yHI2m57UT93Y4v/GNT7ducGz21emaZjSY/DtXJtm3cqXbE3y0SLQuWjbzA81J3k+/ebBexyZDymRi42dHBRbNfqwCxJKNWyI06MUINPwE9Hl0nIiKGrsasBD9PxONHVkUteWYT9Yw6esrpJoPh6oQD3hY+gOSeP+dkwvC9q0BZKBfYNec1Lh7Hd1mNHRiE4ggeUFUcem8UVMb9LQ4v4GLadIkLBwZnpI4AcxYsqAQWfBYS1ZbX2k0GKVkEpbW/mYOwZ5QGs/H+OD+ofbIpKZpyx9OjHxmD+/OwahQvUaZH/yKMIonLK53gChsG6DDzFlwNhqtzg0zE5Io/O9G1GkQlfQneH2AEUrmf1g7ewYyA5uhbCwl8X5g6ggrlJUrQQL8ULEELM6of1uXuMzkH0p6saGyPWdNwTaNvj7rjWYfkOLgcbp3XPmqSiOipGxrpFuCFVpDJ1FU1DPrLCukQk95fwkD5EKqosNgi34ZOavi+0b/CrFwfT9aVgAAAAASUVORK5CYII=';
      const base2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jY2TsW9SURTGf/ddLiyCW6V9eYOYxkZMMHFhYahpKl38E5hgUCf+kTrpIHWQP8HEpCSEpQuLiSStqWlsNORZdBMwhnc5PAfgQdIW/bZ7v+87+e4956gwDFlGrS73gDKwB9yeXZ8Dh8BBpaQ/LevVvECtLnFgP5EIn25tiuOmhVRyyvUHCr+nOT3Tk9FI1YBqpaT/RAVm5veeKzv5hxZjuBLWQvuDoevrFrBXKenAmXEvvA3ZKeSvNwMYA4W8xXPlEbAPoF6/HWcTibDz5PFIz82DoeLjcYzeTw1Aek14cH9M8kYYJXnXSMhopHIOUL57RyJzf6BotOJ0fY21U3HX1zRacfoDFSXZ2hQNlB2g6G5IFLNzEiOw6lL8wCo6J7Ho7KYFoOgAmZvJRSvnsa/CxY8FN+tQxrlW/Q9MJtNgDnD+a7CInF6TayywfmvBDX8rgG8OcOh/X0TLZcfETXjJHDchuew4Ovs9DdB0gDefv2ixdkqkkiG72wGeK5gYmBh4rrC7HUSTaS2cnmkBDuaT+NJz5Vkhb//r/UdtQ9fXryol/Xz+idWur5tHbYNdUcPayNwCqrBqmdaF1Gzy+kOFf7FimZZRq0sWqABFIAMEwFegyXSdj5f1fwFPwdJkoZv1fwAAAABJRU5ErkJggg==';
      const base3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfElEQVQ4jY3TP0iWURQG8F+vH4lIfxSdg0QUDGqTpogGQbTBCNpMrAhpacxoEmx0MDJQFAdxsBQ0ggIdWtpFIkRcaglMP2yoRPka7n3x+uEnHri8977Pec695znnnOla7ldmbXiIDlxGCZv4gEl8TZ2zZF+DN1jBFu7hPC7EfRGfMIrqnFSI37N4jx00Y7fsVatxvcI0ltCJ/fwFI/GGu8eQUyuiB3/xMk/hSvzZF/OFFszHYEW8RVPEDnAfvWgu4AFeJze34gsuJjffwQ20C4JuYxwDmaD2YuI8XEbOrQFDyXkJNzOhVN8S4FZlCY5gm7iUVfI8hZWwl8VIrQmwfAIpxZrwI8NH3E6AQUH5cvuFF8m5C58zTGBA6DqCHtexgN9Cdd45rADU4xHGClgTaj4pNFIpBumpkEYVpoSOXM9FfIo6zOFcBSJhLuaFuXnG4TDtxZy2sIHnuIbauK4K2qzhO7qxnwaAP3gs1LoRM/gpDNis0EgdeIJ/Oek/3CpVomZK2VMAAAAASUVORK5CYII=';
      const base4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABgklEQVQ4jX3Uz4uNURwG8M99ZyzGXUwzCwsyopnUrEgpWaiJyaixtDGT2FDclFJWsiQrsdCQxH9gJprJhpQVs5iaMlMUUTaUuBaXxuJ8T0632/usvufH83x/vM95G621ji6M4ByOYTf68BGLuI/lbkJVxH24hrcRn8UwmpjGeyzgAQZKkUZRySPswgl86c4WaOJu3DuCdllJK0qfrBGAX5jFKm6X7QzjKmayMrbhIb7hJ55iTyF2MRLuyyKz0tDW48IWvMYpDEULU3iVSZHsFs5nkQnMF1muYHuPVpq4Wazng6vCDrwrDg/3EMg4hE0Rf5Ds0KjQQX8NsQ4dbFT4hLHi4HkN6UUQYSc+k9p5Kbkz40YId6ONy8V6OkRVksmOYjQOv+JA7H+XvPEMB/Em7gxIn/kO/x3bwklp2tkrdbgnPY0zuRKS+9awhK015M14jHFcyJvlAzwtDXUF17Efg1H6OC5Jhvwj2aDdS+Sv9Ir3YgNz0i/gB55IMzseyX6X5f0Dyy5Sl+7I6QoAAAAASUVORK5CYII=';
      const base5 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABfUlEQVQ4jX3Uv0uXURQG8M/3tQb7DpFDQ5FhJIJTEATREISGCa4tJqGLRkkQBE3RWDRFEYEWUX+CYRQtitBUDUGQglJR0KJLuRjYcM/Vyzd7n+ncH+c5zznvc9/G5kOt6MQEBtGDNnzFK0zjQ2tCVcRtuIX3EY+jA00MYRkv8ATtJUmjUPIMR3AeP/7Rl9DEo7jXj/VSyWRIP1tDAL8xgk+4X7bTgZu4kJlxEE+xil+YxbGC7GoUPJ5JRqShLcWF/XiLi9gXLZzDQk6KYvdwOZOcwUxR5QYO7dBKE3eL9UzkqnAYn4vDvh0IMk5jd8Qrkh0aFTawqyaxDhvYrPAN3cXBm5qkuUiELnwntTMvuTPjThC3Yh3Xi/VQkKokkw3gaBz+xMnYX5O88RKn8C7utEuf+QHbjp3EsDTt7JU6TElPYywrIblvEa9xoCZ5D56jF1fyZvkAR6WhfsRtnMDekN6La5Ih/0g22FLc+M+v4JLk0q6o/iVUPrY9ly38BWpZTo1+XZ+/AAAAAElFTkSuQmCC';
      return {
        status: this.statu,
        backgUrl: {
          bule: base1,
          purple: base2,
          green: base3,
          lightBlue: base4,
          orange: base5,
        },
      };
    },
    props: {
      slideShow: {
        type: Boolean,
        default: false,
      },
      index: {
        tyep: String,
        required: true,
      },
      name: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
      statu: {
        tyep: Boolean,
        default: false,
      },
      className: {
        type: String,
        default: '',
      },
      inline: String,
      change: Function,
      tip: {
        type: String,
        default: '',
      },
      placement: {
        type: String,
        default: 'bottom',
      },
      styleIndex: {
        type: String,
        default: 'bule',
      },
    },
    computed: {
      labelClass() {
        // return this.className ? `${this.className}-radio` : '';
        return [
          {
            [`${this.className}-radio`]: !!this.className,
            'emfe-radio-inline': this.inline,
            'emfe-radio-disabled': this.disabled,
          },
        ];
      },
      inputClass() {
        return this.className ? `${this.className}-radio-input` : '';
      },
      textClass() {
        return [
          {
            [`${this.className}-radio-input-text`]: !!this.className,
            'emfe-radio-text-notip': !this.tip,
            [`${this.className}-radio-input-text-checked`]: !!this.className && this.status,
          },
        ];
      },
      baseStyle() {
        const style = {};
        if (this.status) {
          style.backgroundImage = `url(${this.backgUrl[this.styleIndex]})`;
        } else {
          style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAWFJREFUOBGdVM1OhDAQpoVE5UzYo0B4AuNJ7xx9iH0CPbgPoW/EfT2tPgF/HpdwopHVBFjn25SVBYmVScrQ6XzfNNN+ZdqEJUmyoKWABjxsSyP0PA9+ZGwYybLspm3bJ4pfm6b5aRjGBXLqut5VVXXOGHttmmbl+/56iD3O4zi+p52Isiyb/YRhLYqiPeUuj8D+DxHc0aDC9QTFTxg5yEXhPodGFW5RRYWko5NkAq0AGcdH1/Vn27Zb8pgqGXItyzJlPzVGW8SpvLuue6bEMEhK0/SLQpfYUYDTGawrTyU2AJHdHbEyupcosYtDj3rx2b8gyukEdnMZJHYLohA3di6RxIZcamcjhGj/SwYMSeYNHIcecc5XRVFUpCFlLuTmec7JP56A6Lo/zJDI8oSkm0CIdME+/hItFRRDnY2eEegOkiFNXf32jFDRDVrhOM5LtwH4EVG3KKWDh82WsZz85MP2DRyubnWoFdQHAAAAAElFTkSuQmCC)';
        }
        return style;
      },
    },
    methods: {
      changeFn() {
        let index = 0;
        this.$parent.$children.forEach((element) => {
          element.status = this.index === element.index;
          if (element.status) {
            index = element.index;
          }
        });
        if (this.change) {
          this.change(index);
        }
        this.$emit('change', index);
      },
    },
    watch: {
      statu(val, oldVal) {
        if (val !== oldVal) {
          this.status = val;
        }
      },
    },
  };
</script>
