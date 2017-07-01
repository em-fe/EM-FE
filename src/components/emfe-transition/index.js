import { addClass, removeClass } from '../../tools/assist';

const commonTransitionClass = 'emfe-gradual';

const Transition = name => (name !== 'gradual' ? {} : {
  beforeEnter(el) {
    addClass(el, commonTransitionClass);
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  },

  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  },

  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    removeClass(el, commonTransitionClass);
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },

  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },

  leave(el) {
    if (el.scrollHeight !== 0) {
      addClass(el, commonTransitionClass);
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  },
  afterLeave(el) {
    removeClass(el, commonTransitionClass);
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  },
});


const transitionProps = {
  name: {
    type: String,
    default: 'v',
  },
  css: {
    type: Boolean,
    default: true,
  },
  mode: String,
  type: String,
  duration: [Number, String, Object],
};

export default {
  name: 'EmfeTransition',
  functional: true,
  props: transitionProps,
  render(createElement, context) {
    const data = {
      props: context.props,
      on: Transition(context.props.name),
    };

    return createElement('transition', data, context.children);
  },
};
