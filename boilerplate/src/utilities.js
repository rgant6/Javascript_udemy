// named export
// Named we can have as many as we need

// default export 
// default only one

const add = (a,b) => a+b

const name = 'Beth'

const square = (x) => x*x

export {add, name, square as default}
// export default square