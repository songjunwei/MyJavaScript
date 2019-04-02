/*
 * @Author: jw.song 
 * @Date: 2019-04-02 10:53:03 
 */

function quickSort( arr ){
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