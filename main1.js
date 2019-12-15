

// function createFns() {
//   let fns = []
//   for (i = 0; i< 10; i++) {
//     fns.push(i)
//   }
//   //console.log(fns)
//   return fns
// }
// console.log(createFns())


// function randomNumber(n) {
//   let base
// if (Math.random() > .5) {
//     base = 1
//   } else {
//     base = -1
//   }
//   return base * n * Math.random()
// }

// function writeDate(){
//   let date_now = new Date();
//   let hours = date_now.getHours()
//   let minutes = date_now.getMinutes()
//   let seconds = date_now.getSeconds()
//   let date_to_write = `${hours}:${minutes}:${seconds}`
//   console.log(date_to_write)
// }

  //setInterval(writeDate, 1000)

// function list_array(ary){
//   let ary_string = ''
//   let ary_length = ary.length
//   ary.forEach(function (item, index){
//     if (index < ary_length - 2)
//       {
//         ary_string +=`${item}, `
//       }
//     else if(index < ary_length - 1)
//     {
//       ary_string +=`${item}`
//     }
//     else
//       {
//         ary_string += ` y ${item}`
//       }
//   })
//   console.log(ary_string)
//  }

// const usuario = {
//   nombre: 'Elias',
//   apellido: 'Alonso',
//   toString: function(){
//     return `${this.nombre} ${this.apellido}`
//   }
// }

// //console.log(`Bienvenido, ${usuario}`)
// console.log(usuario.toString())

// const {uno, dos } = { uno: 1, dos: 2 }
// console.log(uno)
// console.log(dos)

// const {uno, lista:[dos, tres], cuatro, x:{cinco}} = { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } }
// console.log(uno)
// console.log(dos)
// console.log(tres)
// console.log(cuatro)
// console.log(cinco)

// const {uno: a, lista:[b, c], cuatro:d, x:{cinco:e}} = { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

//var [{ lista: [, { x: { y: dos } } ] }] = [{ lista: [, { x: { y: 2 } } ] }]
//console.log(lista)
