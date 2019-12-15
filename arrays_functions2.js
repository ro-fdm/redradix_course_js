function currify(fn) {
  return function aux(...args) {
    if (args.length >= fn.length)
      return fn(...args);
    else
      return (...more) => aux(...args, ...more);
  };
}

const reduce = currify((combine, start, list) => {
  let current = start;
  for (let element of list)
    current = combine(current, element);
  return current;
});

const map = currify((arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), []))
const filter = currify((arr, fn) => arr.reduce((acc, x) => fn(x) ? acc.concat(x) : acc, []))

const suma = (a, b) => a + b;
const sumaLista = reduce(suma, 0);

const list1 = [1, 1, 1, 1];
const list2 = [2, 2, 10];
console.log(sumaLista(list1)) // 4
console.log(sumaLista(list2)) // 14

