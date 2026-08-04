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
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '[text$="详情弹窗"] >2 View + View >4 Image +2 View > Image',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-菜鸟小程序免费领取',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matchRoot: true,
          activityIds: 'com.alibaba.triver.container.TriverMainActivity',
          matches:
            '@Image[top>getPrev(3).height.div(5)][bottom<getPrev(3).height.div(20).times(17)] < View <2 View >3 [text="免费领取"] <<n [parent=null]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-菜鸟小程序快递信息处遮挡红包广告',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matchRoot: true,
          activityIds: 'com.alibaba.triver.container.TriverMainActivity',
          matches:
            '@Image[top>getPrev(1).height.div(5)][bottom<getPrev(1).height.div(20).times(17)] + [text="该包裹获得免单机会"] <<n [parent=null]',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-开启物流通知',
      rules: [
        {
          key: 0,
          activityIds:
            'com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity',
          matches: '@Image + [text="及时获取物流消息"]',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-开启消息通知',
      rules: [
        {
          key: 0,
          activityIds: 'com.taobao.tao.TBMainActivity',
          matches: '@Image + [text="不错过最新消息通知"]',
        },
      ],
    },
  ],
});
