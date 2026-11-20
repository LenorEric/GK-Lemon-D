import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 0,
      name: '功能类-快速开启无障碍',
      desc: '允许开启无障碍服务，选中“无障碍”按钮后返回，并在服务已开启时关闭快捷方式开关',
      enable: false,
      activityIds: ['.SubSettings'],
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '允许开启无障碍服务',
          matches: [
            '[vid="permissionDialog_description"][text*="无障碍"]',
            'Button[vid="permission_enable_allow_button"][clickable=true]',
          ],
        },
        {
          key: 1,
          name: '选中“无障碍”按钮',
          matches: [
            '[vid="action_bar_title_expand"][text$="”快捷方式"]',
            '@Switch[clickable=true] > CheckBox[id="android:id/checkbox"][checked=false] + [text="“无障碍”按钮"][id="android:id/title"]',
          ],
        },
        {
          key: 3,
          name: '选中“无障碍”按钮后返回',
          action: 'back',
          matches: [
            '[vid="action_bar_title_expand"][text$="”快捷方式"]',
            'Switch[clickable=true] > @CheckBox[id="android:id/checkbox"][checked=true] + [text="“无障碍”按钮"][id="android:id/title"]',
          ],
        },
        {
          key: 2,
          name: '服务已开启时关闭快捷方式',
          matches: [
            'Switch[desc^="使用“"] >2 Switch[id="android:id/switch_widget"][checked=true]',
            'Switch[vid="switchWidget"][desc="快捷方式设置"][checked=true][clickable=true]',
          ],
        },
      ],
    },
  ],
});
