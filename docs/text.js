var merge = function(nums1, m, nums2, n) {
    return nums1.concat(nums2).sort((a,b)=>a-b).filter((item)=>item!==0);
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3),333)