import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '[text$="详情弹窗"] >2 View + View >4 Image +2 View > Image',
        },
      ],
    },
  ],
});
