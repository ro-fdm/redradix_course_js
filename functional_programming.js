// programacion funcional, funciones pequeñas que resuelven cada accion
// aplicandolas juntas nos da el resultado

function unless(test, block){
  if (!test){
    block()
  }
}

function repeat(times, block){
  for(let i = times; i--;) block()
}


function once(fn){
  let done = false
  return function (...args){
    if (!done) { 
      fn(...args)
      done = true
    }
  }
}

function throttle(fn, ms){
  let run_now = 0
  return function(...args){
    if (run_now === 0 || Date.now() - run_now >= ms){
      run_now = Date.now()
      console.log(run_now)
      return fn(...args)
    }
  }
}

//teacher solution
// function throttle(fn, ms){
//   let lastCall = 0
//   return function(...args){
//     let now = Date.now()
//     if (now - lastCall >= ms){
//       now = Date.now()
//       return fn(...args)
//     }
//   }
// }

function debounce(fn, ms){
  let id;
  return function(...args){
    clearTimeout(id)
    id = setTimeout(fn, ms)
  }
}

const slowLog = debounce(console.log, 100);
slowLog('Hi in 100ms');

// const slowLog = throttle(console.log, 10);
// slowLog('Hello!');
// slowLog('Nop');
// const slowLog = throttle(console.log, 10);
// for (let i=0; i<100000; i++)
//  slowLog(i);

// const env = 'DEBUG';
// unless(env === 'PRODUCTION', () => {
//  console.log('traza 18');
// });
// console.log('-----')
// unless(env === 'DEBUG', () => {
//  console.log('traza 18');
// });

//repeat(10, () => console.log('I <3 FP'));

//const log = once(console.log);
//log('Hello!');
//log('Goodbye!');
