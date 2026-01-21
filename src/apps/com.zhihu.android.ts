import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
   {
          "key":1,
          "name":"全屏广告-弹窗广告",
          "rules":[
            {
              "activityIds":"com.zhihu.android.app.ui.activity.AdDialogActivity",
              "matches":'[id$="/ad_dialog_close"]',
              "fastQuery":true
            }
          ]
    }
  ],
});
