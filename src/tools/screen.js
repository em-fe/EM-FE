import Contant from '../contant';

export default {
  screenMd() {
    return document.body.clientWidth > Contant.SCREEN_MD;
  },
};
