/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx100ac992d168156e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '39e7fbec8f597aac4029ce014f447681',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '哒哒',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU20644TyvuLFwQ9gRnXcMuQq5iZNMXZopfjuvOT',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0003',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '哒哒农历', year: '1999', date: '03-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哒哒阳历', year: '1999', date: '04-18',
        },
        {
          type: '节日', name: '搭讪哒哒纪念日', year: '2023', date: '01-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起纪念日
        { keyword: 'love_day', date: '2023-02-25' },
        // 搭讪哒哒纪念日
        { keyword: 'meet_day', date: '2023-01-29' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '哒哒',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU20641T0rJSiKIAESGrUYYxoJyT9n0IvSK6r2ra',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0003',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '哒哒农历', year: '1999', date: '03-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哒哒阳历', year: '1999', date: '04-18',
        },
        {
          type: '节日', name: '搭讪哒哒纪念日', year: '2023', date: '01-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起纪念日
        { keyword: 'love_day', date: '2023-02-25' },
        // 搭讪哒哒纪念日
        { keyword: 'meet_day', date: '2023-01-29' },
      ],
    },
  ],
  USE_PASSAGE: 'push-deer',

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU20641T0rJSiKIAESGrUYYxoJyT9n0IvSK6r2ra',
    }
  ],

}

module.exports = USER_CONFIG

