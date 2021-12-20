// 选择排序
function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
let arr = [3, 1, 2, 45, 6, 8, 10, 999, 123, 4]
let arrSort = selectionSort(arr)
console.log(arrSort) // [ 1, 2, 3, 4, 6, 8, 10, 45, 123, 999 ]
