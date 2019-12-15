class Container{
  constructor(name){
    this.name = name
  }

  canFit(){
    throw new Error('Abstract method')
  }

  store(){
    throw new Error('Abstract method')
  }

  retrieve(){
    throw new Error('Abstract method')
  }
}

class ItemContainer extends Container{
  constructor(name){
    super(name)
    this.items = []
  }

  canFit(item){
    return true
  }

  store(item){
    //if(this.canFit(item)){
      this.items.push(item)
    //}
    return [this.items.length - 1]
  }

  retrieve([index]){
    return this.items[index]
  }
}

class Item extends ItemContainer{
  constructor(name, size, category, createdAt){
    super(name)
    Object.assign(this, { name, size, category, createdAt })
  }

  getSize(){
    return this.size
  }
}

// const itemContainer = new ItemContainer('Test Container')
// console.log(itemContainer)
// const item1 = new Item('Item1', 10, 'test', new Date())
// console.log(item1)

// const index = itemContainer.store(item1)
// console.log(index) // [0]
// const retrieved = itemContainer.retrieve(index)
// console.log(retrieved.name) // Item1

class ItemBox extends ItemContainer{
  constructor(capacity){
    super('ItemBox')
    this.capacity = capacity
    this.unsedSpace = 0
  }

  canFit(item){
    return item.size <=(this.capacity - this.unsedSpace)
  }

  store(item){
    if(this.canFit(item)){
      this.unsedSpace += item.size
      return super.store(item)
    }
  }
}


// const box = new ItemBox(10)

// const item1 = new Item('Item 1', 5, 'test', new Date())
// const item2 = new Item('Item 2', 3, 'test', new Date())
// const item3 = new Item('Item 3', 3, 'test', new Date())

// box.store(item1)
// box.store(item2)

// box.canFit(item3) // false
// console.log(box.retrieve([1]).name) // Item 2

// class NestedContainer extends Container{
//   constructor(name, subcontainers){
//     super(name)
//     this.subcontainers = subcontainers
//   }

//   canFit(item){
//     this.subcontainers.forEach(function(subcontainer){
//       if( subcontainer.canFit(item) ){
//         return true
//       }
//     })
//     return false
//   }

//   store(item){
//     for(let i=0; i < this.subcontainers.length; i++){
//       if(this.subcontainers[i].canFit(item)){
//         return this.subcontainers[i].store(item)
//         //return [i, this.subcontainers[i].items.size] falta devolver los dos arrays
//       }
//     }
//   }

//   retrieve(indexes){
//     return this.subcontainers[indexes[0]].retrieve([indexes[1]])
//   }
// }


// const boxes = [new ItemBox(10), new ItemBox(10)]
// const nestedContainer = new NestedContainer('NestedContainer', boxes)
// const item1 = new Item('Item 1', 5, 'test', new Date())
// const item2 = new Item('Item 2', 3, 'test', new Date())
// const item3 = new Item('Item 3', 3, 'test', new Date())
// const item4 = new Item('Item 4', 8, 'test', new Date())

// nestedContainer.store(item1)
// const i1 = nestedContainer.store(item2)
// console.log(i1) // [0, 1]
// nestedContainer.canFit(item3) // true
// const i2 = nestedContainer.store(item3)
// console.log(i2) // [1, 0]
// nestedContainer.canFit(item4) // false
// console.log(nestedContainer.retrieve([0, 1]).name) // Item 2


// teacher solution
class NestedContainer extends Container{
  constructor(name, subcontainers){
    super(name)
    this.subcontainers = subcontainers
  }

  canFit(item){
    return this.subcontainers.some( subcontainer => subcontainer.canFit(item)) // funcion para array devuelve si algun elemento cumple la condicion
  }

  store(item){
    if(this.canFit(item)){
      let index = this.subcontainers.findIndex(subcontainer => subcontainer.canFit(item))
      return [index].concat(this.subcontainers[index].store(item))
    }
  }

  retrieve(index, ...rest){
    return this.subcontainers[index].retrieve(rest)
  }
}

class Shelf extends NestedContainer{
  constructor(maxBoxes, boxCapacity){
    super('Shelf', [])
    this.maxBoxes = maxBoxes
    this.boxCapacity = boxCapacity
  }

  canFit(item){
    if(super.canFit(item)) return true
    return (this.boxCapacity >= item.size && this.maxBoxes > this.subcontainers.length)
  }

//   store(item){
//     if(this.canFit(item)){
//       if(this.subcontainers.some( subcontainer => subcontainer.canFit(item))){
//         // do nothing
//       } else {
//         const box = new ItemBox(this.boxCapacity)
//         this.subcontainers.push(box)
//       }
//       return super.store(item)
//     }
//   }
// }

// teacher solution

  store(item){
    if(this.canFit(item)){
      if(!super.canFit(item)){
        this.subcontainers.push( new ItemBox(this.boxCapacity))
      }
      return super.store(item)
    }
  }
}


class Rack extends Shelf {
  constructor(numShelves, boxesPerShelf, boxCapacity){
    super(boxesPerShelf, boxCapacity)
    this.name = 'Rack'
    this.numShelves = numShelves
    let shelves = []
    for(var i=0; i < this.numShelves; i++){
      const shelf = new Shelf(boxesPerShelf, boxCapacity)
      shelves.push(shelf)
      let boxes = []
      for(var o=0; o < boxesPerShelf; o++){
        const box = new ItemBox(boxCapacity)
        boxes.push(box)
        shelf.subcontainers = boxes
      }
    }
    this.shelves = shelves
  }

  canFit(item){
    return this.shelves.some( shelf => shelf.canFit(item))
  }

  store(item){
    return super.store(item)
  }

  retrieve(index){
    return super.retrieve(index)
  }
}

const rack = new Rack(2, 2, 5)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())
const item4 = new Item('Item 4', 8, 'test', new Date())
const item5 = new Item('Item 5', 1, 'test', new Date())

console.log(rack.subcontainers.length) // 2
rack.store(item1)
rack.store(item2)
console.log(rack.store(item3)) // [1, 0, 0]
rack.canFit(item4) // false
rack.canFit(item5) // true
console.log(rack.retrieve([0, 1, 0]).name) // Item 2
// const shelf = new Shelf(2, 10)
// const item1 = new Item('Item 1', 5, 'test', new Date())
// const item2 = new Item('Item 2', 3, 'test', new Date())
// const item3 = new Item('Item 3', 3, 'test', new Date())
// const item4 = new Item('Item 4', 8, 'test', new Date())
// const item5 = new Item('Item 5', 1, 'test', new Date())
// // shelf starts with 0 boxes...
// console.log(shelf.subcontainers.length) // 0
// // ...but has to create a new box to hold item1
// shelf.canFit(item1) // true
// shelf.store(item1)
// console.log(shelf.subcontainers.length) // 1
// shelf.canFit(item2) // true
// shelf.store(item2)
// console.log(shelf.subcontainers.length) // 1
// shelf.canFit(item3) // true
// shelf.store(item3)
// console.log(shelf.subcontainers.length) // 2
// shelf.canFit(item4) // false
// shelf.canFit(item5) // true
// console.log(shelf.store(item5)) // [0, 2]
