import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.selfservice5.activity.RechargeRecordActivity'],
          matches: '[text="暂不"]',
        },
      ],
    },
  ],
});
