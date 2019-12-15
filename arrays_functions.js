// let array = [8, 12, 20]
// function div_two(n){
//   return n/2
// }
// console.log(array.map(div_two))

// let array2 = [1, 7, 50]
// function to_string(s){
//   return String(s)
// }
// console.log(array2.map(to_string))

// let array3 = [-2, 5, 15, -7, -8]
// function signal(n){
//   if (n >0){ return '+'}
//     else {return '-'}
// }
// console.log(array3.map(signal))

// let array4 =[{name: 'Alberto'}, {name: 'Fran'}]
// function name(h){
//   return h.value
// }
// console.log(array4.map(name))

// let array5 =['lorem ipsum dolor', 'hello world']
// // output ['lid', 'hw']
// function phrase(n){
//   const words = n.split(' ')
//   let acc = words.map(w => w[0]).join('')
//   return acc
// }
// console.log(array5.map(phrase))//.map(w => w[0].join(''))))
//array5(phrase => phrase.split(' ').map(w => w[0].join('')))
//console.log(array5.phrase())
// let array6 = [[1, 2], [34, 20, 5], [11], [2, 4]]
// return [3, 59]...

// array7 = [1,2,3,4,5,6,7,8,9]
// function odd(n){
//   if (n%2 !== 0){
//     return n
//   }
// }
// console.log(array7.filter(odd))
// console.log(array7.filter(n => n%2 !== 0))
// array8 = [ {important: true, is: 1}, {important: false, is:2}, {important: true, is: 3}]
// function isImportant(h){
//   if (h['important'] === true){
//     return h
//   }
// }

// console.log(array8.filter(isImportant))
// console.log(array8.filter( h => h['important'] === true))

// array9 = [10, 3, 4]
// function minus(acc, n){
//   return acc - n
// }

// console.log(array9.reduce(minus, 0))

// array10 = ['avada', 'kevadra', 'spell']
// function sumStrings(acc, w){
//   return acc.concat(w)
// }
// console.log(array10.reduce(sumStrings, ''))

// array11 = [1,2,3 -1,-2]
// // in process
// function sumPositive(acc, n){
//   return acc + 1 if(n >0)
// }
// // teacher solution
// array11.reduce((acc, x) => x >=0 ? acc +x : x, 0)

// function memoize(fn){
//   const requests = {}
//   return function (arg){
//     if(requests[arg] === undefined){
//       requests[arg] = fn(arg)
//     }
//   }
// }

// fn = function(a){ return a + 10}
// console.log(memoize(fn(1)))

function partial(fn, ...args){
  return function(...rest){
    return fn(...args, ...rest)
  }
}

// function partial(fn, ...args){
//   return (...newArgs) => fn(...args, ...newArgs)
// }

// const log = partial(console.log, 'She said:');
// log('Hello!'); // She said: Hello!
// log(); 

// function suma(a, b) {
//  return a + b;
// }
// const suma100 = partial(suma, 100);
// console.log(suma100(2)); // 102
// const suma5y2 = partial(suma, 5, 2);
// console.log(suma5y2()); // 7

function currify(fn){
  const args = fn.length // me devuelve los argumentos que espera esa funcion
  return function(...rest){
    if (rest.length === args){
      return fn(...rest)
    } else {
      return partial(currify(fn),...rest)
    }
  }
}


// function map(fn, list){
//   return function currify(fn, list){
//     const acc = []
//     for(let i = 0; i < list.length; i++ ){
//        acc.push(fn(value))
//     }
//     return acc
//   }
// }

const map = currify((arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), []))
const filter = currify((arr, fn) => arr.reduce((acc, x) => fn(x) ? acc.concat(x) : acc, []))

const suma = currify((a, b) => a + b);
const mapPlus100 = map(suma(100));
const mapPlus5 = map(suma(5));
mapPlus100([1, 2, 3]); // [101, 102, 103]
mapPlus5([1, 2, 3]); // [6, 7, 8]

//teacher solution
// function currify(fn){
//   return function aux
// }

// function suma(a, b) { return a + b; }
// const csuma = currify(suma);
// console.log(csuma(1, 1)); // 2
// const suma1 = csuma(1);
// suma1(1); // 2
// console.log(csuma(1)(1)); // 2

// function suma4(a, b, c, d) { return a + b + c + d; }
// const rsuma4 = currify(suma4);
// console.log(rsuma4(1, 1, 1, 1)); // 4
// console.log(rsuma4(1, 1, 1)(1)); // 4
// console.log(rsuma4(1, 1)(1, 1)); // 4
// console.log(rsuma4(1)(1, 1, 1)); // 4
// console.log(rsuma4(1)(1)(1)(1)); // 4

