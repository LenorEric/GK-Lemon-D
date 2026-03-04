import { defineGkdGlobalGroups } from '@gkd-kit/define';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const YOUTH_MODE_ORDER = -8; // 青少年模式
export const POPUP_AD_ORDER = -7; // 弹窗广告

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '弹窗广告-安全全局',
    desc: '关闭应用的弹窗广告',
    order: POPUP_AD_ORDER,
    fastQuery: true,
    rules: [
      {
        key: 0,
        matches: ['[vid="ad_close"][clickable=true]'],
      },
    ],
  },  
  {
    key: 1,
    name: '更新提示-安全全局',
    desc: '关闭应用的更新提示',
    order: UPDATE_PROMPT_ORDER,
    fastQuery: true,
    rules: [
      {
        key: 0,
        matches: ['[text="暂不升级"]'],
      },
    ],
  },
]);
