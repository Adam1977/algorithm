let resData = [
  {
    Children: [
      {
        a: 1,
        Children: [
          {
            Children: []
          }
        ]
      }
    ]
  }
]
let childFilter = (list) => {
  if (list.length) {
    list.forEach((val) => {
      if (val.Children.length) {
        childFilter(val.Children)
      } else {
        delete val.Children
      }
    })
  }
  return list
}
let finalChild = childFilter(resData)
console.log(JSON.stringify(finalChild))
