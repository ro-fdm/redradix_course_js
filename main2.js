// function returnMaxMin() {
//   const ary = [...arguments]
//   let max = 0
//   let min = 0
//   ary.forEach(function (item, index) {
//     if (item > max) {
//       max = item
//     }
//     else if (item < min) {
//       min = item
//     }
//   })
//   console.log(max)
//   console.log(min)
// }


// function retunrMaxMin(...ary){
//   let max = -Infinity
//   let min = +Infinity
//   ary.forEach(function(value, index){
//     if (value > max){
//       max = value
//     }
//     else if (value < min){
//       min = value
//     }
//   })
//   //return {max: max, min: min}
//   return [max, min]
// }


// function retunrMaxMin(...args){
//   let max = Math.max(...args)
//   let min = Math.min(...args)

//   return [max, min]
// }

// let [min, max] = retunrMaxMin()

// function func(number1){
//   return function (n) {
//     return number1 + n
//   }
// }

// let suma2 = func(2)
// let suma7 = func(7)
// console.log(suma2(10))


// function clone(obj){
//   return Object.assign({}, obj)
// }
// console.log(clone({a:1, b:2, c:3}))


// function sumcase(obj){
//   let total = 0;
//   let values = Object.values(obj)
//   values.forEach(function(value){
//     if (typeof value == 'object') {
//       total += sumcase(value)
//     } else {
//       total += value
//     }
//   })
//   console.log(total)
//   return total;

// }
//sumcase({a:1, b:{c:2, d:5, e:{f:9, g:6}}})
//console.log(sumcase({a:1, b:{c:2, d:5, e:{f:9, g:6}}}))

// objeto user 1, objeto user2 y users que contiene a los dos

// si hacemos una copia de users si le asignamos una nueva clave a la copia
// no compartira referencia y podre cambiar solo el que quiero
// pero si en lugar de modificar users copy modifico a uno de sus hijos
// si estoy modificando a los hijos de user
// hay que hacer una copia del objeto total que tambien haga copia de los niveles hijos

let user1 = {user1: { name : 'harry', lastname: 'potter'}}
let user2 = {user2: { name: 'hermione', lastname: 'granger'}}

let users = Object.assign({}, user1, user2)
// let users_copy = Object.assign({}, users)
// console.log(users)
// console.log(users_copy)

// //users_copy['user1']['name'] = 'tom sorvolo'
// //console.log(users)
// //console.log(users_copy)

function reclone(obj){
  let copy = {}
  Object.keys(obj).forEach(function(key){
    if (typeof obj[key] == 'object'){
      let copy_element = {[key]: obj[key]}
      console.log( copy_element[key] === obj[key])
      copy = Object.assign(copy, copy_element)
      reclone(obj[key])
    } else {
      return copy
    }
  })
  return copy
}

let users_copy = reclone(users)
console.log(users_copy)


// const u1 = { username: 'root', password: 'iamgod' }
// const u2 = { username: 'luser', password: '12345' }
// const users = { u1: u1, u2: u2 }
// const usersCopy = Object.assign({}, users)
// usersCopy.u3 = { username: 'admin', password: 'aDS00Dkxx098Sd' }
// // Pregunta 1
// console.log(users.u3) // ???
// // Pregunta 2
// usersCopy.u1.username = 'p0wnd'
// console.log(u1) // ???
// console.log(users.u1.username) // ???
// console.log(users.u1 === usersCopy.u1) // ???
