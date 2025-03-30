var merge = function (nums1, m, nums2, n) {
    return nums1.concat(nums2).sort((a, b) => a - b).filter((item) => item !== 0);
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), 333)




// function loadModule(module) {

//     const dependencies = {
//         moduleA: ['moduleB', 'moduleC'],
//         moduleB: ['moduleC'],
//         moduleC: [],
//         moduleD: ['moduleA', 'moduleB'],
//     };
//     if (loaded.has(module)) return;
//     dependencies[module].forEach(dep =>{
//         console.log(dep,111)
//     });
//     loaded.add(module);
//     console.log(loaded,'loaded')
//     order.push(module);
// }

// // 依次尝试加载ABCD
// ['moduleA', 'moduleB', 'moduleC', 'moduleD'].forEach(loadModule);
// console.log(order); // 输出顺序



// Set 应用  es6 module  其他场景 文本中不同字符统计 ，用户id 统计总数，去重


const loaded = [];
const order = [];

const loadModule = (modules) => {
    // 依赖
    const dependencies = {
        moduleA: ['moduleB', 'moduleC'],
        moduleB: ['moduleC'],
        moduleC: [],
        moduleD: ['moduleA', 'moduleB'],
    };

    if (loaded.includes(modules)) return; // 已经加载过的依赖不会继续加载

    // 递归加载依赖
    for (let dep of dependencies[modules]) {
        loadModule(dep);
    }
    loaded.push(modules);
    // console.log(loaded,'loaded')
    order.push(modules);
}

// 依次加载模块
const modules = ['moduleA'];
for (let mod of modules) {
    loadModule(mod);
}

console.log(order); // 输出加载顺序


// 深度优先搜索 本质是递归搜索

// function Node(value) {
//     this.value = value;
//     this.childs = []
// }
// var a = new Node('a')
// var b = new Node('b')
// var c = new Node('c')
// var d = new Node('d')
// var e = new Node('e')
// var f = new Node('f')
// a.childs.push(c);
// a.childs.push(f);
// a.childs.push(b);
// b.childs.push(d);
// b.childs.push(e);





// 合并两个有序数组

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。


var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }
    return nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), 222)



// 删除指定为3的元素
/* 
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2,_,_]
*/

// var removeElement = function (nums, val) {
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         if (nums[i] === val) {
//             for (let j = i + 1; j < len; j++) {
//                 nums[j - 1] = nums[j]
//             }
//             i--;
//             len--;
//         }
//     }
//     return len
// };

// console.log(removeElement([3, 2, 2, 3], 3), 333
// )


// 双指针

var removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i
}


console.log(removeElement([3, 2, 2, 3], 3), 333
)


