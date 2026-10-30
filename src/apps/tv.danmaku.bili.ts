import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '全屏广告-视频暂停广告倒计时',
      desc: '广告即将播放时取消',
      rules: [
        {
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity',
          ],
          matches: 'TextView[text="后将展示广告"] + @TextView[text="取消"]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-视频暂停广告',
      desc: '已经弹出后关闭',
      rules: [
        {
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity',
          ],
          matches: '@View[clickable=true] > [desc="close"] + Button',
        },
      ],
    },
  ],
});
