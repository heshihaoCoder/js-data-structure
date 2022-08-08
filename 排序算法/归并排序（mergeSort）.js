let arr = [2, 5, 3, 7, 6, 4, 21, 13, 1]
function mergeSort() {
  arr = mergeSortFun(arr)
}

function mergeSortFun(nums) {
  let length = nums.length
  if (length == 1) {
    return nums
  }
  let mid = Math.floor(nums / 2)
  let leftArr = nums.slice(0, mid)
  let rightArr = nums.slice(mid, nums.length)
  return merge(mergeSortFun(leftArr), mergeSortFun(rightArr))
}

function merge(left, right) {
  var result = [], // {7} 
    il = 0,
    ir = 0;
  while (il < left.length && ir < right.length) { // {8} 
    if (left[il] < right[ir]) {
      result.push(left[il++]); // {9} 
    } else {
      result.push(right[ir++]); // {10} 
    }
  }
  while (il < left.length) { // {11} 
    result.push(left[il++]);
  }
  while (ir < right.length) { // {12} 
    result.push(right[ir++]);
  }
  return result; // {13} 
};