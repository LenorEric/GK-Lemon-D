import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小米音箱',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: '.main.MainActivity',
          matches: '[desc="确认协议并开通"] -n ImageView[clickable=true]',
        },
      ],
    },
  ],
});
