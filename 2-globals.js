//GLOBALS -NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - filename
// require    - funciton to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is beign executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('hello world')
}, 1000)