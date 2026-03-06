import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.maincontainer.activity.MainActivity',
          matches: '* > Image[text$="tps-96-96"]',
        },
      ],
    },
  ],
});
