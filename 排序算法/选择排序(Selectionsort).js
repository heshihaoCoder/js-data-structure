let arr = [2, 5, 3, 7, 6, 4, 21, 13, 1]
// 选择排序
function sort(nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return nums
}