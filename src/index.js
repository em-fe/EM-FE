import VueCookie from 'em-cookie';
// 组件
import EmfeBar from './components/emfe-bar/index';
import EmfeBarC from './components/emfe-bar-c/index';
import Grid from './components/emfe-grid/index';
import EmfeIcon from './components/emfe-icon/index';
import EmfeTooltip from './components/emfe-tooltip/index';
import EmfeTransition from './components/emfe-transition/index';
import EmfeMenu from './components/emfe-menu/index';
import EmfeHeader from './components/emfe-header/index';
import EmfeHeaderC from './components/emfe-header-c/index';
import EmfeFooter from './components/emfe-footer/index';
import EmfeFooterC from './components/emfe-footer-c/index';
import EmfeCopy from './components/emfe-copy/index';
import EmfeUpload from './components/emfe-upload/index';
import EmfeDrag from './components/emfe-drag/index';
import EmfeColor from './components/emfe-color/index';
import EmfeInput from './components/emfe-input/index';
import EmfeInputmore from './components/emfe-inputmore/index';
import EmfeTel from './components/emfe-tel/index';
import EmfeTelC from './components/emfe-tel-c/index';
import EmfeSmscode from './components/emfe-smscode/index';
import EmfeSmscodeC from './components/emfe-smscode-c/index';
import EmfeImgcode from './components/emfe-imgcode/index';
import EmfeImgcodeC from './components/emfe-imgcode-c/index';
import EmfeSteps from './components/emfe-steps/index';
import EmfeStepsC from './components/emfe-steps-c/index';
import EmfeStepsB from './components/emfe-steps-b/index';
import EmfeNumber from './components/emfe-number/index';
import EmfeDate from './components/emfe-date/index';
import EmfeDateM from './components/emfe-date-m/index';
import EmfeTime from './components/emfe-time/index';
import EmfeTimeM from './components/emfe-time-m/index';
import EmfeDatetime from './components/emfe-datetime/index';
import EmfeDatetimeM from './components/emfe-datetime-m/index';
import EmfeLink from './components/emfe-link/index';
import EmfeSwitch from './components/emfe-switch/index';
import EmfeTitle from './components/emfe-title/index';
import EmfeTitleC from './components/emfe-title-c/index';
import Radio from './components/emfe-radio/index';
import RadioC from './components/emfe-radio-c/index';
import Button from './components/emfe-button/index';
import ButtonC from './components/emfe-button-c/index';
import EmfePagination from './components/emfe-pagination/index';
import EmfePaginationC from './components/emfe-pagination-c/index';
import EmfeSelect from './components/emfe-select/index';
import EmfeModal from './components/emfe-modal/index';
import EmfeModalC from './components/emfe-modal-c/index';
import EmfeCheckout from './components/emfe-checkout/index';
import EmfeCheckoutC from './components/emfe-checkout-c/index';
import EmfeDrop from './components/emfe-drop/index';
import Table from './components/emfe-table/index';
import EmfeTextarea from './components/emfe-textarea/index';
import EmfeDatapanel from './components/emfe-datapanel/index';
import Tag from './components/emfe-tag/index';
import EmfePanel from './components/emfe-panel/index';
import EmfePanelC from './components/emfe-panel-c/index';
import EmfeSlide from './components/emfe-slide/index';
import EmfeHottip from './components/emfe-hottip/index';
import EmfeCrumb from './components/emfe-crumb/index';
import EmfeCrumbC from './components/emfe-crumb-c/index';
import EmfeEdit from './components/emfe-edit/index';
import EmfeOpations from './components/emfe-opations/index';
import EmfeCountdown from './components/emfe-countdown/index';
import EmfeLogin from './components/emfe-login/index';
import EmfeLoginC from './components/emfe-login-c/index';
import EmfeTitleline from './components/emfe-titleline/index';
import EmfeIscroll from './components/emfe-iscroll/index';
// 服务
import EmfeMessage from './components/emfe-message/index';
import EmfeFormTest from './components/emfe-formtest/index';
// 指令
import emfeDocumentclick from './directives/emfe-documentclick';
import emfeDocumentfocus from './directives/emfe-documentfocus';

const emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeBar,
  EmfeBarC,
  EmfeIcon,
  EmfeTooltip,
  EmfeTransition,
  EmfeModal,
  EmfeModalC,
  EmfeMenu,
  EmfeHeader,
  EmfeHeaderC,
  EmfeFooter,
  EmfeFooterC,
  EmfeCopy,
  EmfeUpload,
  EmfeDrag,
  EmfeColor,
  EmfeInput,
  EmfeInputmore: EmfeInputmore.EmfeInputmore,
  EmfeInputmoreGroup: EmfeInputmore.EmfeInputmoreGroup,
  EmfeNumber,
  EmfeTel,
  EmfeTelC,
  EmfeSmscode,
  EmfeSmscodeC,
  EmfeImgcode,
  EmfeImgcodeC,
  EmfeSteps,
  EmfeStepsC,
  EmfeStepsB,
  EmfeButton: Button.EmfeButton,
  EmfeButtonGroup: Button.EmfeButtonGroup,
  EmfeButtonC: ButtonC.EmfeButtonC,
  EmfeButtonGroupC: ButtonC.EmfeButtonGroupC,
  EmfeSwitch,
  EmfeTitle,
  EmfeTitleC,
  EmfeRadio: Radio.EmfeRadio,
  EmfeRadioGroup: Radio.EmfeRadioGroup,
  EmfeRadioC: RadioC.EmfeRadioC,
  EmfeRadioGroupC: RadioC.EmfeRadioGroupC,
  EmfeTable: Table.EmfeTable,
  EmfeTableHead: Table.EmfeTableHead,
  EmfeTableBody: Table.EmfeTableBody,
  EmfeDate,
  EmfeDateM,
  EmfeTime,
  EmfeTimeM,
  EmfeDatetime,
  EmfeDatetimeM,
  EmfePagination,
  EmfePaginationC,
  EmfeSelect,
  EmfeCheckout,
  EmfeCheckoutC,
  EmfeDrop,
  EmfeLink,
  EmfeTextarea,
  EmfeDatapanel,
  EmfeTag: Tag.EmfeTag,
  EmfeTagParent: Tag.EmfeTagParent,
  EmfePanel,
  EmfePanelC,
  EmfeSlide,
  EmfeCrumb,
  EmfeCrumbC,
  EmfeHottip,
  EmfeEdit,
  EmfeOpations,
  EmfeCountdown,
  EmfeLogin,
  EmfeLoginC,
  EmfeTitleline,
  EmfeIscroll,
};

const emfeDir = {
  emfeDocumentclick,
  emfeDocumentfocus,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(emfeCpt).forEach((key) => {
    Vue.component(key, emfeCpt[key]);
  });

  Object.keys(emfeDir).forEach((key) => {
    Vue.directive(key, emfeDir[key]);
  });

  Vue.prototype.$EmfeMessage = EmfeMessage;
  Vue.prototype.$EmfeFormTest = EmfeFormTest;
  Vue.use(VueCookie);
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  EmfeMessage,
  EmfeFormTest,
};
