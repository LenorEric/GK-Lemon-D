import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '分段广告-菜鸟小程序免费领取',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          matches: '@Image < View <2 View >3 [text="免费领取"]',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-菜鸟小程序快递信息处遮挡红包广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
          matches: '@Image + [text="该包裹获得免单机会"]',
        },
      ],
    },
  ],
});
