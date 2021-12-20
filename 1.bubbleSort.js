// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
let arr = [3, 1, 2, 45, 6, 8, 10, 999, 123, 4]
let arrSort = bubbleSort(arr)
console.log(arrSort) // [ 1, 2, 3, 4, 6, 8, 10, 45, 123, 999 ]
