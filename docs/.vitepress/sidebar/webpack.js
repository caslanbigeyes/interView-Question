export default function sidebarWebpack() {
  return [
    {
      text: 'JavaScript 系列',
      collapsible: true,
      items: [{ "link": "/webpack/webpack", "text": "1.说说你对webpack的理解？解决了什么问题？" }, { "link": "/webpack/build_process", "text": "2.说说webpack的构建流程?" }, { "link": "/webpack/Loader", "text": "3.说说webpack中常见的Loader？解决了什么问题？" }, { "link": "/webpack/Plugin", "text": "4.说说webpack中常见的Plugin？解决了什么问题？" }, { "link": "/webpack/Loader_Plugin", "text": "5.说说Loader和Plugin的区别？编写Loader，Plugin的思路？" }, { "link": "/webpack/HMR", "text": "6.说说webpack的热更新是如何做到的？原理是什么？" }, { "link": "/webpack/proxy", "text": "7.说说webpack proxy工作原理？为什么能解决跨域?" }, { "link": "/webpack/performance", "text": "8.说说如何借助webpack来优化前端性能？" }, { "link": "/webpack/improve_build", "text": "9.如何提高webpack的构建速度？" }, { "link": "/webpack/Rollup_Parcel_snowpack_Vite", "text": "10.与webpack类似的工具还有哪些？区别？" }]
    }
  ]
}

