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
          action: 'clickCenter',
          matches: ["[text*='勤打卡'][clickable=true]"],
          fastQuery: true,
          actionMaximum: 1,
        },
        {
          action: 'clickCenter',
          matches: ['[text*="无效范围"] <<2 * -n [text="刷新"]'],
        },
      ],
    },
  ],
});
