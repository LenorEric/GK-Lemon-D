import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      key: 1,
      name: '功能类-自动打卡',
      activityIds: ['com.tencent.wework.common.web.JsWebActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: ["[text*='勤打卡'][clickable=true]"],
          fastQuery: true,
          actionMaximum: 1,
        },
        {
          key: 1,
          action: 'clickCenter',
          matches: ['[text*="无效范围"] <<2 * -n [text="刷新"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动登录',
      activityIds: ['.enterprisemgr.controller.NormalEnterpriseInfoActivity'],
      rules: [
        {
          key: 0,
          matches: '[text="进入"][vid="ee4"]',
          fastQuery: true,
          actionMaximum: 1,
        },
      ],
    },
  ],
});
