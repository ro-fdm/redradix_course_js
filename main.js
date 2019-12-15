// const c = Object.create(null)
// const b = Object.create(c)

// const a = Object.create(b)

// console.log(a)
// console.log(b)
// console.log(c)


// function User(name){
//   this.name = name
//   this.age = 13
// }

// User.prototype.greet = function(){
//   console.log(`Hola ${this.name}`)
// }

// const harry = new User("Harry")
// harry.greet()
// console.log(harry.age)

// const hermione = new User("Hermione")
// hermione.spell = 'Wingardium leviosa'

// hermione.greet
// hermione.age = 14
// console.log(hermione.age)
// console.log(harry.age)
// hermione.spell
// harry.spell

///dont works
// function myNew(prototype, name, func){
//   prototype = Object.create(null)
//   prototype.name = name
//   prototype
//   console.log(prototype)
//   instance = Object.create(prototype)
//   return instance
// }

// const toby = myNew('Dog', "Toby", {sit: function(){console.log("wof wof")}})

// //teacher solution
// function myNew(constructor, ...args){
//   let obj = Object.create(constructor.prototype)
//   constructor.appy(obj, args)
//   return obj
// }

function Container(name) {
  this.name = name
}

Container.prototype = {
  canFit: function(item) {
    throw new Error('Abstract method')
  },
  store: function(item) {
    throw new Error('Abstract method')
  },
  retrieve: function(index) {
    throw new Error('Abstract method')
  }
}

function ItemContainer(name){
  Container.call(this, name)
  this.items = []
}

ItemContainer.prototype = Object.create(Container.prototype)
// es igual si haces.   = Container pero sobreescribiriamos los metodos
ItemContainer.prototype.canFit = function(item){
  return true
}

ItemContainer.prototype.store = function(item){
  if (this.canFit(item)) {
    this.items.push(item)
  }
  return this.items.length -1
}

ItemContainer.prototype.retrieve = function(index){
  return this.items[index]
}

function Item(name, size, category, createdAt) {
  ItemContainer.assign(this, { name, size, category, createdAt })
  //ItemContainer.call(this, name)
}

Item.prototype = Object.create(ItemContainer.prototype)
Item.prototype.getSize = function() { return this.size }

// const itemContainer = new ItemContainer('Test Container')
// console.log(itemContainer)
// const item1 = new Item('Item1', 10, 'test', new Date())
// console.log(item1)

// const index = itemContainer.store(item1)
// console.log(index) // [0]
// const retrieved = itemContainer.retrieve(index)
// console.log(retrieved.name) // Item1

function ItemBox(capacity){
  this.capacity = capacity
}

ItemBox.prototype = Object.create(ItemContainer.prototype)

ItemBox.prototype.canFit = function(item){
  if (this.capacity - item.size >= 0 ){
    return true
  } else {
    return false
  }
}

const box = new ItemBox(10)
console.log(box)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())

box.store(item1)
box.store(item2)

box.canFit(item3) // false
console.log(box.retrieve([1]).name) // Item 2
