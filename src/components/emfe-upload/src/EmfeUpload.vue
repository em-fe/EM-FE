<template>
  <div class="emfe-upload" :class="uploadName">
    <button class="emfe-upload-btn" :class="btnName">+</button>
    <input class="emfe-upload-file" :class="fileName" type="file" @change="change">
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import ajax from './ajax';

export default {
  name: 'upload',
  props: {
    type: {
      validator(value) {
        return _.has(value, ['plus', 'icon']);
      },
      default: 'plus',
    },
    imageMore: {
      type: [Boolean, String],
      default: false,
    },
    imageNumber: {
      type: [Number, String],
      default: 1,
    },
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
    multiple: {
      type: Boolean,
      default: false,
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
    showUploadList: {
      type: Boolean,
      default: true,
    },
    format: {
      type: Array,
      default() {
        return [];
      },
    },
    accept: {
      type: String,
    },
    maxSize: {
      type: Number,
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default() {
        return {};
      },
    },
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
    onRemove: {
      type: Function,
      default() {
        return {};
      },
    },
    onPreview: {
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
    defaultFileList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      fileList: [],
      tempIndex: 1,
    };
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
      // console.log(postFiles);
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

      this.handleStart(file);

      const formData = new FormData();
      formData.append(this.name, file);

      ajax({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file,
        data: this.data,
        filename: this.name,
        action: this.action,
        onSuccess: (res) => {
          this.handleSuccess(res, file);
        },
        onError: (err, response) => {
          this.handleError(err, response, file);
        },
      });

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
  },
};
</script>
