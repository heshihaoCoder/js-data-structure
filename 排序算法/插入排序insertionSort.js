let arr = [2, 3, 5, 7, 8, 9, 21, 13, 65]


function insertSort(nums) {
  let length = nums.length,
    j,  //记录数组位置
    temp   //记录数组当前值

  for (var i = 1; i < length; i++) { //{2} 
    j = i; //{3} 
    temp = nums[i]; //{4} 
    while (j > 0 && nums[j - 1] > temp) { //{5} 
      nums[j] = nums[j - 1]; //{6} 
      j--;
    }
    nums[j] = temp; //{7} 
  }
  return nums
}

console.log(insertSort(arr))