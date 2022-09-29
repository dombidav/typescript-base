// let alma = 'alma' // Változó
// const korte = 'korte' // Konstans
//
// alma = 'körte'
//
// console.log(alma)
//
// if(2 === '2') {
//   console.log('alma')
// } else if(alma) { // pl. Üres string "falsy"
//
// }
//
// while(true) {
//   break
// }
//
// do {
//
// }while (true)
//
// for(let i = 0; i < 10; i++) {
//
// }
//
// for(const i of [1,2,3]) {
//
// }

const newVar = { a: 1, b: 2, d: true, c: false }
for (const key in newVar) {
  console.log(key)
  console.log(newVar[key as keyof typeof newVar])
}

// const alma: (string|2)[] = ['alma', 'körte', 'szilva', 1, 2, 3]
const a = { a: 1, b: 2, c: 3 }
const b = { d: 4, e: 5, f: 6 }
const c = { ...a, ...b }
console.log(c)

type MyType = { a: number; b: string }
type MyType2 = { b: string; c: boolean }

// const myVar: MyType & MyType2 = {c: true, b: 'alma' }

function myFunc(a: number | string, b?: number) {
  if (typeof a === 'string') {
    return a.toUpperCase()
  }

  if (b !== undefined) {
    return a + b
  }

  return b
}

myFunc('1')

class Auto implements IAuto {
  private _speed: number

  constructor(speed: number, private readonly _color?: string) {
    this._speed = speed
  }

  get color() {
    return this._color
  }

  get speed() {
    return this._speed
  }

  set speed(value: number) {
    this._speed = value
  }

  public drive() {
    console.log('driving')
  }
}

class BMW extends Auto {
  constructor() {
    super(100, 'red')
  }

  public drive() {
    console.log('driving BMW')
  }
}

interface IAuto {
  speed: number
  drive(): void
}
