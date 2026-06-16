import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限弹窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.selfservice5.activity.MealAllowanceActivityBlue',
            '.selfservice5.activity.RechargeRecordActivity',
          ],
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
