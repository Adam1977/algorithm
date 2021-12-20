# algorithm
web algorithm

1.  冒泡排序
    定义: 两两比较，根据大小交换顺序（前者大于后者，交互位置）。

    ```js
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
    ```

2.  选择排序
    定义: 假定第一个元素是最小值，循环比较，有比它小的元素和它交换位置。

    ```js
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
    ```

3.  插入排序
    定义: 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入.

    ```js
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
    ```
