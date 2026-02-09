import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.AdDialogActivity',
          matches: '[id$="/ad_dialog_close"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24755227',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-评论通知权限',
      rules: [
        {
          activityIds: 'com.zhihu.androidy.comment.ui.activity.CommentListActivity',
          matches: [
            '[text="开启评论推送通知"]',
            '[vid="btn_close"]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24755227',
        },
      ],
    },
  ],
});
