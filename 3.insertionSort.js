// 插入排序
function insertionSort(arr) {
  let len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}
let arr = [3, 1, 2, 45, 6, 8, 10, 999, 123, 4]
let arrSort = insertionSort(arr)
console.log(arrSort) // [ 1, 2, 3, 4, 6, 8, 10, 45, 123, 999 ]
