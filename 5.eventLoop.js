console.log('同步开始')
process.nextTick(function () {
  console.log('微任务开始')
  console.log('process')
})

setImmediate(function () {
  console.log('setImmediate')
})

new Promise(function (resolve) {
  console.log('new Promise--2')
  new Promise(function (resolve) {
    console.log('new Promise--22')
    resolve()
  }).then(function () {
    console.log('new Promise 22 then--32')
    setTimeout(function () {
      console.log('new Promise then setTimeout--42')
    })
  })
  resolve()
}).then(function () {
  console.log('new Promise 2 then--3')
  setTimeout(function () {
    console.log('new Promise 2 then setTimeout--4')
  })
})

setTimeout(function () {
  console.log('宏任务开始')
  console.log('setTimeout--5')
})

new Promise(function (resolve) {
  setTimeout(function () {
    console.log('new Promise setTimeout--6')
  })
  resolve()
}).then(function () {
  setTimeout(function () {
    console.log('new Promise setTimeout then setTimeout--7')
    new Promise(function (resolve) {
      setTimeout(function () {
        console.log('new Promise setTimeout then setTimeout new Promise setTimeout--8')
      })
      resolve()
    }).then(function () {
      process.nextTick(function () {
        console.log('new Promise setTimeout then setTimeout new Promise setTimeout then process.nextTick--11')
      })
      setTimeout(function () {
        console.log('new Promise setTimeout then setTimeout new Promise setTimeout then setTimeout--9')
      })
    })
  })
})
console.log('10')
console.log('同步结束')