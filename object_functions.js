function currify(fn) {
  return function aux(...args) {
    if (args.length >= fn.length)
      return fn(...args);
    else
      return (...more) => aux(...args, ...more);
  };
}

// const reduce = currify((combine, start, list) => {
//   let current = start;
//   for (let element of list)
//     current = combine(current, element);
//   return current;
// });

// CREAR UN COMPOSE QUE PUEDA RECIBIR UN NUMERO CUALQUIERA DE FUNCIONES
// function compose(fn1, fn2,...args){
//   return function composed(...args){
//     let result = fn2(...args)
//     let final_result = fn1(result)
//     return final_result
//  }
// }


function compose(...fns){
  fns = fns.reverse()
}

//teacher solution
function compose(...fns){
  fns = fns.reverse()
  const [head, ...tail] = fns
  return(...args) => {
    tail.reduce((acc, fn) => fn(acc), head(...args))
  }
}

// const suma = (a, b) => a + b;
// const half = x => x / 2;
// compose(half, suma)(10, 2) === half(suma(10, 2))

// pipe = (...fns) => compose(fns.reverse())

function range(start, end) {
  const list = [];
  for (let i=start; i<=end; i++)
    list.push(i);
  return list;
}

function mult3(n) { return n % 3 === 0; }
function mult5(n) { return n % 5 === 0; }
function and(pred1, pred2) {
  return n => pred1(n) && pred2(n);
}

function replaceWhen(pred, replacement) {
  return value => pred(value) ? replacement : value;
}

const fizzbuzz = compose(
  replaceWhen(mult3, 'fizz'),
  replaceWhen(mult5, 'buzz'),
  replaceWhen(and(mult3, mult5), 'fizzbuzz')
);
range(1, 100).map(fizzbuzz);
// range(1, 100).map(replaceWhen(and(mult3,  mult5), 'fizzbuzz'))
// range(1, 100).map(replaceWhen(mult3, 'fizz'))
// range(1, 100).map(replaceWhen(mult5, 'buzz'))
