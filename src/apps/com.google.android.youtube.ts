import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
    {
      key: 0,
      name: '功能类-自动关闭迷你播放器',
      desc: '点击关闭迷你播放器',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[vid="modern_miniplayer_close"]',
        },
      ],
    },
  ],
});
