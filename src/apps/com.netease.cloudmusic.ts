import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.activity.PlayerActivity'],
          matches: '[vid="bottomSheetClose"]',
        },
        {
          fastQuery: true,
          activityIds: ['.music.biz.rn.activity.LayerReactNativeActivity'],
          matches:
            '@ViewGroup[clickable=true] - ViewGroup > ViewGroup > [text^="识别您正在使用"]',
        },
      ],
    },
  ],
});
