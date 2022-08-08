// 冒泡排序
let arr = [2, 5, 3, 7, 6, 4, 21, 13, 1]
function sort(nums) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return nums
}