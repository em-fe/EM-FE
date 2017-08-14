<template>
  <div class="emfe-upload" :class="uploadName">
    <template v-if="type === 'icon'">
      <emfe-button :disabled="disabled" v-show="!src" theme="default" className="ddd" type="hint">上传图片</emfe-button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change">
      <div v-show="src" :style="{opacity: canShow ? 1 : 0}" class="emfe-upload-icon-wrap">
        <div class="emfe-upload-icon-wrap-box" :class="[`emfe-upload-icon-wrap-box-${align}`]">
          <img class="emfe-upload-icon-wrap-box-img" :class="[`emfe-upload-img-${align}`]" :src="src" ref="img">
        </div>
        <i class="emfe-upload-icon-wrap-close" @click="close"></i>
      </div>
    </template>
    <template v-if="type === 'plus'">
      <button v-show="!src" class="emfe-upload-btn" :class="btnName">+</button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change">
      <div v-show="src" class="emfe-upload-plus-box" :class="[`emfe-upload-plus-box-${align}`]" :style="{opacity: canShow ? 1 : 0}" @click="close">
        <img :class="[`emfe-upload-img-${align}`]" v-show="src" :src="src" ref="img">
      </div>
    </template>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import ajax from './ajax';

let canUpload = true;

export default {
  name: 'upload',
  data() {
    return {
      src: '',
      canShow: false,
      fileList: [],
      tempIndex: 1,
      align: '',
    };
  },
  props: {
    type: {
      validator(value) {
        return _.has(value, ['plus', 'icon']);
      },
      default: 'plus',
    },
    disabled: Boolean,
    className: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default() {
        return {};
      },
    },
    data: {
      type: Object,
    },
    name: {
      type: String,
      default: 'file',
    },
    withCredentials: {
      type: Boolean,
      default: false,
    },
    format: {
      type: Array,
      default() {
        return [];
      },
    },
    maxSize: {
      type: Number,
    },
    url: String,
  },
  computed: {
    uploadName() {
      return [
        `emfe-upload-${this.type}`,
        {
          [`${this.className}-upload`]: !!this.className,
        },
        {
          [`${this.className}-upload-${this.type}`]: !!this.className,
        },
        {
          'emfe-upload-disabled': this.disabled,
        },
      ];
    },
    btnName() {
      return [
        [`emfe-upload-${this.type}-btn`],
        {
          [`${this.className}-upload-${this.type}-btn`]: !!this.className,
        },
      ];
    },
    fileName() {
      return [
        [`emfe-upload-${this.type}-file`],
        {
          [`${this.className}-upload-${this.type}-file`]: !!this.className,
        },
        {
          'emfe-upload-file-disabled': this.disabled,
        },
      ];
    },
  },
  mounted() {
    if (this.url) {
      const imgObject = new Image();
      imgObject.src = this.url;
      imgObject.onload = () => {
        this.src = this.url;
        setTimeout(this.setAlign.bind(this), 0);
      };
    }
  },
  methods: {
    setAlign() {
      const { clientWidth, clientHeight } = this.$refs.img;
      console.log(clientWidth, clientHeight, 8989);
      if (clientWidth !== 0 && clientHeight !== 0) {
        console.log(clientWidth, clientHeight, 888);
        if (clientWidth > clientHeight) {
          this.align = 'horizontal';
        } else if (clientWidth < clientHeight) {
          this.align = 'vertical';
        } else {
          this.align = 'normal';
        }
      }
      this.canShow = true;
    },
    change(e) {
      const files = e.target.files;

      if (!files) {
        return;
      }

      const postFiles = Array.prototype.slice.call(files);

      postFiles.forEach((file) => {
        this.postHandle(file);
      });
    },
    postHandle(file) {
      // check format
      if (this.format.length) {
        const fileFormat = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat);
        if (!checked) {
          this.$emit('formatError', file, this.fileList);
          return false;
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.$emit('exceededSize', file, this.fileList);
          return false;
        }
      }

      if (canUpload) {
        this.handleStart(file);

        this.$emit('before');

        this.canUpload = false;

        ajax({
          headers: this.headers,
          withCredentials: this.withCredentials,
          file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onSuccess: (res) => {
            canUpload = true;
            console.log('res', res);
            if (res.code === 10000) {
              this.handleSuccess(res, file);
            } else {
              this.handleError('上传失败', res, file);
            }
          },
          onError: (err, response) => {
            canUpload = true;
            this.handleError(err, response, file);
          },
        });
      }

      return false;
    },
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const fileData = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true,
      };
      this.fileList.push(fileData);
    },
    handleSuccess(res, file) {
      const fileData = this.getFile(file);

      if (fileData) {
        fileData.status = 'finished';
        fileData.response = res;
        this.loadImg(res.data.url, res, fileData);
      }
    },
    handleError(err, response, file) {
      const fileData = this.getFile(file);
      const fileList = this.fileList;

      fileData.status = 'fail';

      fileList.splice(fileList.indexOf(fileData), 1);

      this.$emit('error', err, response, file);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every((item) => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    loadImg(src, res, fileData) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.src = src;
        this.setAlign();
        this.$emit('success', res, fileData, this.fileList);
      };
    },
    close() {
      this.src = '';
      this.canShow = false;
      this.$emit('close');
    },
  },
};
</script>
