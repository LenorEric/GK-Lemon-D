import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.contacts',
  name: '通讯录',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.mobile.businesshall.ui.main.home.IndependentBusinessHomeActivity',
          matches: 'ImageView[id="com.android.contacts:id/img_close_btn"]',
        },
      ],
    },
  ],
});
