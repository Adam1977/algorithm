// 复利demo，10%的涨幅，10w在10年后为258374元
// const Fn = (amount, rate, year) => {
//   let i = 0
//   while (i < year) {
//     amount += amount * rate
//     i++
//   }
//   return amount
// }
// console.log(Fn(100000, 0.1, 10))

// js事件循环
process.nextTick(function () {
  console.log('1')
})

new Promise(function (resolve) {
  console.log('2')
  resolve()
}).then(function () {
  console.log('3')
  setTimeout(function () {
    console.log('4')
  })
})

setTimeout(function () {
  console.log('5')
})

new Promise(function (resolve) {
  setTimeout(function () {
    console.log('6')
  })
  resolve()
}).then(function () {
  setTimeout(function () {
    console.log('7')
    new Promise(function (resolve) {
      setTimeout(function () {
        console.log('8')
      })
      resolve()
    }).then(function () {
      process.nextTick(function () {
        console.log('11')
      })
      setTimeout(function () {
        console.log('9')
      })
    })
  })
})
console.log('10')

// 单线程，阻塞执行
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
// const printNums = async () => {
//   console.log(1)
//   await sleep(500)
//   console.log(2)
//   console.log(3)
// }
// printNums()
