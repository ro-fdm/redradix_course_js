class Observable {
  constructor(tempo) {
    this.tempo = tempo
    this.events = {}
  }

  on(event, cb) {
    // this.events[event] = this.events[event] || []
    if (this.events[event]){
      this.events[event].push(cb)
    } else {
      this.events[event] = [cb]
    }
  }

  off(event, cb) { 
    this.events[event] = this.events[event].filter(x => x !== cb)
  }

  emit(event, ...args) {
    const functions = this.events[event]
    for(let i =0; i < functions.length; i++){
      functions[i](...args)
    }
  }

}

// class Metronome extends Observable {
//   constructor(tempo){
//     super();
//     this.intervalId = setInterval(() => this.tick(), tempo);
//     this.counter = 0;}

//   tick(){
//     this.emit('tick', this.counter++);
//   }
// }

// const m = new Metronome(1000);
// m.on('tick', t => console.log('* tick number', t));
// m.on('tick', t => console.log('* tick number', t));


// class Dados extends Observable {
//   constructor(tempo){
//     super()
//     this.tempo = Math.floor(Math.random() * 500) + 100;
//     this.intervalId = setInterval(() => this.tirada(), tempo)
//   }

//   tirada(){
//     this.emit('tirada', Math.floor(Math.random() * 6) + 1)
//   }
// }

// const d = new Dados();
// const d2 = new Dados();
// d.on('tirada', t => console.log('Tirada', t))
// d2.on('tirada', t => console.log('Tirada', t))
