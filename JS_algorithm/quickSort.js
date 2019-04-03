/*
 * @Author: jw.song 
 * @Date: 2019-04-02 10:53:03 
 */
function quickSort( arr ){ // O(n log n)
  if(arr.length <= 1){
    return arr;
  }
 const interleval = Math.floor(arr.length/2);
 let left = [];
 let right = [];
  // split会对原有数组操作，返回删除部分的数组，第一个参数为删除的位置，第二个为删除的个数
 const interValue = arr.split(interleval, 1)[0];
 for(let i = 0; i < arr.length; i++){
   if( arr[i] < interValue){
    left.push(arr[i]);
   } else {
     right.push(arr[i]);
   }
 }
 return quickSort(left).concat(interValue, quickSort(right));
}

// 冒泡排序 // 思路：比较相邻的元素，如果第一个比第二个大，则交换他们
function bubleSort( arr ){
  for(var i = 0; i < arr.length; i++){
    for( var j = 0; j < arr.length-i-1; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// 冒泡排序2
function bubleSort1( arr ) {
  const len = arr.length
  let i = 0
  while( i < len ) {
    for( let j = 0 ; j < len - i - 1; j++ ) {
      if( arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
    i++
  }
  return arr
}

// 选择排序 O(n^2)  每次选择最小的和依次换位
function selectSort( arr ) {
  const len = arr.length
  let minIndex, temp
  for( let i = 0; i < len - 1; i++ ) { // 不需要走最后一个
    minIndex = i
    for(let j = i+1; j < len; j++ ) {
      if(arr[minIndex] > arr[j] ) {
       minIndex = j
      }
    }
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
}

// 归并排序 时间复杂度为 n logn
var mergeSort = function( arr ) {
  var len = arr.length
  if( len <= 1) {return arr}
  var middle = Math.floor( len / 2)
  var left = arr.slice(0, middle)
  var right = arr.slice( middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

var merge = function(left, right) {
  var il = 0, ir = 0, result = []

  while(i1 < left.length && ir < right.length ) {
    if(left[i1] < right[ir]) {
      result.push(left[il++])
    }

    if(left[il] > right[ir]) {
      result.push(right[il++])
    }
  }

  while(il < left.length) {
    result.push(left[il++])
  }

  while(ir < right.length) {
    result.push(right[ir++])
  }

  return result
}

// 插入排序 O(n^2)
function insertSort( arr ) {
  for(let i = 1; i < arr.length; i++ ) {
    let j = i - 1
    let temp = arr[i]
    while( j >= 0 && temp < arr[j]) { // 从第j个元素从后到前遍历，如果比temp大就“往前挪”
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}