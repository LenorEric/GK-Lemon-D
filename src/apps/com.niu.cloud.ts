import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.niu.cloud',
  name: '小牛电动',
  groups: [
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivityNew',
          matches: '[vid="closeDialogIv"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/78f2afd2-de8b-46b5-ae6c-6df58862f00e',
          snapshotUrls: 'https://i.gkd.li/i/20939822',
        },
      ],
    },
  ],
});
