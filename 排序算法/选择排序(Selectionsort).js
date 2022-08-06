let arr = [2, 3, 5, 7, 8, 9, 21, 13, 65]
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