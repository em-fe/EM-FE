<template>
  <div class="emfe-upload" :class="uploadName">
    <template v-if="type === 'icon'">
      <emfe-button :disabled="disabled" v-show="!src" theme="default" className="ddd" type="hint">上传图片</emfe-button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change">
      <div v-show="src" class="emfe-upload-icon-box">
        <img class="emfe-upload-icon-box-img" :src="src">
        <i class="emfe-upload-icon-box-close" @click="close">+</i>
      </div>
    </template>
    <template v-if="type === 'plus'">
      <button v-show="!src" class="emfe-upload-btn" :class="btnName">+</button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change">
      <img v-show="src" width="100%" :src="src">
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
      fileList: [],
      tempIndex: 1,
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
    beforeUpload: Function,
    onSuccess: {
      type: Function,
      default() {
        return {};
      },
    },
    onError: {
      type: Function,
      default() {
        return {};
      },
    },
    onExceededSize: {
      type: Function,
      default() {
        return {};
      },
    },
    onFormatError: {
      type: Function,
      default() {
        return {};
      },
    },
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
  methods: {
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
          this.onFormatError(file, this.fileList);
          return false;
        }
      }

      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.onExceededSize(file, this.fileList);
          return false;
        }
      }

      if (canUpload) {
        this.handleStart(file);

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
            if (res.code === 10000) {
              this.handleSuccess(res, file);
            } else {
              this.handleError(res);
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
        this.loadImg(res.data.resource_url);
        this.onSuccess(res, fileData, this.fileList);
      }
    },
    handleError(err, response, file) {
      const fileData = this.getFile(file);
      const fileList = this.fileList;

      fileData.status = 'fail';

      fileList.splice(fileList.indexOf(fileData), 1);

      this.onError(err, response, file);
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
    loadImg(src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.src = src;
      };
    },
    close() {
      this.src = '';
    },
  },
};
</script>
