# 2/11


还有很多事情力不从心
 - 创业计划
 - 算法
 - 多多开店
 - seo个人博客



# 简历优化

- 小程序开发
- electron开发

## 梳理下做的内容及给公司带来了哪些效益
-  1.小程序开发
  - 1.1.小程序首页滚动加载卡顿
    - 1.1.1.优化方案
      - 1.1.1.1.图片懒加载
      - 1.1.1.2.减少请求次数
      - 1.1.1.3.使用缓存
      - 1.1.1.4.减少请求体大小
      - 1.1.1.5.使用cdn
      - 1.1.1.6.使用webp格式图片
      - 1.1.1.7.使用gzip



// key是模块名称 值是依赖，依次尝试加载ABCD模块  输出所有模块加载完的顺序。
const dependencies = {
  moduleA: ['moduleB', 'moduleC'],
  moduleB: ['moduleC'],
  moduleC: [],
  moduleD: ['moduleA', 'moduleB'],
};

分析下依赖关系
模块A依赖B和C
模块B依赖C
模块C没有依赖
模块D依赖A和B

// 1.模块C没有依赖，所以先加载模块C
// 2.模块B依赖C，所以加载模块B
// 3.模块A依赖B和C，所以加载模块A
// 4.模块D依赖A和B，所以加载模块D


C , B , A, D


const loaded = new Set();
const order = [];

function loadModule(module) {
  if (loaded.has(module)) return;
  dependencies[module].forEach(dep => loadModule(dep));
  loaded.add(module);
  order.push(module);
}

// 依次尝试加载ABCD
['moduleA', 'moduleB', 'moduleC', 'moduleD'].forEach(loadModule);
console.log(order); // 输出顺序



// 合并两个有序数组

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。



