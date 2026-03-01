import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '权限提示-通知权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: [
            '.index.v2.IndexActivityV2',
            '.notification.NotificationAuthorizationTranslucentActivity',
            'com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity',
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - LinearLayout > [text*="通知"]',
        },
      ],
    },
  ],
});
