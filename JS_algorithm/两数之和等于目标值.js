/* // 在数组中找两个数之和 等于 目标值，并返回下标
 * @Author: jw.song 
 * @Date: 2019-04-04 10:29:15 
 */

 // 方法1 暴力解法 时间复杂度高（n2）
function getTwoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length + 1; j++ ) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

// 方法2 使用map 空间换时间
function twoSum(nums, target) {
  var map = new Map();
  for(var i = 0; i < nums.length; i++ ) {
      map.set(nums[i], i);
  }
  for(var j = 0; j < nums.length; j++ ) {
      var value = target - nums[j]
      if(map.has(value) && map.get(value) !== j) {
          return [map.get(value), j]
      }
  }
  return []
  };


// 找出数组中两个元素之和等于指定元素的pair（输出多组）
function getNumFromArr( arr, num) {

  Array.sort(arr) // 时间复杂度O(n logn)

  var left = 0, right = arr.length - 1, result = []
  while(left < right) {
    if(arr[left] + arr[right] > num) {
      right--
    }
    if(arr[left] + arr[right] < num) {
      left++
    }
    if(arr[left] + arr[right] == num){
      result.push([left, right])
      left++
      right--
    }
  }
  return result

}
