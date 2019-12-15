// function whatever(){
//   console.log(this)
// }
// whatever()

// sin argumentos
// function func(){
//   console.log(this.num)
// }

// let obj= {
//   callFun:func
// }

// obj.callFun.call({num:10})

// con argumentos
// function func(a, b){
//   console.log(this.num, a, b)
// }

// let obj= {
//   callFun:func
// }

// obj.callFun.apply([{num:10}, 1, 2])


// let context = { name: 'belen' }
// let funk = function(){console.log(this.name)}


// function funct1 (context, funk){
//   funk.apply(context)
// }

// funct1(context, funk)

// function applyContext(func, context){
//   return function(...args){
//     return func.apply(context, args)
//   }
// }

// let contextifiedFunction = applyContext(function(){
//   console.log(this.num)
// }, {num: 10})

// contextifiedFunction(1, 2)


// const obj = [1, 2, 3, 4, 5, 6]

// Object.defineProperty(obj, 'average',{
//   get: function(){
//     let total = 0
//     // this.forEach(x => total = total + x)
//     // return total/this.length 
//     this.forEach(function (item){
//       if (typeof item == 'number'){
//         total += item
//       }
//     })
//     return (total/ 2)
//   }
// })
// console.log(obj.average)


// obj2 = [1, 2, 3, 4]
// Object.defineProperties(obj2, {
//   '_ary': {value: []},
//   'saveValues': {
//     set: function(val) {
//       console.log(this)
//       this._ary.push(val)
//       }
//     }
//   })

// obj2.saveValues = 2
// console.log(obj2)


// obj3 = [1, 2, 3, 4]
// Object.defineProperty(obj3, 'lastElement', {
//   get: function(){
//     return this[this.length - 1]
//   }
// })
// console.log(obj3.lastElement)

// let obj = {}
// let properties = {
//   'x': {
//     get: function(){
//       this._array[this._array.length -1]
//     },
//     set: function(val){
//       this._array.push(val)
//     }
//   },
//   '_array': {value:[]} // propiedad oculta
// }
// Object.defineProperties(obj, properties)

// obj.undo = function(){
//   this._array.pop()
// }

// obj.x = 1
// obj.x = 2
// obj.x = 3
// obj.x = 4
// obj.undo()
// console.log(obj._array)
// console.log(obj.x)


//////////////////////// not works
const u1 = { a: { b: { c: 1 } } }
const u2 = { a: { b: { d: 2 } } }

// // const x = Object.assign({}, u1, u2)
// // console.log(x.a.b)
// // console.log(x)
// // console.log('-----------')

// function funcMerge(val1, val2){
//   let mergeObject = {}
//   entries1 = Object.entries(val1)
//   entries2 = Object.entries(val2)
//   if (entries1[0][0] === entries2[0][0]){
//     console.log('////////')
//     funcMerge(entries1[0][1], entries2[0][1])
//   } else {
//     console.log('###########')
//     mergeObject[entries1[0][0]] = entries1[0][1]
//     mergeObject[entries2[0][0]] = entries2[0][1]
//     console.log(mergeObject)
//   }
//   console.log(mergeObject)
//   return mergeObject
// }

// const y = funcMerge(u1, u2)
